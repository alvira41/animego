import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rows]: any = await db.query(
    "SELECT slug, title, poster AS image, rating, genre FROM anime"
  );
  return NextResponse.json(rows);
}
