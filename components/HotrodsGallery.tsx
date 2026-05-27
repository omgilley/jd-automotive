'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryImage {
  id: string
  url: string
  alt: string
}

const staticFallback: GalleryImage[] = [
  { id: 's1', url: '/IMG_1037.JPEG', alt: 'Custom hotrod build' },
  { id: 's2', url: '/IMG_1038.JPEG', alt: 'Custom street rod' },
  { id: 's3', url: '/IMG_1039.JPEG', alt: 'Pro touring build' },
  { id: 's4', url: '/IMG_1040.JPEG', alt: 'Show car build' },
  { id: 's5', url: '/IMG_1041.JPEG', alt: 'Rat rod build' },
  { id: 's6', url: '/IMG_1042.JPEG', alt: 'Custom engine build' },
  { id: 's7', url: '/IMG_1043.JPEG', alt: 'Hotrod restoration' },
  { id: 's8', url: '/IMG_1044.JPEG', alt: 'Custom build detail' },
]

export default function HotrodsGallery() {
  const [images, setImages] = useState<GalleryImage[]>(staticFallback)

  useEffect(() => {
    fetch('/api/gallery')
      .then(r => r.json())
      .then((data: GalleryImage[]) => { if (data.length > 0) setImages(data) })
      .catch(() => {})
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <div key={img.id} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
          <Image
            src={img.url}
            alt={img.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
            unoptimized={img.url.startsWith('https://')}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}
