import { neon } from "@neondatabase/serverless";

let dbInitialized = false;

export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  return neon(databaseUrl);
}

// Initialize database tables (runs once per cold start)
export async function initDb() {
  if (dbInitialized) return;
  const sql = getDb();

  await sql`
    CREATE TABLE IF NOT EXISTS cv_users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS cv_data (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES cv_users(id) ON DELETE CASCADE,
      template VARCHAR(50) DEFAULT 'modern',
      lang VARCHAR(5) DEFAULT 'id',
      data JSONB NOT NULL DEFAULT '{}',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(user_id)
    )
  `;

  dbInitialized = true;
}
