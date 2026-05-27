export default function TrustBar() {
  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '5K+', label: 'Happy Customers' },
    { value: '4.9★', label: 'Google Rating' },
    { value: '100%', label: 'Satisfaction Goal' },
  ]

  return (
    <section className="relative py-0 border-y border-jd-border overflow-hidden">
      {/* Red gradient bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-jd-red-dark/20 via-jd-red/10 to-jd-red-dark/20" />
      <div className="absolute inset-0 metal-shine opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-jd-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-6 md:py-8 px-4 text-center"
            >
              <div className="font-bebas text-4xl md:text-5xl text-jd-red leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-barlow text-xs md:text-sm tracking-[0.15em] text-jd-silver uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* BBB Accreditation */}
        <div className="border-t border-jd-border flex items-center justify-center gap-4 py-4">
          <span className="font-barlow text-xs tracking-widest text-jd-gray uppercase">Accredited Business</span>
          <a
            href="https://www.bbb.org/us/ms/biloxi/profile/auto-repairs/j-ds-automotive-llc-0523-235903086/#sealclick"
            target="_blank"
            rel="nofollow noopener noreferrer"
            title="J&D's Automotive BBB Business Review"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://seal-ms.bbb.org/seals/black-seal-200-42-whitetxt-bbb-235903086.png"
              alt="BBB Accredited Business — J&D's Automotive"
              style={{ height: 42, width: 'auto', border: 0 }}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
