import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    // TODO: send email or forward to third-party service here.
    // For now, just return success.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}
