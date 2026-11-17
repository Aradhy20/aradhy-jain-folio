export async function GET() {
  return new Response("google-site-verification: google80fa28b362283c56.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
