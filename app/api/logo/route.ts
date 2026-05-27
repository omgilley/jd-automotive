import { NextResponse } from 'next/server'
import { getSettings } from '@/lib/storage'

export async function GET() {
  try {
    const settings = await getSettings()
    return NextResponse.json({ url: settings.logoUrl ?? null })
  } catch {
    return NextResponse.json({ url: null })
  }
}
