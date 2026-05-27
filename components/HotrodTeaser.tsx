import Image from 'next/image'
import Link from 'next/link'

export default function HotrodTeaser() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0000] via-[#1A0000] to-[#0D0000]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(204, 20, 20, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204, 20, 20, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Large glow orbs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-jd-red/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-jd-red/8 blur-[100px] pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-red/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Small tag */}
        <div className="badge mx-auto mb-6">
          <span>🔥</span>
          <span>Custom Builds</span>
        </div>

        {/* Headline */}
        <h2
          className="font-bebas text-6xl md:text-8xl lg:text-[9rem] tracking-wider leading-none mb-6"
          style={{ textShadow: '0 0 60px rgba(204, 20, 20, 0.3)' }}
        >
          <span className="text-jd-white">WE ALSO BUILD</span>
          <br />
          <span className="red-chrome-text" style={{ filter: 'drop-shadow(0 0 30px rgba(204,20,20,0.6))' }}>
            LEGENDS.
          </span>
        </h2>

        <div className="section-divider mx-auto mb-8" />

        <p className="font-barlow text-xl md:text-2xl text-jd-silver tracking-wide max-w-3xl mx-auto mb-4 leading-relaxed">
          Beyond the everyday repair work lives our passion — custom hotrods, muscle car restorations, and one-of-a-kind builds crafted by hand.
        </p>

        <p className="font-barlow text-lg text-jd-red/80 tracking-widest uppercase mb-10">
          ✦ Show Cars ✦ Street Rods ✦ Pro Builds ✦ Full Restorations ✦
        </p>

        {/* Photo strip */}
        <div className="grid grid-cols-3 gap-3 mb-12 max-w-4xl mx-auto">
          {[
            { src: '/IMG_1043.JPEG', alt: 'Custom hotrod build by J&D Automotive' },
            { src: '/IMG_1044.JPEG', alt: 'Muscle car restoration by J&D Automotive' },
            { src: '/IMG_1037.JPEG', alt: 'Custom build at J&D Automotive Biloxi' },
          ].map((img, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🔥', title: 'Custom Fabrication', desc: 'One-off parts, custom metalwork, and fabrication from scratch.' },
            { icon: '⚙️', title: 'Engine Builds', desc: 'High-performance engine builds for the street or the strip.' },
            { icon: '🎨', title: 'Full Restorations', desc: 'Frame-off resto or driver-quality restorations done right.' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-black/40 border border-jd-red/20 hover:border-jd-red/50 rounded-lg p-6 transition-all duration-300 hover:bg-black/60"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bebas text-2xl tracking-wider text-jd-white mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-jd-gray">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/hotrods" className="btn-primary text-lg py-4 px-10 glow-red inline-flex">
          🔥 See Our Builds &amp; Get a Custom Quote
        </Link>

        <p className="font-barlow text-sm text-jd-gray/60 tracking-widest uppercase mt-6">
          Limited build slots available — inquire early
        </p>
      </div>
    </section>
  )
}
