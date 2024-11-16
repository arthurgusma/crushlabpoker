import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { headers } = request;
  const origin = headers.get("origin");

  if (!origin) {
    throw new Error("Request does not contain an origin header.");
  }

  const response = NextResponse.redirect(new URL("/", origin));
  response.cookies.delete("session"); 
  return response;
}
