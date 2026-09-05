import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const required = [
  { name: "OPENAI_API_KEY", minLength: 20 },
  { name: "ELIN_QUOTA_SECRET", minLength: 32 },
  { name: "TURNSTILE_SECRET_KEY", minLength: 20 },
  { name: "NEXT_PUBLIC_TURNSTILE_SITE_KEY", minLength: 20 },
  { name: "SUPABASE_URL", minLength: 12 },
  { name: "SUPABASE_SERVICE_ROLE_KEY", minLength: 20 },
  { name: "IP_HASH_SALT", minLength: 32 },
  { name: "REVIEW_IP_HASH_SALT", minLength: 32 },
  { name: "SMTP_HOST", minLength: 3 },
  { name: "SMTP_PORT", minLength: 2 },
  { name: "SMTP_USER", minLength: 3 },
  { name: "SMTP_PASS", minLength: 8 },
  { name: "SMTP_FROM", minLength: 3 },
  { name: "DESTINATION_EMAIL", minLength: 5 },
  { name: "ELIN_INSIGHTS_TOKEN", minLength: 32 },
];

const placeholderPattern = /^(?:change[-_ ]?me|replace[-_ ]?me|example|test|todo|your[-_ ])/i;
const turnstileTestKeyPattern = /^[123]x0+(?:AA|AB|FF)$/;
const problems = [];

for (const rule of required) {
  const value = process.env[rule.name]?.trim() ?? "";
  if (!value) {
    problems.push(`${rule.name}: missing`);
  } else if (value.length < rule.minLength) {
    problems.push(`${rule.name}: too short`);
  } else if (placeholderPattern.test(value)) {
    problems.push(`${rule.name}: placeholder value`);
  }
}

for (const name of ["TURNSTILE_SECRET_KEY", "NEXT_PUBLIC_TURNSTILE_SITE_KEY"]) {
  const value = process.env[name]?.trim();
  if (!value) continue;
  if (turnstileTestKeyPattern.test(value)) {
    problems.push(`${name}: Cloudflare test key is not allowed in production`);
  } else if (!value.startsWith("0x")) {
    problems.push(`${name}: invalid Cloudflare production key format`);
  }
}

if (
  process.env.TURNSTILE_SECRET_KEY?.trim() &&
  process.env.TURNSTILE_SECRET_KEY?.trim() === process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim()
) {
  problems.push("Turnstile site key and secret key must be different");
}

const smtpPort = Number(process.env.SMTP_PORT);
if (process.env.SMTP_PORT && (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535)) {
  problems.push("SMTP_PORT: invalid port");
}

for (const name of ["SUPABASE_URL"]) {
  const value = process.env[name]?.trim();
  if (!value) continue;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") {
      problems.push(`${name}: must use https`);
    }
  } catch {
    problems.push(`${name}: invalid URL`);
  }
}

if (problems.length > 0) {
  console.error("Production environment is not ready:");
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exit(1);
}

console.log(`Production environment preflight passed (${required.length} checks).`);
