import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/storage'

export async function POST(req: NextRequest) {
  const data = await req.json()

  const { name, phone, email, service, vehicle, message, vision, source } = data

  // Save to Blob storage (graceful if not configured)
  try {
    await saveLead({
      name: name ?? '',
      phone: phone ?? '',
      email: email ?? '',
      service: service || vehicle || '',
      message: message || vision || '',
      source: source ?? 'contact',
    })
  } catch (e) {
    console.error('Lead save failed:', e)
  }

  // Forward to Formspree for email notification
  try {
    await fetch('https://formspree.io/f/mzdkllqw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data }),
    })
  } catch (e) {
    console.error('Formspree forward failed:', e)
  }

  return NextResponse.json({ ok: true })
}
