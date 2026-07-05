-- D1 schema for the /api/contact endpoint.
-- Apply with:  npx wrangler d1 execute fti-contacts --file=./migrations/0001_contacts.sql
CREATE TABLE IF NOT EXISTS contacts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name    TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT,
  country      TEXT,
  platform     TEXT,
  amount_lost  TEXT,
  message      TEXT,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts (email);
