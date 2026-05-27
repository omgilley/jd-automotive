'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import type { GalleryImage } from '@/lib/storage'

function AdminNav() {
  const router = useRouter()
  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/admin')
  }
  return (
    <nav className="bg-black border-b border-jd-border sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bebas text-lg tracking-widest text-jd-white">J&amp;D Admin</span>
          <div className="hidden sm:flex items-center gap-4">
            <a href="/admin/leads" className="font-barlow text-sm tracking-wide text-jd-gray hover:text-jd-white uppercase transition-colors">Leads</a>
            <a href="/admin/gallery" className="font-barlow text-sm tracking-wide text-jd-red uppercase">Gallery</a>
            <a href="/admin/settings" className="font-barlow text-sm tracking-wide text-jd-gray hover:text-jd-white uppercase transition-colors">Settings</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="font-barlow text-xs text-jd-gray hover:text-jd-white uppercase transition-colors hidden sm:block">View Site →</a>
          <button onClick={logout} className="font-barlow text-xs tracking-wide text-jd-gray hover:text-jd-red uppercase transition-colors">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [seeding, setSeeding] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploadAlt, setUploadAlt] = useState('')
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [dropIndex, setDropIndex] = useState<number | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const fetchImages = useCallback(async () => {
    const res = await fetch('/api/admin/gallery')
    if (res.ok) setImages(await res.json())
    setLoading(false)
  }, [])

  useEffect(() => { fetchImages() }, [fetchImages])

  const seedOriginals = async () => {
    setSeeding(true)
    await fetch('/api/admin/gallery/seed', { method: 'POST' })
    await fetchImages()
    setSeeding(false)
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    setUploading(true)
    const newImages: GalleryImage[] = []
    for (const file of Array.from(files)) {
      const form = new FormData()
      form.append('file', file)
      form.append('alt', uploadAlt || file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '))
      const res = await fetch('/api/admin/gallery/upload', { method: 'POST', body: form })
      if (res.ok) newImages.push(await res.json())
    }
    setImages(prev => [...prev, ...newImages])
    setUploading(false)
    setUploadAlt('')
    if (fileRef.current) fileRef.current.value = ''
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Remove this image from the gallery?')) return
    const updated = images.filter(i => i.id !== id)
    setImages(updated)
    await fetch('/api/admin/gallery/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
  }

  const saveOrder = async (ordered: GalleryImage[]) => {
    setSaving(true)
    await fetch('/api/admin/gallery', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: ordered.map(i => i.id) }),
    })
    setSaving(false)
  }

  const handleDragStart = (index: number) => setDragIndex(index)

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    setDropIndex(index)
  }

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (dragIndex === null || dragIndex === index) {
      setDragIndex(null)
      setDropIndex(null)
      return
    }
    const newOrder = [...images]
    const [moved] = newOrder.splice(dragIndex, 1)
    newOrder.splice(index, 0, moved)
    setImages(newOrder)
    setDragIndex(null)
    setDropIndex(null)
    saveOrder(newOrder)
  }

  const handleDragEnd = () => {
    setDragIndex(null)
    setDropIndex(null)
  }

  return (
    <div className="min-h-screen bg-jd-black">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="font-bebas text-4xl tracking-wider text-jd-white">VEHICLE GALLERY</h1>
            <p className="font-barlow text-sm text-jd-gray tracking-wide">
              Drag to reorder • Click ✕ to remove • Images appear in order on the Hot Rods page
            </p>
          </div>
          {saving && (
            <div className="flex items-center gap-2 text-jd-gray">
              <span className="inline-block w-3 h-3 border border-jd-red border-t-transparent rounded-full animate-spin" />
              <span className="font-barlow text-xs tracking-wide">Saving order...</span>
            </div>
          )}
        </div>

        {/* Upload area */}
        <div className="bg-jd-card border border-dashed border-jd-red/40 rounded-xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="text-3xl flex-shrink-0">📸</div>
            <div className="flex-1">
              <p className="font-bebas text-xl tracking-wider text-jd-white mb-1">UPLOAD NEW PHOTOS</p>
              <p className="font-barlow text-xs text-jd-gray tracking-wide">Select multiple images at once — JPG, PNG, WEBP</p>
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              <input
                type="text"
                value={uploadAlt}
                onChange={e => setUploadAlt(e.target.value)}
                placeholder="Description (optional)"
                className="input-dark text-sm w-48"
              />
              <label className={`btn-primary cursor-pointer text-sm flex-shrink-0 ${uploading ? 'opacity-60 pointer-events-none' : ''}`}>
                {uploading
                  ? <><span className="inline-block w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Uploading...</>
                  : '+ Add Photos'}
                <input ref={fileRef} type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Image grid */}
        {loading ? (
          <div className="text-center py-20 text-jd-gray font-barlow tracking-wide">Loading gallery...</div>
        ) : images.length === 0 ? (
          <div className="text-center py-20 bg-jd-card border border-jd-border rounded-xl">
            <div className="text-5xl mb-4">🖼️</div>
            <h3 className="font-bebas text-2xl tracking-wider text-jd-white mb-2">GALLERY IS EMPTY</h3>
            <p className="font-barlow text-sm text-jd-gray tracking-wide mb-6 max-w-xs mx-auto">
              Import the original 8 vehicle photos that came with the site, or upload your own above.
            </p>
            <button
              onClick={seedOriginals}
              disabled={seeding}
              className="btn-primary mx-auto disabled:opacity-60"
            >
              {seeding
                ? <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Importing...</>
                : '📥 Import Original Photos'}
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <p className="font-barlow text-xs text-jd-gray/60 tracking-wide uppercase">
                {images.length} photo{images.length !== 1 ? 's' : ''} — drag to reorder
              </p>
              {images.length > 0 && (
                <button
                  onClick={seedOriginals}
                  disabled={seeding}
                  className="font-barlow text-xs tracking-widest uppercase px-3 py-1.5 border border-jd-border hover:border-jd-red/50 rounded text-jd-gray hover:text-jd-white transition-all disabled:opacity-50"
                >
                  {seeding ? 'Importing...' : '+ Import Original Photos'}
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, i) => (
                <div
                  key={img.id}
                  draggable
                  onDragStart={() => handleDragStart(i)}
                  onDragOver={e => handleDragOver(e, i)}
                  onDrop={e => handleDrop(e, i)}
                  onDragEnd={handleDragEnd}
                  className={`group relative bg-jd-card border rounded-lg overflow-hidden cursor-grab active:cursor-grabbing transition-all duration-150 ${
                    dragIndex === i
                      ? 'opacity-40 border-jd-border scale-95'
                      : dropIndex === i && dragIndex !== null
                      ? 'border-jd-red ring-2 ring-jd-red/40 scale-102'
                      : 'border-jd-border hover:border-jd-red/40'
                  }`}
                >
                  {/* Drag handle indicator */}
                  <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 rounded px-1.5 py-0.5">
                      <span className="text-jd-gray text-xs">⠿ drag</span>
                    </div>
                  </div>

                  {/* Order badge */}
                  <div className="absolute top-2 right-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/60 rounded px-1.5 py-0.5">
                      <span className="font-barlow text-xs text-jd-gray">#{i + 1}</span>
                    </div>
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="absolute top-2 right-2 z-10 w-7 h-7 bg-black/70 hover:bg-red-500/90 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                    title="Remove from gallery"
                  >
                    ✕
                  </button>

                  <div className="relative aspect-square pointer-events-none">
                    <Image
                      src={img.url}
                      alt={img.alt || 'Vehicle photo'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized
                    />
                  </div>

                  <div className="p-2 pointer-events-none">
                    <p className="font-inter text-xs text-jd-gray truncate">{img.alt || 'No description'}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
