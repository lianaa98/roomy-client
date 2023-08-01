import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {

  const token = req.cookies.get("user-token")?.value;

  console.log("middleware check- token: ", token);

  const tokenStatus = token ? await verifyAuth(token) : null;

  console.log("middleware check- tokenStatus: ", tokenStatus);

  if (req.nextUrl.pathname.startsWith("/login") && tokenStatus === 200) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.url.includes("/login") && tokenStatus !== 200) {
    return;
  }

  if (tokenStatus !== 200) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
