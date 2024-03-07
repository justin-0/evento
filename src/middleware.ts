import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/events/all";
  if (request.nextUrl.pathname === "/events") {
    return NextResponse.redirect(url);
  }
  return;
}
