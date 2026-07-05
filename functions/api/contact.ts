// Cloudflare Pages Function — POST /api/contact
// Bound automatically when deployed to Cloudflare Pages with a D1 binding named "DB".

interface Env {
  DB: D1Database;
}

interface D1Database {
  prepare(query: string): {
    bind(...values: unknown[]): { run(): Promise<unknown> };
  };
}

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": "86400",
    },
  });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
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

  if (!env.DB) {
    return json({ error: "Database binding 'DB' is not configured" }, 500);
  }

  try {
    await env.DB
      .prepare(
        `INSERT INTO contacts (full_name, email, phone, country, platform, amount_lost, message, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
      )
      .bind(full_name, email, phone, country, platform, amount_lost, message)
      .run();
  } catch (err) {
    console.error("D1 insert failed", err);
    return json({ error: "Failed to save submission" }, 500);
  }

  return json({ ok: true });
};

// Any other method → JSON 405 (never HTML)
export const onRequest: PagesFunction = async ({ request, next }) => {
  if (request.method === "POST" || request.method === "OPTIONS") {
    return next();
  }
  return json({ error: "Method not allowed" }, 405);
};

// Minimal Pages typings shim (avoids needing @cloudflare/workers-types at build time)
type PagesFunction<E = unknown> = (context: {
  request: Request;
  env: E;
  next: () => Promise<Response>;
  params: Record<string, string | string[]>;
  waitUntil: (promise: Promise<unknown>) => void;
  data: Record<string, unknown>;
}) => Response | Promise<Response>;
