'use client'

import { useState } from 'react'

export default function HotrodsQuoteForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', vehicle: '', year: '', vision: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'hotrod', _subject: '🔥 Custom Build Request — J&D Automotive' }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 animate-scale-in">
        <div className="text-6xl mb-4">🔥</div>
        <h3 className="font-bebas text-4xl tracking-wider text-jd-white mb-3">BUILD REQUEST RECEIVED!</h3>
        <p className="font-barlow text-lg text-jd-silver tracking-wide">
          We&apos;ll reach out to discuss your vision. Get ready to build something legendary.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required className="input-dark" />
        </div>
        <div>
          <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">Phone *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 555-5555" required className="input-dark" />
        </div>
      </div>
      <div>
        <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">Email *</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@email.com" required className="input-dark" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">Vehicle (Make/Model)</label>
          <input type="text" name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="1969 Camaro" className="input-dark" />
        </div>
        <div>
          <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">Budget Range</label>
          <select name="year" value={formData.year} onChange={handleChange} className="input-dark">
            <option value="">Select range...</option>
            <option>Under $10,000</option>
            <option>$10,000 – $25,000</option>
            <option>$25,000 – $50,000</option>
            <option>$50,000 – $100,000</option>
            <option>$100,000+</option>
            <option>Let&apos;s talk</option>
          </select>
        </div>
      </div>
      <div>
        <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">Describe Your Vision</label>
        <textarea
          name="vision"
          value={formData.vision}
          onChange={handleChange}
          placeholder="Tell us about your dream build — style, engine, suspension, interior, paint... don't hold back."
          rows={4}
          className="input-dark resize-none"
        />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60">
        {loading ? (
          <><span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
        ) : (
          <>🔥 Request Custom Build Quote</>
        )}
      </button>
    </form>
  )
}
