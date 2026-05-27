import { NextResponse } from 'next/server'
import { getGalleryImages } from '@/lib/storage'

const staticFallback = [
  { id: 's1', url: '/IMG_1037.JPEG', alt: 'Custom hotrod build' },
  { id: 's2', url: '/IMG_1038.JPEG', alt: 'Custom street rod' },
  { id: 's3', url: '/IMG_1039.JPEG', alt: 'Pro touring build' },
  { id: 's4', url: '/IMG_1040.JPEG', alt: 'Show car build' },
  { id: 's5', url: '/IMG_1041.JPEG', alt: 'Rat rod build' },
  { id: 's6', url: '/IMG_1042.JPEG', alt: 'Custom engine build' },
  { id: 's7', url: '/IMG_1043.JPEG', alt: 'Hotrod restoration' },
  { id: 's8', url: '/IMG_1044.JPEG', alt: 'Custom build detail' },
]

export async function GET() {
  try {
    const images = await getGalleryImages()
    return NextResponse.json(images.length > 0 ? images : staticFallback)
  } catch {
    return NextResponse.json(staticFallback)
  }
}
