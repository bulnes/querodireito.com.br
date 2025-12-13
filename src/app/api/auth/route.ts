import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const clientId = process.env.GITHUB_CLIENT_ID!;
  const redirectUri = `${url.origin}/api/auth/callback`;

  const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
  githubAuthUrl.searchParams.set("client_id", clientId);
  githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
  githubAuthUrl.searchParams.set("scope", "repo");

  return NextResponse.redirect(githubAuthUrl.toString());
}
