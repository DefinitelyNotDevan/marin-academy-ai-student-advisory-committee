/**
 * Run this to verify your Google Apps Script is reachable and the env var is set.
 *
 * Usage:
 *   NEXT_PUBLIC_APPS_SCRIPT_URL="https://script.google.com/macros/s/YOUR_ID/exec" node scripts/test-integration.mjs
 *
 * Or if you have a .env.local file:
 *   node -e "import('./scripts/test-integration.mjs')"
 */

const url = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

if (!url) {
  console.error("❌  NEXT_PUBLIC_APPS_SCRIPT_URL is not set.");
  console.error("    Run with:  NEXT_PUBLIC_APPS_SCRIPT_URL=https://... node scripts/test-integration.mjs");
  process.exit(1);
}

console.log("🔗  URL found:", url);
console.log();

// 1. Test GET — should return { questions: [] } or similar
console.log("1/2  Testing GET (read Q&As)…");
try {
  const res = await fetch(url);
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    console.log("✅  GET succeeded. Response:", JSON.stringify(json, null, 2));
  } catch {
    console.error("❌  GET returned non-JSON:", text.slice(0, 300));
  }
} catch (err) {
  console.error("❌  GET failed:", err.message);
}

console.log();

// 2. Test POST — should write a row to the sheet
console.log("2/2  Testing POST (submit question)…");
try {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: "[TEST] Integration test — safe to delete this row" }),
  });
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    console.log("✅  POST succeeded. Response:", JSON.stringify(json, null, 2));
  } catch {
    // With no-cors on the browser side we can't read the response — from Node we can
    console.log("⚠️   POST returned non-JSON (may still have worked):", text.slice(0, 300));
  }
} catch (err) {
  console.error("❌  POST failed:", err.message);
}

console.log();
console.log("Done. Check your Google Sheet for a new '[TEST]' row.");
