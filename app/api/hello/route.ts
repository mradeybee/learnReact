import { NextResponse } from "next/server";

/**
 * Example API route
 * GET /api/hello
 */
export async function GET() {
  return NextResponse.json({
    message: "Hello from Next.js API!",
    timestamp: new Date().toISOString(),
  });
}

