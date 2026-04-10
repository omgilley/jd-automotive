export default function HotServices() {
  const hotServices = [
    {
      icon: '💧',
      title: 'Water Pumps',
      description: 'Your engine\'s lifeline. We diagnose and replace water pumps fast before overheating leaves you stranded.',
      urgency: 'Don\'t Overheat — Act Fast',
    },
    {
      icon: '🌡️',
      title: 'Radiators',
      description: 'Full radiator repair, flush, and replacement. Keep your engine cool in any condition.',
      urgency: 'Cooling System Specialists',
    },
    {
      icon: '⚡',
      title: 'Starters',
      description: 'Dead starter? We get you turning over again. Fast diagnosis, quality parts, done right the first time.',
      urgency: 'Get Back on the Road Today',
    },
    {
      icon: '🔋',
      title: 'Alternators',
      description: 'Battery draining? Electrical problems? We test and replace alternators to keep your vehicle charged and running.',
      urgency: 'Stop Electrical Problems Now',
    },
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-jd-black via-[#0D0808] to-jd-black" />
      <div className="absolute inset-0 opacity-5 pointer-events-none stripe-accent" />

      {/* Red glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-jd-red to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mx-auto mb-4">
            <span>🔥</span>
            <span>Our Specialty Services</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white mb-4">
            WE SPECIALIZE IN
            <br />
            <span className="red-chrome-text">THE HARD STUFF</span>
          </h2>
          <div className="section-divider" />
          <p className="font-barlow text-xl text-jd-silver max-w-2xl mx-auto tracking-wide">
            These are the jobs other shops avoid. We do them daily — and we do them right.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotServices.map((service, i) => (
            <div
              key={service.title}
              className="relative group card-hover cursor-default rounded-lg overflow-hidden border border-jd-border bg-jd-card flex flex-col"
            >
              {/* Top red accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-jd-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Red corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-jd-red/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className="service-icon">
                  <span className="text-2xl">{service.icon}</span>
                </div>

                <h3 className="font-bebas text-3xl tracking-wider text-jd-white mb-3">
                  {service.title}
                </h3>

                <p className="font-inter text-sm text-jd-gray leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>

                {/* Urgency tag */}
                <div className="mt-auto">
                  <span className="font-barlow text-xs font-bold tracking-widest text-jd-red uppercase flex items-center gap-1">
                    <span className="w-4 h-0.5 bg-jd-red inline-block" />
                    {service.urgency}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="text-center mt-12">
          <p className="font-barlow text-lg text-jd-silver mb-6 tracking-wide">
            Something else giving you trouble? We handle it all.
          </p>
          <a href="#services" className="btn-secondary">
            See All Services →
          </a>
        </div>
      </div>
    </section>
  )
}
