import { createFileRoute } from "@tanstack/react-router";

// /api/contact handler served by the TanStack Worker entry.
// Always responds with valid JSON (never HTML), and — in production on
// Cloudflare — writes to the D1 `DB` binding that `src/server.ts` stashes
// on `globalThis.__CF_ENV__` per request.

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
} as const;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });

interface D1LikeDB {
  prepare(query: string): {
    bind(...values: unknown[]): { run(): Promise<unknown> };
  };
}

function getDB(): D1LikeDB | undefined {
  const env = (globalThis as unknown as { __CF_ENV__?: { DB?: D1LikeDB } })
    .__CF_ENV__;
  return env?.DB;
}

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
        const phone = s(body.phone, 50);
        const country = s(body.country, 100);
        const platform = s(body.platform, 200);
        const amount_lost = s(body.amount_lost, 100);
        const message = s(body.message, 5000);

        if (!full_name || !email) {
          return json({ error: "full_name and email are required" }, 400);
        }

        const db = getDB();
        if (!db) {
          // No D1 binding available (Lovable preview). Log and simulate.
          console.info("[contact] no D1 binding — preview fallback", {
            full_name,
            email,
          });
          return json({ ok: true, stored: false });
        }

        try {
          await db
            .prepare(
              `INSERT INTO contacts (full_name, email, phone, country, platform, amount_lost, message, created_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
            )
            .bind(full_name, email, phone, country, platform, amount_lost, message)
            .run();
        } catch (err) {
          console.error("[contact] D1 insert failed", err);
          return json({ error: "Failed to save submission" }, 500);
        }
        return json({ ok: true, stored: true });
      },
    },
  },
});
