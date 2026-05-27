'use client'

import { openBooking } from '@/lib/tekmetric'

export default function Contact() {
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
              Book your appointment online — it goes straight into our shop calendar and we&apos;ll be ready for you. Or just give us a call.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:+12282076655"
                className="flex items-center gap-4 group border border-jd-border hover:border-jd-red/50 bg-jd-card rounded-lg p-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Call Us</div>
                  <div className="font-barlow font-bold text-xl text-jd-white group-hover:text-jd-red transition-colors">
                    (228) 207-6655
                  </div>
                </div>
              </a>

              <a
                href="mailto:jdautomotive1017@gmail.com"
                className="flex items-center gap-4 group border border-jd-border hover:border-jd-red/50 bg-jd-card rounded-lg p-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Email</div>
                  <div className="font-barlow font-bold text-base text-jd-white group-hover:text-jd-red transition-colors">
                    jdautomotive1017@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=2381+Pass+Rd,+Biloxi,+MS+39531"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group border border-jd-border hover:border-jd-red/50 bg-jd-card rounded-lg p-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Location</div>
                  <div className="font-barlow font-bold text-base text-jd-white group-hover:text-jd-red transition-colors">
                    2381 Pass Rd<br />Biloxi, MS 39531
                  </div>
                  <div className="font-inter text-xs text-jd-gray mt-0.5">Tap for directions →</div>
                </div>
              </a>

              {/* Finding us callout */}
              <div className="border border-jd-red/20 bg-jd-red/5 rounded-lg p-4">
                <p className="font-barlow text-sm font-bold text-jd-white mb-1">📍 Having trouble finding us?</p>
                <p className="font-inter text-xs text-jd-gray leading-relaxed mb-2">
                  We&apos;re on Pass Rd — right next to <strong className="text-jd-silver">Cubesmart Self Storage</strong>, near Popps Ferry Rd. AutoZone is just to our west, Walgreens to the east. If you get to Burger King or Starbucks you&apos;ve gone a little too far south.
                </p>
                <p className="font-inter text-xs text-jd-gray leading-relaxed mb-3">
                  Can&apos;t find us? Call and we&apos;ll talk you right to the door.
                </p>
                <a
                  href="https://maps.google.com/?q=2381+Pass+Rd,+Biloxi,+MS+39531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded overflow-hidden mb-3 border border-jd-border hover:border-jd-red/50 transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Directions .PNG"
                    alt="Map to J&D's Automotive — 2381 Pass Rd, Biloxi, MS"
                    className="w-full object-cover"
                  />
                </a>
                <a
                  href="https://maps.google.com/?q=2381+Pass+Rd,+Biloxi,+MS+39531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-barlow text-xs font-bold text-jd-red hover:text-jd-red-bright tracking-wide uppercase transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="flex items-center gap-4 border border-jd-border bg-jd-card rounded-lg p-4">
                <div className="w-12 h-12 rounded-lg bg-jd-red/10 border border-jd-red/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <div className="font-barlow text-xs tracking-widest text-jd-gray uppercase mb-0.5">Hours</div>
                  <div className="font-barlow font-bold text-sm text-jd-white">
                    Mon–Fri: 8:00 AM – 5:00 PM
                    <br />
                    <span className="text-jd-gray">Sat–Sun: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Online Booking */}
          <div className="bg-jd-card border border-jd-border rounded-xl p-8 relative overflow-hidden flex flex-col items-center text-center">
            {/* Top red accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jd-red-dark via-jd-red to-jd-red-dark" />

            <div className="text-5xl mb-4 mt-4">🔧</div>
            <h3 className="font-bebas text-4xl tracking-wider text-jd-white mb-2">
              BOOK ONLINE
            </h3>
            <div className="w-12 h-px bg-jd-red/40 mb-6" />
            <p className="font-barlow text-lg text-jd-silver tracking-wide leading-relaxed mb-8 max-w-xs">
              Select your service, pick a time, and your appointment goes straight into our shop calendar — no back-and-forth.
            </p>

            <button
              onClick={openBooking}
              className="btn-primary w-full justify-center text-lg py-4 mb-6"
            >
              📅 Book an Appointment
            </button>

            <p className="font-inter text-xs text-jd-gray">
              Prefer to call?{' '}
              <a href="tel:+12282076655" className="text-jd-red hover:text-jd-red-bright transition-colors font-bold">
                (228) 207-6655
              </a>
              {' '}— we pick up.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
