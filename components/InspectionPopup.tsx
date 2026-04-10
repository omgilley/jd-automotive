'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function InspectionPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferred: '',
  })

  useEffect(() => {
    // Don't show if already dismissed this session
    const wasDismissed = sessionStorage.getItem('popup-dismissed')
    if (wasDismissed) return

    const timer = setTimeout(() => {
      setShow(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setShow(false)
    setDismissed(true)
    sessionStorage.setItem('popup-dismissed', '1')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Replace with your form handler (Formspree, EmailJS, API route, etc.)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setSubmitted(true)
    setLoading(false)
    // Auto-close after success
    setTimeout(() => dismiss(), 3000)
  }

  if (!show || dismissed) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 popup-overlay"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss()
      }}
    >
      <div className="relative w-full max-w-md bg-jd-card border border-jd-border rounded-xl overflow-hidden shadow-2xl animate-scale-in">

        {/* Top red bar */}
        <div className="h-1.5 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />

        {/* Flag accent line */}
        <div className="flag-stripe" />

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-jd-border hover:bg-jd-red/20 text-jd-gray hover:text-jd-white transition-all z-10"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.5 1.5L1.5 10.5M1.5 1.5L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-7">
          {submitted ? (
            <div className="text-center py-6 animate-scale-in">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-bebas text-3xl tracking-wider text-jd-white mb-2">
                CLAIM CONFIRMED!
              </h3>
              <p className="font-barlow text-base text-jd-silver tracking-wide">
                We&apos;ll call you shortly to lock in your FREE inspection.
                <br />See you soon!
              </p>
            </div>
          ) : (
            <>
              {/* Logo + Badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image src="/logo.webp" alt="J&D's Automotive" fill className="object-contain" />
                </div>
                <div>
                  <div className="font-bebas text-lg tracking-wider text-jd-white leading-none">J&amp;D&apos;s Automotive</div>
                  <div className="badge mt-1">
                    <span>🎯</span>
                    <span>Special Offer</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <div className="text-center mb-6">
                <div className="inline-block bg-jd-red/10 border border-jd-red/30 rounded-lg px-4 py-2 mb-3">
                  <p className="font-barlow text-xs tracking-[0.2em] text-jd-red uppercase font-bold">
                    🎯 You&apos;ve Been Selected!
                  </p>
                </div>
                <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-jd-white leading-tight mb-2">
                  FREE VEHICLE
                  <br />
                  <span className="red-chrome-text">INSPECTION</span>
                </h2>
                <p className="font-barlow text-base text-jd-silver tracking-wide">
                  Claim your complimentary multi-point inspection — no strings attached. Let&apos;s catch issues before they become expensive.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name *"
                    required
                    className="input-dark"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className="input-dark"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="input-dark"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="preferred"
                    value={formData.preferred}
                    onChange={handleChange}
                    className="input-dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-3.5 phone-pulse disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Claiming...
                    </>
                  ) : (
                    <>🔧 Claim My Free Inspection</>
                  )}
                </button>
              </form>

              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-jd-gray">
                  <span className="text-xs">🛡️</span>
                  <span className="font-inter text-xs">No commitment</span>
                </div>
                <div className="w-px h-3 bg-jd-border" />
                <div className="flex items-center gap-1.5 text-jd-gray">
                  <span className="text-xs">🔒</span>
                  <span className="font-inter text-xs">Info never shared</span>
                </div>
                <div className="w-px h-3 bg-jd-border" />
                <div className="flex items-center gap-1.5 text-jd-gray">
                  <span className="text-xs">⚡</span>
                  <span className="font-inter text-xs">Fast confirmation</span>
                </div>
              </div>

              <button
                onClick={dismiss}
                className="w-full mt-3 font-inter text-xs text-jd-gray/50 hover:text-jd-gray transition-colors text-center"
              >
                No thanks, I&apos;ll skip the free inspection
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
