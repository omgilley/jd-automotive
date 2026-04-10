import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // ─── Option 1: Formspree ───────────────────────────────────────────
    // Replace YOUR_FORM_ID with your Formspree form ID (free at formspree.io)
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    // if (!response.ok) throw new Error('Formspree failed')

    // ─── Option 2: EmailJS ─────────────────────────────────────────────
    // Configure EmailJS in your dashboard and add keys to .env.local

    // ─── Option 3: Nodemailer (add to .env.local) ──────────────────────
    // EMAIL_USER=your@gmail.com
    // EMAIL_PASS=your-app-password
    // EMAIL_TO=shop@jdautomotive.com

    // For now, log to console (replace with real handler above)
    console.log('New appointment/lead request:', JSON.stringify(data, null, 2))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
