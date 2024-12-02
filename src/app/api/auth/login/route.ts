import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  if (!req.body) {
    return NextResponse.json({ error: 'Missing body' }, { status: 400 })
  }
  // const body = req.body;

  console.log(req.body)
}
