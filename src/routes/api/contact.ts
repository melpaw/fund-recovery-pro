import { createFileRoute } from "@tanstack/react-router";

// Fallback /api/contact handler used when the request is NOT intercepted
// by src/server.ts (i.e. on the Lovable preview, which doesn't run our
// custom Worker entry with the D1 binding). In production on Cloudflare,
// src/server.ts handles the same path first and writes to D1.
//
// This handler always responds with valid JSON so the frontend never sees
// an HTML SPA fallback. In environments without the D1 binding it just
// logs the submission and returns { ok: true, stored: false }.

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
} as const;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "access-control-allow-origin": "*",
            "access-control-allow-methods": "POST, OPTIONS",
            "access-control-allow-headers": "content-type",
            "access-control-max-age": "86400",
          },
        }),
      POST: async ({ request }) => {
        let body: Record<string, unknown>;
        try {
          body = (await request.json()) as Record<string, unknown>;
        } catch {
          return json({ error: "Invalid JSON" }, 400);
        }
        const s = (v: unknown, max = 2000) =>
          typeof v === "string" ? v.trim().slice(0, max) : "";
        const full_name = s(body.full_name, 200);
        const email = s(body.email, 200);
        if (!full_name || !email) {
          return json({ error: "full_name and email are required" }, 400);
        }
        console.info("[contact] submission (preview fallback, no D1)", {
          full_name,
          email,
          country: s(body.country, 100),
          platform: s(body.platform, 200),
          amount_lost: s(body.amount_lost, 100),
        });
        return json({ ok: true, stored: false });
      },
    },
  },
});
