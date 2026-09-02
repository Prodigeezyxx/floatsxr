// Local verification harness for functions/api/send-quote.js.
// Bundles the Pages Function with esbuild, then exercises every path
// with a mocked fetch (Turnstile + Resend). No network, no credentials.
//
// Run: node scripts/verify-send-quote.cjs

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, ".send-quote-test");
const BUNDLE = path.join(OUT_DIR, "send-quote.cjs");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

execSync(
  `node node_modules/esbuild/bin/esbuild functions/api/send-quote.js ` +
    `--bundle --platform=node --format=cjs --outfile=${path.relative(ROOT, BUNDLE)}`,
  { cwd: ROOT, stdio: "pipe" },
);

const { onRequest } = require(BUNDLE);

// ---- mock control ----
const mock = {
  turnstileVerdict: "success", // "success" | "fail" | "throw"
  resendMode: "success", // "success" | "api-error" | "throw"
  calls: { turnstile: [], resend: [] },
};

global.fetch = async (url, init = {}) => {
  const u = String(url);
  if (u.includes("challenges.cloudflare.com/turnstile")) {
    mock.calls.turnstile.push({ url: u, body: init.body });
    if (mock.turnstileVerdict === "throw") throw new Error("network down");
    return jsonResponse({ success: mock.turnstileVerdict === "success" });
  }
  if (u.includes("api.resend.com")) {
    mock.calls.resend.push(JSON.parse(init.body));
    if (mock.resendMode === "throw") throw new Error("network down");
    return jsonResponse(mock.resendMode === "success" ? { id: "req_123" } : { error: { message: "unauthorized" } });
  }
  return jsonResponse({}, 404);
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function env(overrides = {}) {
  return { RESEND_API_KEY: "re_fake_test_key", ...overrides };
}

function postRequest(body, extraEnv = {}) {
  return new Request("https://floatsanywhere.com/api/send-quote", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const VALID = {
  experience: "XR / VR activation",
  footfall: "2,000 – 10,000",
  duration: "2 – 3 days",
  brand: "Acme Corp",
  name: "Jamie Dobbs",
  email: "jamie@acme.com",
  turnstileToken: "test-token",
};

let pass = 0;
let fail = 0;
function assert(name, cond, detail = "") {
  if (cond) {
    pass += 1;
    console.log(`  PASS  ${name}`);
  } else {
    fail += 1;
    console.log(`  FAIL  ${name}  ${detail}`);
  }
}

async function main() {
  // 1. GET health
  let res = await onRequest({ request: new Request("https://floatsanywhere.com/api/send-quote"), env: env() });
  let data = await res.json();
  assert("GET returns ok:true", res.status === 200 && data.ok === true, JSON.stringify(data));

  // 2. invalid JSON
  res = await onRequest({ request: postRequest("{not json"), env: env() });
  data = await res.json();
  assert("invalid JSON -> 400", res.status === 400 && data.error === "invalid_json");

  // 3. validation failures
  res = await onRequest({ request: postRequest({ ...VALID, name: "", email: "nope", turnstileToken: "t" }), env: env() });
  data = await res.json();
  assert(
    "missing name + bad email -> 400 validation_failed",
    res.status === 400 && data.error === "validation_failed" && Array.isArray(data.errors) && data.errors.length >= 2,
    JSON.stringify(data),
  );

  // 4. missing turnstile token
  res = await onRequest({ request: postRequest({ ...VALID, turnstileToken: "" }), env: env() });
  data = await res.json();
  assert("no turnstile token -> 400", res.status === 400 && data.error === "turnstile_required");

  // 5. turnstile verdict fail
  mock.turnstileVerdict = "fail";
  res = await onRequest({ request: postRequest(VALID), env: env() });
  data = await res.json();
  assert("failed verdict -> 400 invalid_turnstile", res.status === 400 && data.error === "invalid_turnstile", JSON.stringify(data));
  mock.turnstileVerdict = "success";

  // 6. missing RESEND_API_KEY -> honest 503
  mock.calls.resend.length = 0;
  res = await onRequest({ request: postRequest(VALID), env: env({ RESEND_API_KEY: undefined }) });
  data = await res.json();
  assert(
    "no API key -> 503 email_provider_not_configured (no resend calls)",
    res.status === 503 && data.error === "email_provider_not_configured" && mock.calls.resend.length === 0,
    JSON.stringify(data),
  );

  // 7. happy path — assert BOTH emails + payload shape
  mock.calls.resend.length = 0;
  mock.calls.turnstile.length = 0;
  res = await onRequest({ request: postRequest(VALID), env: env() });
  data = await res.json();
  assert("happy path -> 200 ok:true", res.status === 200 && data.ok === true, JSON.stringify(data));
  assert("exactly 2 resend sends", mock.calls.resend.length === 2, `got ${mock.calls.resend.length}`);
  assert("turnstile verify called once with secret", mock.calls.turnstile.length === 1 && String(mock.calls.turnstile[0].body).includes("test-token"), JSON.stringify(mock.calls.turnstile));

  const [lead, team] = mock.calls.resend;
  if (mock.calls.resend.length === 2) {
    assert("lead email to jamie@acme.com", lead.to && lead.to[0] === "jamie@acme.com", JSON.stringify(lead.to));
    assert("lead html contains name + seats table + CTA", lead.html.includes("Jamie") && lead.html.includes("2,000 – 10,000") && lead.html.includes("Book a call") && lead.html.includes("calendly.com"));
    assert("lead html escapes input (no raw injection)", !lead.html.includes("<script"), "");
    assert("team email to hello@floatsanywhere.com with reply_to", team.to && team.to[0] === "hello@floatsanywhere.com" && team.reply_to === "jamie@acme.com", JSON.stringify({ to: team.to, reply_to: team.reply_to }));
    assert("team html contains brand + email", team.html.includes("Acme Corp") && team.html.includes("jamie@acme.com"));
    assert("subjects formatted", lead.subject.includes("Jamie Dobbs") && team.subject.includes("Acme Corp"), JSON.stringify({ lead: lead.subject, team: team.subject }));
    const first = ["Jamie", "Dobbs"].every((s) => lead.subject.replace(/[^a-zA-Z]/g, "").includes(s)) || lead.subject.includes("Jamie Dobbs");
    assert("lead subject has name", first);
  }

  // 8. Resend API error -> 502
  mock.resendMode = "api-error";
  res = await onRequest({ request: postRequest(VALID), env: env() });
  data = await res.json();
  assert("resend rejection -> 502 email_send_failed", res.status === 502 && data.error === "email_send_failed", JSON.stringify(data));
  mock.resendMode = "success";

  // 9. XSS attempt is escaped
  res = await onRequest({ request: postRequest({ ...VALID, name: "<script>alert(1)</script>", brand: "<img src=x onerror=alert(1)>" }), env: env() });
  assert("XSS payload still accepted but escaped in html", res.status === 200);
  const xssLead = mock.calls.resend[mock.calls.resend.length - 2].html;
  assert("no raw <script> in lead html", !xssLead.includes("<script>"));

  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Harness crashed:", err);
  process.exit(2);
});