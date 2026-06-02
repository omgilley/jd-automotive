'use client'

import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/BookingButton'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-jd-border overflow-hidden">
      {/* Flag accent */}
      <div className="flag-stripe" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-jd-red/3 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/logo.webp" alt="J&D's Automotive" fill className="object-contain" />
              </div>
              <div>
                <div className="font-bebas text-xl tracking-widest text-jd-white leading-none">
                  J&amp;D&apos;s Automotive
                </div>
                <div className="font-barlow text-xs tracking-[0.15em] text-jd-red uppercase">
                  Built Tough. Fixed Right.
                </div>
              </div>
            </Link>
            <p className="font-inter text-xs text-jd-gray leading-relaxed">
              Family owned and operated. Serving our community with honest, expert auto repair and custom hotrod builds.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-barlow font-bold text-sm tracking-[0.15em] uppercase text-jd-white mb-4 pb-2 border-b border-jd-border">
              Services
            </h4>
            <ul className="space-y-2">
              {['Water Pumps', 'Radiators', 'Starters', 'Alternators', 'Brakes', 'Oil Changes', 'Engine Repair', 'All Services'].map(s => (
                <li key={s}>
                  <a href="#services" className="font-inter text-xs text-jd-gray hover:text-jd-red transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-barlow font-bold text-sm tracking-[0.15em] uppercase text-jd-white mb-4 pb-2 border-b border-jd-border">
              Pages
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: '🔥 Hot Rod Builds', href: '/hotrods' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="font-inter text-xs text-jd-gray hover:text-jd-red transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <BookingButton className="font-inter text-xs text-jd-gray hover:text-jd-red transition-colors bg-transparent border-0 p-0 cursor-pointer">
                  Schedule Service
                </BookingButton>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow font-bold text-sm tracking-[0.15em] uppercase text-jd-white mb-4 pb-2 border-b border-jd-border">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+12282076655" className="flex items-center gap-2 font-inter text-xs text-jd-gray hover:text-jd-red transition-colors">
                  <span>📞</span> (228) 207-6655
                </a>
              </li>
              <li>
                <a href="mailto:jadautomotive@yahoo.com" className="flex items-center gap-2 font-inter text-xs text-jd-gray hover:text-jd-red transition-colors">
                  <span>✉️</span> jadautomotive@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2 font-inter text-xs text-jd-gray">
                <span>📍</span>
                <span>2381 Pass Rd<br />Biloxi, MS 39531</span>
              </li>
              <li className="flex items-start gap-2 font-inter text-xs text-jd-gray">
                <span>🕐</span>
                <span>Mon–Fri: 8AM–5PM<br />Sat–Sun: Closed<br /><span className="text-jd-red">After hours drop off available</span></span>
              </li>
            </ul>

            <BookingButton className="btn-primary mt-5 text-sm py-2.5 px-4 inline-flex">
              Schedule Service
            </BookingButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-jd-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-jd-gray/60">
            © {new Date().getFullYear()} J&amp;D&apos;s Automotive. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-jd-red text-xs">🦅</span>
            <span className="font-barlow text-xs tracking-widest text-jd-gray/60 uppercase">
              American Made. American Proud.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
