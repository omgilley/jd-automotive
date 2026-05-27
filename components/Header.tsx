'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TEKMETRIC_ID = '8e9b140b-6e56-49a9-ae32-380693734bc8'

function openBooking() {
  if (typeof window !== 'undefined' && (window as any).onShowBooking) {
    (window as any).onShowBooking(TEKMETRIC_ID)
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
    { href: '/hotrods', label: '🔥 Hot Rods', special: true },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-jd-border shadow-2xl'
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      {/* Info bar — hours & phone */}
      <div className="hidden md:block bg-black/80 border-b border-jd-border/40 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-barlow text-xs text-jd-gray tracking-wide">
              <span className="text-jd-red mr-1">🕐</span> Mon–Fri: 8:00 AM – 5:00 PM &nbsp;|&nbsp; Sat–Sun: Closed
            </span>
            <span className="font-barlow text-xs text-jd-gray tracking-wide">
              <span className="text-jd-red mr-1">📍</span> 2381 Pass Rd, Biloxi, MS 39531
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.bbb.org/us/ms/biloxi/profile/auto-repairs/j-ds-automotive-llc-0523-235903086/#sealclick"
              target="_blank"
              rel="nofollow noopener noreferrer"
              title="J&D's Automotive BBB Business Review"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://seal-ms.bbb.org/seals/black-seal-200-42-whitetxt-bbb-235903086.png"
                alt="BBB Accredited Business"
                style={{ height: 28, width: 'auto', border: 0 }}
              />
            </a>
            <a href="tel:+12282076655" className="font-barlow text-xs font-bold text-jd-red hover:text-jd-red-bright tracking-wider transition-colors">
              📞 (228) 207-6655
            </a>
          </div>
        </div>
      </div>

      {/* Top accent bar */}
      <div className="flag-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo.webp"
                alt="J&D's Automotive"
                fill
                className="object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(204,20,20,0.6)] transition-all duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bebas text-xl md:text-2xl tracking-widest text-jd-white leading-none">
                J&D&apos;s Automotive
              </div>
              <div className="font-barlow text-xs tracking-[0.2em] text-jd-red uppercase">
                Built Tough. Fixed Right.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.special ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-barlow font-700 text-sm tracking-widest uppercase text-jd-red hover:text-jd-red-bright transition-colors duration-200 border border-jd-red/40 hover:border-jd-red px-3 py-1.5 rounded hover:bg-jd-red/10"
                >
                  {link.label}
                </Link>
              ) : (
                <Link key={link.href} href={link.href} className="nav-link text-sm">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+12282076655"
              className="hidden sm:flex items-center gap-2 font-barlow font-bold text-sm tracking-wider text-jd-white hover:text-jd-red transition-colors uppercase"
            >
              <span className="text-jd-red text-lg">📞</span>
              <span className="hidden md:inline">(228) 207-6655</span>
            </a>

            <button onClick={openBooking} className="btn-primary text-sm py-2.5 px-4 hidden sm:inline-flex">
              Schedule Now
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-jd-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-jd-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-jd-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-jd-border mobile-menu">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-barlow font-bold text-lg tracking-widest uppercase transition-colors py-2 border-b border-jd-border ${
                  link.special ? 'text-jd-red' : 'text-jd-white hover:text-jd-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+12282076655" className="btn-primary mt-2 justify-center">
              📞 Call Now
            </a>
            <button onClick={() => { setMenuOpen(false); openBooking() }} className="btn-secondary justify-center">
              Schedule Service
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
