import { MetadataRoute } from 'next'

// Update to custom domain if/when one is added
const SITE_URL = 'https://jd-automotive.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
