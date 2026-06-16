import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  console.log(
    Object.fromEntries(searchParams.entries())
  );

  return NextResponse.redirect(
    new URL("/success", req.url)
  );
}