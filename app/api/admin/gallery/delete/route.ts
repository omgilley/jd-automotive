import { NextRequest, NextResponse } from 'next/server'
import { removeGalleryImage } from '@/lib/storage'
import { getSession } from '@/lib/auth'

export async function DELETE(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  await removeGalleryImage(id)
  return NextResponse.json({ ok: true })
}
