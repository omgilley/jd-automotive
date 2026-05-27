import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { updateSettings } from '@/lib/storage'
import { getSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const form = await req.formData()
  const file = form.get('file') as File | null

  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const blob = await put(`logo/${Date.now()}-${file.name}`, file, { access: 'public' })
  await updateSettings({ logoUrl: blob.url })

  return NextResponse.json({ url: blob.url })
}
