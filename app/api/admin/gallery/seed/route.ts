import { NextResponse } from 'next/server'
import { seedOriginalImages } from '@/lib/storage'
import { getSession } from '@/lib/auth'

export async function POST() {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  await seedOriginalImages()
  return NextResponse.json({ ok: true })
}
