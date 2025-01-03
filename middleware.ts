import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = request.nextUrl;

  // Prevent redirect loops by checking the current destination
  if (token) {
    // Redirect authenticated users away from public routes
    if (
      token &&
      ["/sign-in", "/sign-up", "/verify"].some((path) =>
        url.pathname.startsWith(path)
      ) &&
      url.pathname !== "/dashboard"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    // Redirect unauthenticated users away from private routes
    if (!token && url.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // Allow the request if no conditions are met
  return NextResponse.next();
}

// Matcher to specify the paths for this middleware
export const config = {
  matcher: ["/sign-in", "/sign-up", "/verify/:path*", "/dashboard/:path*", "/"],
};
