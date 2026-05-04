// export { auth as middleware } from "@/auth";
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
// This matcher protects everything except static assets and API routes. to control (only protect /dashboard/*), replace the matcher with: ["/dashboard/:path*", "/settings/:path*"]

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
