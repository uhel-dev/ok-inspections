import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the request path starts with /fonts
  if (!url.pathname.startsWith('/fonts')) {
    // Redirect to lowercase path if it's not under /fonts
    if (url.pathname !== url.pathname.toLowerCase()) {
      url.pathname = url.pathname.toLowerCase();
      return NextResponse.redirect(url);
    }
  }

  // Continue with the normal flow for /fonts paths or already lowercase paths
  return NextResponse.next();
}