import { NextResponse } from "next/server";

export async function GET() {
  //return new Response(JSON.stringify({ message: "Hello from the API route" }));
  return NextResponse.json({ message: "Hello from the API route" });
}

export async function POST(request: Request) {
  const data = await request.json();
  const { name } = data;

  return NextResponse.json({
    message: `Hello, ${name}, greetings from the api! (this message is generated through an api POST request)`,
  });
}
