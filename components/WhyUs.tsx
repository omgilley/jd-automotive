export default function WhyUs() {
  const reasons = [
    {
      icon: '🦅',
      title: 'American Owned & Operated',
      description: 'Proud family business rooted in the community. We treat your vehicle like it\'s our own.',
    },
    {
      icon: '🛡️',
      title: 'ASE Certified Technicians',
      description: 'Our mechanics are certified professionals with years of hands-on experience — not just anyone with a wrench.',
    },
    {
      icon: '💬',
      title: 'Straight Talk, No BS',
      description: 'You\'ll always know exactly what\'s wrong and what it costs before we touch a bolt. No surprises.',
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      description: 'We know you need your car back. We work efficiently and communicate every step of the way.',
    },
    {
      icon: '🔩',
      title: 'Quality Parts Only',
      description: 'We never cut corners on parts. OEM-quality components backed by manufacturer warranties.',
    },
    {
      icon: '🏆',
      title: 'Work Guaranteed',
      description: 'We stand behind everything we do. If something isn\'t right, we make it right.',
    },
  ]

  return (
    <section id="why-us" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-jd-black" />

      {/* Red diagonal lines on left */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(-60deg, #CC1414, #CC1414 1px, transparent 1px, transparent 20px)',
        }}
      />

      {/* Large red glow right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-jd-red/5 blur-[150px] pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: headline */}
          <div>
            <div className="badge mb-6">
              <span>🦅</span>
              <span>Why Choose J&amp;D</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white leading-none mb-6">
              WE EARN YOUR
              <br />
              <span className="red-chrome-text">TRUST EVERY</span>
              <br />
              TIME.
            </h2>
            <div className="section-divider-left" />
            <p className="font-barlow text-xl text-jd-silver leading-relaxed tracking-wide mb-8">
              We&apos;re not a franchise. We&apos;re your neighbors. We&apos;ve built our reputation one honest repair at a time — and we intend to keep it that way.
            </p>

            {/* American pride callout */}
            <div className="border border-jd-red/30 bg-jd-red/5 rounded-lg p-5 relative overflow-hidden">
              <div className="flag-stripe absolute top-0 left-0 right-0" />
              <p className="font-barlow text-lg text-jd-white tracking-wide pt-2">
                <span className="text-jd-red font-bold">American craftsmanship.</span>{' '}
                The kind your grandfather trusted — backed by modern diagnostic tech.
              </p>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group card-hover bg-jd-card border border-jd-border rounded-lg p-5"
              >
                <div className="text-3xl mb-3">{reason.icon}</div>
                <h3 className="font-barlow font-bold text-base tracking-wide text-jd-white mb-2 group-hover:text-jd-red transition-colors">
                  {reason.title}
                </h3>
                <p className="font-inter text-xs text-jd-gray leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
