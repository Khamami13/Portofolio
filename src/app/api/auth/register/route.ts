import { NextRequest, NextResponse } from "next/server";
import { getDb, initDb } from "@/lib/db";
import { createToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

// Basic email format validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 255;
}

export async function POST(req: NextRequest) {
  try {
    await initDb();
    const sql = getDb();

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { email, password, name } = body;

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Email, password, dan nama wajib diisi" },
        { status: 400 }
      );
    }

    // Type checks
    if (typeof email !== "string" || typeof password !== "string" || typeof name !== "string") {
      return NextResponse.json({ error: "Format input tidak valid" }, { status: 400 });
    }

    // Validate email format
    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password minimal 8 karakter" },
        { status: 400 }
      );
    }
    if (password.length > 128) {
      return NextResponse.json(
        { error: "Password terlalu panjang" },
        { status: 400 }
      );
    }

    // Validate name
    const trimmedName = name.trim();
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Nama harus 2-100 karakter" },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase();

    // Check if user exists
    const existing = await sql`SELECT id FROM cv_users WHERE email = ${sanitizedEmail}`;
    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Email sudah terdaftar" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await sql`
      INSERT INTO cv_users (email, password_hash, name) 
      VALUES (${sanitizedEmail}, ${passwordHash}, ${trimmedName})
      RETURNING id, email, name
    `;

    const user = result[0];
    const token = await createToken({
      id: user.id as number,
      email: user.email as string,
      name: user.name as string,
    });

    // Create empty CV data
    await sql`
      INSERT INTO cv_data (user_id, data) 
      VALUES (${user.id}, ${JSON.stringify({})}::jsonb)
    `;

    const response = NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
    });

    response.cookies.set("cv_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Gagal mendaftar. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
