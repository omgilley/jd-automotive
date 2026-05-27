import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { addGalleryImage } from '@/lib/storage'
import { getSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const form = await req.formData()
  const file = form.get('file') as File | null
  const alt = (form.get('alt') as string) ?? ''

  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const blob = await put(`gallery/${Date.now()}-${file.name}`, file, { access: 'public' })
  const image = await addGalleryImage(blob.url, alt)

  return NextResponse.json(image)
}
