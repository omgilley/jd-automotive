'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin/leads')
    } else {
      setError('Incorrect password.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-jd-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="relative w-14 h-14">
            <Image src="/logo.webp" alt="J&D's Automotive" fill className="object-contain" />
          </div>
          <div>
            <div className="font-bebas text-2xl tracking-widest text-jd-white">J&amp;D&apos;s Automotive</div>
            <div className="font-barlow text-xs tracking-widest text-jd-red uppercase">Admin Panel</div>
          </div>
        </div>

        <div className="bg-jd-card border border-jd-border rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />
          <h1 className="font-bebas text-3xl tracking-wider text-jd-white mb-1">ADMIN LOGIN</h1>
          <p className="font-barlow text-xs text-jd-gray tracking-wide mb-6 uppercase">Authorized personnel only</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoFocus
              className="input-dark"
            />
            {error && (
              <p className="font-barlow text-sm text-jd-red tracking-wide">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {loading ? (
                <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Signing in...</>
              ) : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center font-inter text-xs text-jd-gray/40 mt-6">
          J&amp;D&apos;s Automotive — Internal Use Only
        </p>
      </div>
    </div>
  )
}
