import { NextRequest, NextResponse } from "next/server";
import { getDb, initDb } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

const VALID_TEMPLATES = ["modern", "classic", "minimal"];
const VALID_LANGS = ["id", "en"];
const MAX_CV_DATA_SIZE = 512 * 1024; // 512KB max payload

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await initDb();
    const sql = getDb();
    const rows = await sql`
      SELECT data, template, lang FROM cv_data WHERE user_id = ${user.id}
    `;

    if (rows.length === 0) {
      return NextResponse.json({ data: null, template: "modern", lang: "id" });
    }

    return NextResponse.json({
      data: rows[0].data,
      template: rows[0].template,
      lang: rows[0].lang,
    });
  } catch (error) {
    console.error("CV GET error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data CV" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check content length
    const contentLength = req.headers.get("content-length");
    if (contentLength && Number(contentLength) > MAX_CV_DATA_SIZE) {
      return NextResponse.json(
        { error: "Data CV terlalu besar (maks 512KB)" },
        { status: 413 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { data, template, lang } = body;

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Data CV tidak valid" }, { status: 400 });
    }

    // Validate template
    const safeTemplate = VALID_TEMPLATES.includes(template) ? template : "modern";
    // Validate lang
    const safeLang = VALID_LANGS.includes(lang) ? lang : "id";

    // Check serialized size
    const serialized = JSON.stringify(data);
    if (serialized.length > MAX_CV_DATA_SIZE) {
      return NextResponse.json(
        { error: "Data CV terlalu besar (maks 512KB)" },
        { status: 413 }
      );
    }

    await initDb();
    const sql = getDb();

    await sql`
      INSERT INTO cv_data (user_id, data, template, lang, updated_at) 
      VALUES (${user.id}, ${serialized}::jsonb, ${safeTemplate}, ${safeLang}, NOW())
      ON CONFLICT (user_id) 
      DO UPDATE SET data = ${serialized}::jsonb, template = ${safeTemplate}, lang = ${safeLang}, updated_at = NOW()
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CV POST error:", error);
    return NextResponse.json(
      { error: "Gagal menyimpan data CV" },
      { status: 500 }
    );
  }
}
