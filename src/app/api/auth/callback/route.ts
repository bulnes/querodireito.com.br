import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    }
  );

  const tokenData = await tokenResponse.json();

  if (!tokenData.access_token) {
    return NextResponse.json(
      { error: "Failed to get access token" },
      { status: 400 }
    );
  }

  /**
   * Decap espera que o token seja enviado via postMessage
   */
  const script = `
    <script>
      window.opener.postMessage(
        {
          token: "${tokenData.access_token}",
          provider: "github"
        },
        "*"
      );
      window.close();
    </script>
  `;

  return new NextResponse(script, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
