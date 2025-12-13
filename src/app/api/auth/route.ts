import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const siteId = url.searchParams.get("site_id");

  if (!siteId) {
    return NextResponse.json({ error: "Missing site_id" }, { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID!;
  const redirectUri = `${url.origin}/api/auth/callback`;

  const state = crypto.randomUUID();

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", "repo");
  authUrl.searchParams.set("state", state);

  return NextResponse.redirect(authUrl.toString());
}
