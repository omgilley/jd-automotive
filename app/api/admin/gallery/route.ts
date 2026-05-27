import { NextRequest, NextResponse } from 'next/server'
import { getGalleryImages, reorderGallery } from '@/lib/storage'
import { getSession } from '@/lib/auth'

export async function GET() {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const images = await getGalleryImages()
  return NextResponse.json(images)
}

export async function PATCH(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { ids } = await req.json()
  await reorderGallery(ids)
  return NextResponse.json({ ok: true })
}
