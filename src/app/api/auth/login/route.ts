import { NextRequest, NextResponse } from "next/server";
import { getDb, initDb } from "@/lib/db";
import { createToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    // Validate JWT_SECRET upfront before any processing
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
      console.error("Login error: JWT_SECRET is missing or too short (min 32 chars)");
      return NextResponse.json(
        { error: "Server configuration error. Hubungi administrator." },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email dan password wajib diisi" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Format input tidak valid" }, { status: 400 });
    }

    const sanitizedEmail = email.trim().toLowerCase();

    await initDb();
    const sql = getDb();

    const users = await sql`
      SELECT id, email, name, password_hash FROM cv_users WHERE email = ${sanitizedEmail}
    `;

    if (users.length === 0) {
      // Constant-time: still hash to prevent timing attacks
      await bcrypt.hash("dummy", 12);
      return NextResponse.json(
        { error: "Email atau password salah" },
        { status: 401 }
      );
    }

    const user = users[0];
    const valid = await bcrypt.compare(password, user.password_hash as string);

    if (!valid) {
      return NextResponse.json(
        { error: "Email atau password salah" },
        { status: 401 }
      );
    }

    const token = await createToken({
      id: user.id as number,
      email: user.email as string,
      name: user.name as string,
    });

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
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Gagal login. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
