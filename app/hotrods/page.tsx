'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function QuoteForm() {
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
    await new Promise(r => setTimeout(r, 1200))
    setSubmitted(true)
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

const builds = [
  { title: 'American Muscle', category: 'Restoration', desc: 'Full frame-off restoration with modern reliability upgrades.' },
  { title: 'Street Rod', category: 'Custom Build', desc: 'Built to turn heads on the boulevard and tear up the track.' },
  { title: 'Pro Touring', category: 'Performance', desc: 'Classic looks, modern suspension, and serious horsepower.' },
  { title: 'Show Car', category: 'Show Build', desc: 'Trophy-winning detail work and competition-level finishing.' },
  { title: 'Rat Rod', category: 'Custom', desc: 'Raw, aggressive, and unapologetically American.' },
  { title: 'Engine Build', category: 'Performance', desc: 'Crate swaps, big block builds, and custom engine packages.' },
]

export default function HotrodsPage() {
  return (
    <main className="bg-jd-black min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hotrod-hero" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(204, 20, 20, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 20, 20, 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Glow orbs */}
        <div className="absolute left-1/4 top-1/3 w-[400px] h-[400px] bg-jd-red/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-1/4 bottom-1/3 w-[300px] h-[300px] bg-jd-red/8 blur-[80px] pointer-events-none" />

        {/* Diagonal lines */}
        <div className="absolute left-0 top-0 bottom-0 w-24 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #CC1414, #CC1414 1px, transparent 1px, transparent 14px)'
        }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #CC1414, #CC1414 1px, transparent 1px, transparent 14px)'
        }} />

        {/* Top flag stripe */}
        <div className="absolute top-0 left-0 right-0 flag-stripe" style={{ top: '80px' }} />

        <div className="relative z-10 text-center px-4">
          <div className="badge mx-auto mb-6">
            <span>🔥</span>
            <span>Custom Hotrod Builds</span>
          </div>

          <h1
            className="font-bebas text-[clamp(4.5rem,15vw,10rem)] leading-none tracking-wider mb-6"
            style={{ textShadow: '0 0 60px rgba(204,20,20,0.4), 0 4px 40px rgba(0,0,0,0.9)' }}
          >
            <span className="text-jd-white">WHERE</span>
            <br />
            <span className="red-chrome-text" style={{ filter: 'drop-shadow(0 0 40px rgba(204,20,20,0.8))' }}>
              LEGENDS
            </span>
            <br />
            <span className="text-jd-white">ARE BORN</span>
          </h1>

          <p className="font-barlow text-xl md:text-2xl text-jd-silver tracking-wide max-w-2xl mx-auto mb-4">
            We don&apos;t just fix cars. We build dreams. Custom hotrods, muscle car restorations, and one-of-a-kind builds crafted by hand.
          </p>

          <p className="font-barlow text-base text-jd-red/80 tracking-widest uppercase mb-10">
            ✦ Show Cars ✦ Street Rods ✦ Pro Builds ✦ Frame-Off Restorations ✦
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="btn-primary text-lg py-4 px-8 glow-red">
              🔥 Request a Custom Build Quote
            </a>
            <Link href="/" className="btn-secondary text-lg py-4 px-8">
              ← Back to Auto Repair
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-jd-black to-transparent pointer-events-none" />
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-jd-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-4"><span>⚙️</span><span>Build Types</span></div>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white mb-4">
              WHAT WE BUILD
            </h2>
            <div className="section-divider" />
            <p className="font-barlow text-xl text-jd-silver max-w-2xl mx-auto tracking-wide">
              Every build is unique. Every build is personal. Every build is built to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build, i) => (
              <div
                key={build.title}
                className="group card-hover bg-jd-card border border-jd-border rounded-lg overflow-hidden"
              >
                {/* Placeholder build image area */}
                <div
                  className="relative h-52 bg-gradient-to-br from-jd-border to-[#0D0D0D] flex items-center justify-center overflow-hidden"
                >
                  {/* Diagonal stripe pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, #CC1414, #CC1414 1px, transparent 1px, transparent 20px)',
                  }} />
                  <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {['🚗','🏎️','⚙️','🔥','💀','⚡'][i]}
                  </div>
                  {/* Photo placeholder label */}
                  <div className="absolute bottom-2 right-2">
                    <span className="font-barlow text-xs text-jd-gray/50 uppercase tracking-widest">
                      [ Add Photo ]
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-jd-red/90 rounded px-2 py-0.5">
                    <span className="font-barlow text-xs font-bold tracking-wider text-white uppercase">
                      {build.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bebas text-2xl tracking-wider text-jd-white mb-2 group-hover:text-jd-red transition-colors">
                    {build.title}
                  </h3>
                  <p className="font-inter text-xs text-jd-gray leading-relaxed">
                    {build.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo placeholder CTA */}
          <div className="mt-10 text-center">
            <p className="font-barlow text-sm text-jd-gray/50 tracking-wide italic">
              📸 Photo gallery coming soon — contact us to see current and past builds
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 md:py-28 bg-jd-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-jd-dark via-[#0D0808] to-jd-dark opacity-80" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-jd-red/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-4"><span>🛠️</span><span>Build Process</span></div>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white mb-4">
              HOW IT <span className="red-chrome-text">WORKS</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-jd-red/30 to-transparent" />

            {[
              { step: '01', title: 'Consultation', desc: 'Tell us your vision. We listen, advise, and propose the best path forward for your dream build.' },
              { step: '02', title: 'Design & Quote', desc: 'We plan the build, source parts, and give you a transparent detailed estimate before a bolt is turned.' },
              { step: '03', title: 'The Build', desc: 'Our craftsmen get to work. We send updates throughout — this is your build, and you\'re part of the process.' },
              { step: '04', title: 'Delivery', desc: 'Your beast is ready. We go over every detail, fire it up, and hand you the keys to your legend.' },
            ].map((item, i) => (
              <div key={item.step} className="relative group">
                <div className="bg-jd-card border border-jd-border hover:border-jd-red/40 rounded-lg p-6 transition-all duration-300 h-full">
                  <div className="font-bebas text-6xl text-jd-red/20 leading-none mb-2 group-hover:text-jd-red/40 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="font-bebas text-2xl tracking-wider text-jd-white mb-2">{item.title}</h3>
                  <p className="font-inter text-xs text-jd-gray leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build With Us */}
      <section className="py-20 md:py-28 bg-jd-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/20 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-jd-red/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6"><span>🦅</span><span>Why Build With J&amp;D</span></div>
              <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white leading-none mb-6">
                WE BUILD WITH
                <br />
                <span className="red-chrome-text">PASSION,</span>
                <br />
                NOT JUST PARTS.
              </h2>
              <div className="section-divider-left" />
              <p className="font-barlow text-xl text-jd-silver tracking-wide leading-relaxed mb-6">
                Every custom build at J&amp;D is treated like it&apos;s going in our own garage. We love this stuff — the smell of metal, the roar of a fresh engine, the look on an owner&apos;s face at delivery.
              </p>
              <div className="border-l-2 border-jd-red pl-5 mb-8">
                <p className="font-barlow text-lg text-jd-white italic tracking-wide">
                  &ldquo;We&apos;ve been wrenching on American iron our whole lives. Custom builds aren&apos;t a side business — it&apos;s in our DNA.&rdquo;
                </p>
                <p className="font-barlow text-sm text-jd-red mt-2 tracking-wider">— J&amp;D Automotive</p>
              </div>
              <a href="#quote" className="btn-primary">
                🔥 Start Your Build
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏆', title: 'Competition Winners', desc: 'Our builds have taken home trophies at local and regional shows.' },
                { icon: '🔩', title: 'Full Fabrication', desc: 'In-house metal fab, welding, and custom part creation.' },
                { icon: '⚡', title: 'Performance First', desc: 'Every build is built to run — not just to look good in a garage.' },
                { icon: '📸', title: 'Documented Process', desc: 'We photograph and document every stage of your build.' },
                { icon: '🛡️', title: 'Build Warranty', desc: 'We stand behind our work. Quality guaranteed.' },
                { icon: '🤝', title: 'Client Partnership', desc: 'You&apos;re involved at every major decision point — it&apos;s your build.' },
              ].map(item => (
                <div key={item.title} className="bg-jd-card border border-jd-border hover:border-jd-red/30 rounded-lg p-4 group transition-all">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-barlow font-bold text-sm text-jd-white mb-1 group-hover:text-jd-red transition-colors">{item.title}</div>
                  <div className="font-inter text-xs text-jd-gray">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0000] via-[#1A0000] to-[#0D0000]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(204, 20, 20, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 20, 20, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-jd-red/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/50 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4"><span>🔥</span><span>Get A Quote</span></div>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white mb-4">
              START YOUR
              <br />
              <span className="red-chrome-text">BUILD</span>
            </h2>
            <div className="section-divider" />
            <p className="font-barlow text-xl text-jd-silver tracking-wide">
              Tell us your dream. We&apos;ll tell you how to make it real.
            </p>
          </div>

          <div className="bg-jd-card border border-jd-border rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />
            <QuoteForm />
          </div>

          <p className="text-center font-barlow text-sm text-jd-gray/60 mt-6 tracking-wide">
            Prefer to talk? Call us at{' '}
            <a href="tel:+1XXXXXXXXXX" className="text-jd-red hover:text-jd-red-bright transition-colors">
              (XXX) XXX-XXXX
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
