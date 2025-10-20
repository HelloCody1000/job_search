import { writeFileSync, mkdirSync } from "node:fs";

// Create /status folder if it doesn’t exist
mkdirSync("status", { recursive: true });

// Get the current UTC time in ISO format
const timestamp = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

// Make a sample payload to test with
const payload = {
  generatedAt: timestamp,
  sites: [
    { siteId: "hello-world", status: "NO_CHANGE" }
  ]
};

// Write it to status/index.json
writeFileSync("status/index.json", JSON.stringify(payload, null, 2));

console.log("✅ Wrote status/index.json:", payload);
