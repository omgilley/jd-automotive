'use client'

import { useState } from 'react'

const reviews = [
  {
    name: 'Mike R.',
    rating: 5,
    text: 'Brought my truck in for a water pump. They had it done same day, price was fair, and they explained everything. Won\'t go anywhere else.',
    service: 'Water Pump Replacement',
    initials: 'MR',
  },
  {
    name: 'Sarah T.',
    rating: 5,
    text: 'Car was overheating and I was scared it was going to be a huge bill. J&D diagnosed it fast — turned out to be the radiator. Done in a day, runs perfect.',
    service: 'Radiator Replacement',
    initials: 'ST',
  },
  {
    name: 'Carlos M.',
    rating: 5,
    text: 'Dead starter on a Monday morning. Called J&D and they squeezed me in. Running by noon. Straight shooters — they told me exactly what it would cost before starting.',
    service: 'Starter Replacement',
    initials: 'CM',
  },
  {
    name: 'Dave K.',
    rating: 5,
    text: 'Alternator went out on the highway. Had my truck towed here based on a friend\'s recommendation. Couldn\'t be happier. These guys know their stuff.',
    service: 'Alternator Replacement',
    initials: 'DK',
  },
  {
    name: 'Jessica L.',
    rating: 5,
    text: 'I\'ve been taking my vehicles here for years. Always honest, always on time, and the pricing is fair. This is what a local mechanic should be.',
    service: 'Regular Customer',
    initials: 'JL',
  },
  {
    name: 'Tommy B.',
    rating: 5,
    text: 'Asked them about building my dream rod and the conversation was incredible. These guys LOVE cars. The custom work shop is on another level.',
    service: 'Custom Hotrod Consultation',
    initials: 'TB',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-jd-border'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="reviews" className="relative py-20 md:py-28 bg-jd-dark overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jd-border to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(245,245,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge mx-auto mb-4">
            <span>⭐</span>
            <span>Customer Reviews</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-jd-white mb-4">
            WHAT OUR CUSTOMERS
            <br />
            <span className="red-chrome-text">SAY ABOUT US</span>
          </h2>
          <div className="section-divider" />
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
            </div>
            <span className="font-bebas text-3xl text-jd-white">4.9</span>
            <span className="font-barlow text-jd-gray tracking-wide">on Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`group card-hover bg-jd-card border rounded-lg p-6 flex flex-col transition-all duration-300 ${
                i === active ? 'border-jd-red/40' : 'border-jd-border'
              }`}
              onClick={() => setActive(i)}
            >
              {/* Quote mark */}
              <div className="font-bebas text-5xl text-jd-red/20 leading-none mb-2">&ldquo;</div>

              <p className="font-inter text-sm text-jd-silver leading-relaxed flex-1 mb-4">
                {review.text}
              </p>

              <div className="border-t border-jd-border pt-4 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-jd-red to-jd-red-dark flex items-center justify-center flex-shrink-0">
                  <span className="font-barlow font-bold text-white text-xs">{review.initials}</span>
                </div>
                <div>
                  <div className="font-barlow font-bold text-sm text-jd-white">{review.name}</div>
                  <div className="font-inter text-xs text-jd-gray">{review.service}</div>
                </div>
                <div className="ml-auto">
                  <StarRating rating={review.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-jd-border bg-jd-card hover:border-jd-red/40 transition-colors rounded-lg px-6 py-4 group"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-blue-600">G</span>
            </div>
            <span className="font-barlow text-sm tracking-wide text-jd-silver group-hover:text-jd-white transition-colors">
              See all our Google reviews →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
