import { NextRequest, NextResponse } from "next/server";

const client_id = process.env.GITHUB_CLIENT_ID!;
const client_secret = process.env.GITHUB_CLIENT_SECRET!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Missing code" },
      { status: 400 }
    );
  }

  const tokenRes = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    }
  );

  const tokenData = await tokenRes.json();

  return NextResponse.json(tokenData);
}
