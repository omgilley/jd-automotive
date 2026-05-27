'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const STORAGE_KEY = 'jd-popup-dismissed'
const DISMISS_DAYS = 7
const TEKMETRIC_ID = '8e9b140b-6e56-49a9-ae32-380693734bc8'

export default function InspectionPopup() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const dismissedAt = parseInt(raw, 10)
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)
      if (daysSince < DISMISS_DAYS) return
    }
    const timer = setTimeout(() => setShow(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()))
    setShow(false)
  }

  const claimInspection = () => {
    if (typeof window !== 'undefined' && (window as any).onShowBooking) {
      (window as any).onShowBooking(TEKMETRIC_ID)
    }
    dismiss()
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={e => { if (e.target === e.currentTarget) dismiss() }}
    >
      <div className="relative w-full max-w-md bg-jd-card border border-jd-border rounded-xl overflow-hidden shadow-2xl animate-scale-in">
        <div className="h-1.5 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />
        <div className="flag-stripe" />

        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-jd-border hover:bg-jd-red/20 text-jd-gray hover:text-jd-white transition-all z-10"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M10.5 1.5L1.5 10.5M1.5 1.5L10.5 10.5" />
          </svg>
        </button>

        <div className="p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image src="/logo.webp" alt="J&D's Automotive" fill className="object-contain" />
            </div>
            <div>
              <div className="font-bebas text-lg tracking-wider text-jd-white leading-none">J&amp;D&apos;s Automotive</div>
              <div className="badge mt-1"><span>🎯</span><span>Limited Offer</span></div>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="inline-block bg-jd-red/10 border border-jd-red/30 rounded-lg px-4 py-2 mb-3">
              <p className="font-barlow text-xs tracking-[0.2em] text-jd-red uppercase font-bold">
                🔧 No Strings Attached
              </p>
            </div>
            <h2 className="font-bebas text-5xl tracking-wider text-jd-white leading-tight mb-2">
              FREE VEHICLE
              <br />
              <span className="red-chrome-text">INSPECTION!</span>
            </h2>
            <p className="font-barlow text-base text-jd-silver tracking-wide">
              Book your complimentary multi-point inspection online — your slot goes straight into our shop calendar. We&apos;ll catch issues before they become expensive.
            </p>
          </div>

          <button
            onClick={claimInspection}
            className="btn-primary w-full justify-center text-base py-3.5 phone-pulse mb-4"
          >
            🔧 Book My Free Inspection
          </button>

          <div className="flex items-center justify-center gap-4 mb-3">
            {['🛡️ No commitment', '⚡ Instant booking', '📅 Pick your time'].map(item => (
              <div key={item} className="flex items-center gap-1 text-jd-gray">
                <span className="font-inter text-xs">{item}</span>
              </div>
            ))}
          </div>

          <button onClick={dismiss} className="w-full font-inter text-xs text-jd-gray/50 hover:text-jd-gray transition-colors text-center">
            No thanks, I&apos;ll skip the free inspection
          </button>
        </div>
      </div>
    </div>
  )
}
