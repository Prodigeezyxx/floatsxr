// POST /api/send-quote — Cloudflare Pages Function.
// Receives the quote wizard payload, verifies Turnstile, sends two emails via Resend.
// Env (Pages dashboard): RESEND_API_KEY (secret), TURNSTILE_SECRET (secret),
//   RESEND_FROM (optional), TEAM_EMAIL (optional).

import {
  validateQuotePayload,
  buildLeadEmailHtml,
  buildTeamEmailHtml,
  subjectForLead,
  subjectForTeam,
  emailSenderFrom,
  jsonResponse,
  TEAM_EMAIL,
  TURNSTILE_TEST_SECRET,
} from "../_lib/quote-email.js";

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method.toUpperCase();

  if (method === "GET" || method === "HEAD") {
    return jsonResponse({ ok: true, service: "floats quote email" });
  }

  if (method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "invalid_json" }, 400);
  }

  const check = validateQuotePayload(payload);
  if (!check.ok) {
    return jsonResponse({ error: "validation_failed", errors: check.errors }, 400);
  }
  const values = check.values;

  // 1) Turnstile — stop bots before we pay for email.
  const turnstileToken = typeof payload.turnstileToken === "string" ? payload.turnstileToken : "";
  if (!turnstileToken) {
    return jsonResponse({ error: "turnstile_required" }, 400);
  }
  const secret = env.TURNSTILE_SECRET || TURNSTILE_TEST_SECRET;
  if (secret === TURNSTILE_TEST_SECRET) {
    console.warn("[send-quote] TURNSTILE_SECRET not set — using Cloudflare test secret (verify always passes). Set real keys before launch.");
  }
  let turnstileOk = false;
  try {
    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", turnstileToken);
    if (request.headers.get("CF-Connecting-IP")) {
      body.set("remoteip", request.headers.get("CF-Connecting-IP"));
    }
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    const verdict = await res.json();
    turnstileOk = Boolean(verdict && verdict.success);
  } catch (err) {
    console.error("[send-quote] turnstile verify failed", err);
    return jsonResponse({ error: "turnstile_unavailable" }, 503);
  }
  if (!turnstileOk) {
    return jsonResponse({ error: "invalid_turnstile" }, 400);
  }

  // 2) Resend — lead confirmation + team notification.
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[send-quote] RESEND_API_KEY not configured — dropping submission.");
    return jsonResponse({ error: "email_provider_not_configured" }, 503);
  }

  const from = emailSenderFrom(env.RESEND_FROM);
  const teamEmail = (env.TEAM_EMAIL && String(env.TEAM_EMAIL).includes("@")) ? env.TEAM_EMAIL : TEAM_EMAIL;
  const meta = { timestamp: new Date().toISOString() };

  const emails = [
    {
      from,
      to: [values.email],
      subject: subjectForLead(values),
      html: buildLeadEmailHtml(values),
    },
    {
      from,
      to: [teamEmail],
      reply_to: values.email,
      subject: subjectForTeam(values),
      html: buildTeamEmailHtml(values, meta),
    },
  ];

  try {
    const results = await Promise.all(
      emails.map((email) =>
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            authorization: `Bearer ${apiKey}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(email),
        }).then((r) => r.json()),
      ),
    );
    const failures = results.filter((r) => r && r.error);
    if (failures.length > 0) {
      console.error("[send-quote] resend errors", JSON.stringify(failures));
      return jsonResponse({ error: "email_send_failed" }, 502);
    }
  } catch (err) {
    console.error("[send-quote] resend request failed", err);
    return jsonResponse({ error: "email_send_failed" }, 502);
  }

  return jsonResponse({ ok: true });
}