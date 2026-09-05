if (process.env.VERCEL_ENV === "production") {
  await import("./check-production-env.mjs");
} else {
  console.log("Production environment preflight skipped outside Vercel Production.");
}
