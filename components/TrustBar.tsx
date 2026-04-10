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
          {stats.map((stat, i) => (
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
      </div>
    </section>
  )
}
