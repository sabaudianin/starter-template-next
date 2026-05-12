// export { auth as middleware } from "@/auth";
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
// SIMPLE MATCHER - This matcher protects everything except static assets and API routes. to control (only protect /dashboard/*), replace the matcher with: ["/dashboard/:path*", "/settings/:path*"]
// export const config = {
//   matcher: ["/dashboard/:path*", "/settings/:path*"],
// };

import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

const roleRoutes: Record<string, string[]> = {
  "/admin": ["admin"],
  "/dashboard": ["user", "admin"],
  "/settings": ["user", "admin"],
};

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;

  //not logge redirect to login
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const userRole = req.auth.user?.role ?? "user";

  //check path role restriction
  const matchedRoute = Object.keys(roleRoutes).find((route) =>
    pathname.startsWith(route),
  );
  if (matchedRoute) {
    const allowedRoles = roleRoutes[matchedRoute];
    if (!allowedRoles.includes(userRole)) {
      //logged with wrong role redirexct to unauthorized
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/settings/:path*"],
};
