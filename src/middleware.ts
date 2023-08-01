import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  // const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  const token = req.cookies.get("user-token")?.value;

  console.log("token", token);

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log("err", err);
    }));

  // if path is /login, user shouldn't have problem accessing.
  if (req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
    return;
  }

  if (req.url.includes("/login") && verifiedToken) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
