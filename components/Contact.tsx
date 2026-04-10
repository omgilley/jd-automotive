'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferred: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Connect to your email service here (Formspree, EmailJS, etc.)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  const services = [
    'Water Pump', 'Radiator', 'Starter', 'Alternator',
    'Brakes', 'Oil Change', 'Engine Repair', 'Transmission',
    'A/C & Heating', 'Electrical', 'Suspension', 'Other',
  ]

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-jd-dark">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-jd-red/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div>
            <div className="badge mb-6">
              <span>📅</span>
              <span>Get In Touch</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white leading-none mb-6">
              READY TO GET
              <br />
              <span className="red-chrome-text">BACK ON THE</span>
              <br />
              ROAD?
            </h2>
            <div className="section-divider-left" />
            <p className="font-barlow text-xl text-jd-silver tracking-wide mb-10 leading-relaxed">
              Schedule your service online and we&apos;ll confirm within the hour. Or just give us a call — we pick up.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:+1XXXXXXXXXX"
                className="flex items-center gap-4 group border border-jd-border hover:border-jd-red/50 bg-jd-card rounded-lg p-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Call Us</div>
                  <div className="font-barlow font-bold text-xl text-jd-white group-hover:text-jd-red transition-colors">
                    (XXX) XXX-XXXX
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@jdautomotive.com"
                className="flex items-center gap-4 group border border-jd-border hover:border-jd-red/50 bg-jd-card rounded-lg p-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Email</div>
                  <div className="font-barlow font-bold text-base text-jd-white group-hover:text-jd-red transition-colors">
                    info@jdautomotive.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 border border-jd-border bg-jd-card rounded-lg p-4">
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Location</div>
                  <div className="font-barlow font-bold text-base text-jd-white">
                    [Your Street Address]
                    <br />
                    [City, State ZIP]
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-jd-border bg-jd-card rounded-lg p-4">
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Hours</div>
                  <div className="font-barlow font-bold text-sm text-jd-white">
                    Mon–Fri: 8:00 AM – 6:00 PM
                    <br />
                    Sat: 8:00 AM – 3:00 PM
                    <br />
                    <span className="text-jd-gray">Sun: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-jd-card border border-jd-border rounded-xl p-8 relative overflow-hidden">
            {/* Top red accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-scale-in">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-bebas text-4xl tracking-wider text-jd-white mb-3">
                  YOU&apos;RE ALL SET!
                </h3>
                <p className="font-barlow text-lg text-jd-silver tracking-wide">
                  We&apos;ll be in touch within the hour to confirm your appointment.
                  <br />Thanks for choosing J&amp;D&apos;s Automotive!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-bebas text-3xl tracking-wider text-jd-white mb-2">
                  SCHEDULE SERVICE
                </h3>
                <p className="font-barlow text-sm text-jd-gray tracking-wide mb-6 uppercase">
                  We&apos;ll confirm within the hour ⚡
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 555-5555"
                        required
                        className="input-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      required
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-dark"
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferred"
                      value={formData.preferred}
                      onChange={handleChange}
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label className="font-barlow text-xs tracking-widest text-jd-gray uppercase block mb-1.5">
                      Tell Us What&apos;s Going On
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the issue or service you need..."
                      rows={3}
                      className="input-dark resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-3.5 mt-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>🔧 Request Appointment</>
                    )}
                  </button>

                  <p className="font-inter text-xs text-jd-gray text-center">
                    We respect your privacy. Your info is never shared.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
