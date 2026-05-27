'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
            <a href="/admin/gallery" className="font-barlow text-sm tracking-wide text-jd-gray hover:text-jd-white uppercase transition-colors">Gallery</a>
            <a href="/admin/settings" className="font-barlow text-sm tracking-wide text-jd-red uppercase">Settings</a>
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

export default function SettingsPage() {
  const [currentLogo, setCurrentLogo] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetch('/api/logo').then(r => r.json()).then(d => {
      if (d.url) setCurrentLogo(d.url)
    })
  }, [])

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPreviewUrl(URL.createObjectURL(file))
    setSuccess(false)
  }

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0]
    if (!file) return
    setUploading(true)
    const form = new FormData()
    form.append('file', file)
    const res = await fetch('/api/admin/logo', { method: 'POST', body: form })
    if (res.ok) {
      const { url } = await res.json()
      setCurrentLogo(url)
      setPreviewUrl(null)
      setSuccess(true)
    }
    setUploading(false)
    if (fileRef.current) fileRef.current.value = ''
  }

  const activeLogoSrc = currentLogo ?? '/logo.webp'

  return (
    <div className="min-h-screen bg-jd-black">
      <AdminNav />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="font-bebas text-4xl tracking-wider text-jd-white mb-6">SITE SETTINGS</h1>

        <div className="bg-jd-card border border-jd-border rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />

          <h2 className="font-bebas text-2xl tracking-wider text-jd-white mb-1">LOGO</h2>
          <p className="font-barlow text-sm text-jd-gray tracking-wide mb-6">
            Upload a new logo to replace the one shown in the site header and footer.
            Best results with a square image (PNG with transparent background).
          </p>

          {/* Current logo */}
          <div className="mb-6">
            <p className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-3">Current Logo</p>
            <div className="inline-flex items-center justify-center w-28 h-28 bg-jd-dark border border-jd-border rounded-lg p-3">
              <Image
                src={activeLogoSrc}
                alt="Current logo"
                width={96}
                height={96}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Preview */}
          {previewUrl && (
            <div className="mb-6">
              <p className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-3">New Logo Preview</p>
              <div className="inline-flex items-center justify-center w-28 h-28 bg-jd-dark border border-jd-red/40 rounded-lg p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt="Preview" className="object-contain w-full h-full" />
              </div>
            </div>
          )}

          {success && (
            <div className="mb-4 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3">
              <p className="font-barlow text-sm text-green-400 tracking-wide">✓ Logo updated successfully! It will appear across the site within a few minutes.</p>
            </div>
          )}

          <div className="flex gap-3 items-center flex-wrap">
            <label className="btn-secondary cursor-pointer">
              {previewUrl ? 'Change Selection' : 'Choose Logo File'}
              <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
            </label>
            {previewUrl && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="btn-primary disabled:opacity-60"
              >
                {uploading ? (
                  <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Uploading...</>
                ) : 'Save New Logo'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
