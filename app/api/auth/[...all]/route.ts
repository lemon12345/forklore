import { isDatabaseEnabled } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const disabled = () =>
  NextResponse.json(
    { error: "Authentication is not configured for this site." },
    { status: 503 },
  );

async function handle(req: NextRequest) {
  if (!isDatabaseEnabled) return disabled();
  // Dynamic import so Better Auth + DB adapter are not loaded on wiki-only deploys
  const { auth } = await import("@/lib/auth");
  return auth.handler(req);
}

export async function GET(req: NextRequest) {
  return handle(req);
}
export async function POST(req: NextRequest) {
  return handle(req);
}
export async function PUT(req: NextRequest) {
  return handle(req);
}
export async function DELETE(req: NextRequest) {
  return handle(req);
}
export async function PATCH(req: NextRequest) {
  return handle(req);
}
