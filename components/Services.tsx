import BookingButton from '@/components/BookingButton'

export default function Services() {
  const services = [
    { icon: '🔧', title: 'Engine Repair & Diagnostics', desc: 'Full engine diagnostics and repair using the latest scan tools.' },
    { icon: '🛑', title: 'Brake Service', desc: 'Pads, rotors, calipers, brake fluid — complete brake system service.' },
    { icon: '🔄', title: 'Transmission Service', desc: 'Fluid flushes, repairs, and diagnostics for automatic and manual transmissions. (Rebuilds not available.)' },
    { icon: '💡', title: 'Electrical & Charging', desc: 'Battery, alternator, wiring, fuses, and full electrical diagnostics.' },
    { icon: '❄️', title: 'A/C & Heating', desc: 'Recharge, repair, or full replacement of your vehicle\'s climate system.' },
    { icon: '🛢️', title: 'Oil Changes', desc: 'Conventional and synthetic oil changes with multi-point inspection.' },
    { icon: '🔩', title: 'Suspension & Steering', desc: 'Shocks, struts, ball joints, tie rods — ride smooth again.' },
    { icon: '💨', title: 'Exhaust Service', desc: 'Muffler, catalytic converter, and exhaust pipe repair and replacement.' },
    { icon: '🌊', title: 'Cooling System', desc: 'Radiator, thermostat, hoses, and coolant flush to prevent overheating.' },
    { icon: '🔑', title: 'Timing Belt / Chain', desc: 'Inspection and replacement to prevent catastrophic engine failure.' },
    { icon: '⚙️', title: 'Fuel System', desc: 'Injector cleaning, fuel pump replacement, and fuel filter service.' },
    { icon: '🚗', title: 'Pre-Purchase Inspection', desc: 'Buying a used car? Let us check it out before you sign.' },
    { icon: '🎨', title: 'Paint & Body', desc: 'Custom paint jobs, body repair, and finish work. From touch-ups to full resprays — we make it look right.' },
  ]

  return (
    <section id="services" className="relative py-20 md:py-28 bg-jd-dark">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mx-auto mb-4">
            <span>🔩</span>
            <span>Full Service Auto Repair</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white mb-4">
            ALL SERVICES
          </h2>
          <div className="section-divider" />
          <p className="font-barlow text-xl text-jd-silver max-w-xl mx-auto tracking-wide">
            From a simple oil change to a full engine rebuild — we&apos;ve got you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group card-hover bg-jd-card border border-jd-border rounded-lg p-5 flex gap-4 items-start"
            >
              <div className="service-icon flex-shrink-0 w-10 h-10 text-lg">
                {service.icon}
              </div>
              <div>
                <h3 className="font-barlow font-bold text-base tracking-wide text-jd-white mb-1 group-hover:text-jd-red transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-xs text-jd-gray leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center bg-jd-card border border-jd-border rounded-xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-jd-red/5 via-transparent to-jd-red/5" />
          <div className="relative z-10">
            <h3 className="font-bebas text-4xl md:text-5xl text-jd-white tracking-wider mb-3">
              DON&apos;T SEE WHAT YOU NEED?
            </h3>
            <p className="font-barlow text-xl text-jd-silver mb-2 tracking-wide">
              If it&apos;s got an engine, we can fix it. Call or schedule online and let&apos;s talk.
            </p>
            <p className="font-barlow text-base text-jd-red/80 tracking-widest uppercase mb-6">
              💳 Financing available — ask us about payment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12282076655" className="btn-primary">
                📞 Call Us Now
              </a>
              <BookingButton className="btn-secondary">
                Schedule Online
              </BookingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
