import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "J&D's Automotive | Auto Repair & Custom Hotrods",
  description: "J&D's Automotive — Expert auto repair, water pumps, radiators, starters, alternators, and custom hotrod builds. Family owned, built tough, fixed right.",
  keywords: "auto repair, mechanic, water pump, radiator, starter, alternator, custom hotrods, automotive",
  openGraph: {
    title: "J&D's Automotive | Built Tough. Fixed Right.",
    description: "Expert auto repair and custom hotrod builds. Specializing in water pumps, radiators, starters, and alternators.",
    type: 'website',
  },
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
