'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.4}px`
      }
    }
    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-bg" />

      {/* Animated red glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-jd-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-jd-red/3 blur-[100px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(204, 20, 20, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 20, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Diagonal stripe accent - top right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none stripe-accent" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">

        {/* Badge */}
        <div className="badge mb-6 animate-fade-in-up opacity-0 delay-100">
          <span>⭐</span>
          <span>Family Owned &amp; Operated</span>
        </div>

        {/* Main headline */}
        <h1
          className="font-bebas text-[clamp(4rem,14vw,9rem)] leading-none tracking-wider text-jd-white animate-fade-in-up opacity-0 delay-200"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
        >
          BUILT TOUGH.
          <br />
          <span
            className="red-chrome-text"
            style={{ filter: 'drop-shadow(0 0 20px rgba(204,20,20,0.5))' }}
          >
            FIXED RIGHT.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-barlow text-xl md:text-2xl text-jd-silver tracking-wide max-w-2xl mt-6 mb-4 animate-fade-in-up opacity-0 delay-300">
          Expert auto repair you can trust. Water pumps, radiators, starters, alternators — and everything in between.
        </p>

        {/* Hotrod callout */}
        <p className="font-barlow text-base text-jd-red/80 tracking-widest uppercase mb-10 animate-fade-in-up opacity-0 delay-400">
          ✦ We also build custom hotrods &amp; muscle cars ✦
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-500">
          <BookingButton className="btn-primary text-lg py-4 px-8 glow-red phone-pulse">
            <span>🔧</span>
            Schedule Free Inspection
          </BookingButton>
          <Link href="/hotrods" className="btn-secondary text-lg py-4 px-8">
            <span>🔥</span>
            View Our Hot Rod Builds
          </Link>
        </div>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 animate-fade-in-up opacity-0 delay-500">
          {[
            { icon: '🛡️', label: 'ASE Certified' },
            { icon: '🏆', label: 'Quality Guaranteed' },
            { icon: '⚡', label: 'Fast Turnaround' },
            { icon: '🤝', label: 'Honest Estimates' },
            { icon: '💳', label: 'Financing Available' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-jd-silver">
              <span className="text-xl">{badge.icon}</span>
              <span className="font-barlow font-600 text-sm tracking-widest uppercase">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

{/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jd-black to-transparent pointer-events-none" />
    </section>
  )
}
