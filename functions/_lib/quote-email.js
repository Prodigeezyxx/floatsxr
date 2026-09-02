// Shared helpers for the quote email endpoint (functions/api/send-quote.js).
// Lives under functions/_lib so it is bundled by Pages but never routed.
// NOTE: Pages Functions bundle this as ESM; do not convert to CJS.

export const TEAM_EMAIL = "hello@floatsanywhere.com";
export const CALENDLY_URL = "https://calendly.com/hello-floatsanywhere/start";

// Cloudflare's visible test key — always passes, handy for local dev.
// Real keys are set via NEXT_PUBLIC_TURNSTILE_SITE_KEY / TURNSTILE_SECRET.
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";
export const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

const MAX_LEN = {
  name: 120,
  email: 200,
  experience: 200,
  footfall: 80,
  duration: 80,
  brand: 200,
};

/**
 * Validate the wizard payload. Returns { ok, errors }.
 * Required: name, email, experience, footfall, duration.
 * Optional: brand.
 */
export function validateQuotePayload(payload) {
  const errors = [];
  const p = payload && typeof payload === "object" ? payload : {};

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const requireString = (key, label, required = true, maxLen = 200) => {
    const v = typeof p[key] === "string" ? p[key].trim() : "";
    if (required && !v) {
      errors.push(`${label} is required`);
      return "";
    }
    if (v.length > maxLen) {
      errors.push(`${label} is too long`);
    }
    return v.slice(0, maxLen);
  };

  const name = requireString("name", "Name", true, MAX_LEN.name);
  const email = requireString("email", "Email", true, MAX_LEN.email);
  const experience = requireString("experience", "Experience", true, MAX_LEN.experience);
  const footfall = requireString("footfall", "Scale", true, MAX_LEN.footfall);
  const duration = requireString("duration", "Duration", true, MAX_LEN.duration);
  const brand = requireString("brand", "Brand", false, MAX_LEN.brand);

  if (email && !emailRe.test(email)) {
    errors.push("Email is not valid");
  }

  return {
    ok: errors.length === 0,
    errors,
    values: { name, email, experience, footfall, duration, brand },
  };
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const selectionRow = (label, value) => `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #e6e2d5;color:#6b6f76;font-size:13px;">${esc(label)}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #e6e2d5;color:#16181d;font-size:15px;font-weight:600;text-align:right;">${esc(value)}</td>
    </tr>`;

const shell = (title, bodyHtml) => `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:#f4f0e6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0e6;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e6e2d5;">
        <tr><td style="padding:32px 32px 24px;border-bottom:1px solid #e6e2d5;">
          <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.12em;color:#2563eb;font-weight:700;text-transform:uppercase;">Floats</p>
          <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;color:#16181d;">${title}</h1>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          ${bodyHtml}
        </td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #e6e2d5;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6f76;line-height:1.6;">
            Floats &mdash; spatial intelligence for physical experiences.<br/>
            <a href="https://floatsanywhere.com" style="color:#2563eb;">floatsanywhere.com</a> &middot; ${esc(TEAM_EMAIL)}
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

/**
 * Branded email to the lead — instant confirmation of their brief.
 */
export function buildLeadEmailHtml(values) {
  const firstName = values.name.split(" ")[0] || "there";
  const subjectIdea = values.experience.toLowerCase();

  return shell(
    `Your ${escapeName(values)} quote brief`,
    `
      <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#383c42;line-height:1.65;">
        Hi ${esc(firstName)},<br/><br/>
        Thanks for running the quote builder &mdash; this is what you told us:
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6e2d5;border-radius:10px;">
        ${selectionRow("Experience", values.experience)}
        ${selectionRow("Expected footfall", values.footfall)}
        ${selectionRow("Live duration", values.duration)}
        ${values.brand ? selectionRow("Brand / event", values.brand) : ""}
      </table>
      <p style="margin:24px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#383c42;line-height:1.65;">
        A tailored proposal for your ${subjectIdea} &mdash; concept direction, production scope and pricing &mdash; will land in your inbox within 24 hours.
      </p>
      <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#383c42;line-height:1.65;">
        Want to talk it through sooner?
      </p>
      <p style="margin:16px 0 0;">
        <a href="${CALENDLY_URL}" style="display:inline-block;background:#2563eb;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">Book a call</a>
      </p>
      <p style="margin:24px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b6f76;">
        Need to change something? Reply to this email and we&apos;ll update your brief.
      </p>
    `
  );
}

/**
 * Plain-notification email to the Floats team with the full lead detail.
 */
export function buildTeamEmailHtml(values, meta = {}) {
  return shell(
    `New quote request — ${escapeName(values)}${values.brand ? ` · ${values.brand}` : ""}`,
    `
      <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#383c42;line-height:1.65;">
        A visitor submitted the quote wizard${meta.timestamp ? ` on ${meta.timestamp}` : ""}.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6e2d5;border-radius:10px;">
        ${selectionRow("Name", values.name)}
        ${selectionRow("Email", values.email)}
        ${selectionRow("Experience", values.experience)}
        ${selectionRow("Footfall", values.footfall)}
        ${selectionRow("Duration", values.duration)}
        ${values.brand ? selectionRow("Brand / event", values.brand) : ""}
      </table>
      <p style="margin:20px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b6f76;">
        Reply-all to this email to reach the lead directly.<br/>
        Lead confirmation email was sent to them at the same time.
      </p>
    `
  );
}

function escapeName(values) {
  // Keep the subject plain-text safe (no HTML).
  return String(values.name).replace(/[<>&\r\n\t]/g, " ").replace(/\s+/g, " ").trim();
}

export function subjectForLead(values) {
  return `Your Floats quote brief — ${escapeName(values)}`;
}

export function subjectForTeam(values) {
  return `New quote request — ${escapeName(values)}${values.brand ? ` · ${values.brand}` : ""}`;
}

export function emailSenderFrom(envValue) {
  return (envValue && String(envValue).includes("@")) ? envValue : `Floats <quotes@floatsanywhere.com>`;
}

export function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}