import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

// Update to custom domain if/when one is added
const SITE_URL = 'https://jd-automotive.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "J&D's Automotive | Auto Repair & Custom Hotrods — Biloxi, MS",
    template: "%s | J&D's Automotive",
  },
  description: "J&D's Automotive in Biloxi, MS — Expert auto repair, water pumps, radiators, starters, alternators, and custom hotrod builds. Family owned. Call (228) 207-6655.",
  keywords: [
    'auto repair Biloxi MS',
    'mechanic Biloxi Mississippi',
    'water pump repair',
    'radiator repair Biloxi',
    'starter alternator repair',
    'custom hotrods Biloxi',
    'muscle car restoration Mississippi',
    'J&D Automotive',
    'Pass Rd auto repair',
    'car repair Gulf Coast',
  ],
  authors: [{ name: "J&D's Automotive" }],
  creator: "J&D's Automotive",
  publisher: "J&D's Automotive",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "J&D's Automotive | Built Tough. Fixed Right.",
    description: "Expert auto repair and custom hotrod builds in Biloxi, MS. Water pumps, radiators, starters, alternators. Family owned. (228) 207-6655.",
    type: 'website',
    url: SITE_URL,
    siteName: "J&D's Automotive",
    locale: 'en_US',
    images: [
      {
        url: '/IMG_1037.JPEG',
        width: 1200,
        height: 800,
        alt: "J&D's Automotive — Custom Hotrod Builds in Biloxi, MS",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "J&D's Automotive | Built Tough. Fixed Right.",
    description: "Expert auto repair and custom hotrod builds in Biloxi, MS. (228) 207-6655.",
    images: ['/IMG_1037.JPEG'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: '/logo.webp' }],
    apple: [{ url: '/logo.webp' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: "J&D's Automotive",
  description: 'Expert auto repair and custom hotrod builds in Biloxi, MS. Family owned and operated.',
  url: SITE_URL,
  telephone: '+12282076655',
  email: 'jdautomotive1017@gmail.com',
  image: `${SITE_URL}/logo.webp`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2381 Pass Rd',
    addressLocality: 'Biloxi',
    addressRegion: 'MS',
    postalCode: '39531',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.4058,
    longitude: -89.0685,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  hasMap: `https://www.google.com/maps/search/2381+Pass+Rd,+Biloxi,+MS+39531`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script src="https://booking.tekmetric.com/iframe/modal.js" strategy="afterInteractive" />
        <Script id="tekmetric-css" strategy="afterInteractive">{`
          var l = document.createElement('link');
          l.rel = 'stylesheet';
          l.href = 'https://booking.tekmetric.com/iframe/modal.css';
          document.head.appendChild(l);
        `}</Script>
      </body>
    </html>
  )
}
