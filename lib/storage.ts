import { put, del, list } from '@vercel/blob'

export interface Lead {
  id: string
  name: string
  phone: string
  email: string
  service: string
  message: string
  source: 'popup' | 'contact' | 'hotrod'
  status: 'new' | 'contacted' | 'closed'
  createdAt: string
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  createdAt: string
}

export interface SiteSettings {
  logoUrl?: string
}

function isBlobAvailable() {
  return !!process.env.BLOB_READ_WRITE_TOKEN
}

async function getJSON<T>(filename: string): Promise<T | null> {
  if (!isBlobAvailable()) return null
  try {
    const { blobs } = await list({ prefix: filename })
    if (blobs.length === 0) return null
    const latest = blobs.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0]
    const res = await fetch(latest.url, { cache: 'no-store' })
    return res.json() as Promise<T>
  } catch {
    return null
  }
}

async function putJSON<T>(filename: string, data: T): Promise<void> {
  if (!isBlobAvailable()) return
  const { blobs } = await list({ prefix: filename })
  if (blobs.length > 0) {
    await del(blobs.map(b => b.url))
  }
  await put(filename, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    contentType: 'application/json',
  })
}

// ─── Leads ───────────────────────────────────────────────────────────────────

export async function getLeads(): Promise<Lead[]> {
  return (await getJSON<Lead[]>('jd-leads.json')) ?? []
}

export async function saveLead(data: Omit<Lead, 'id' | 'status' | 'createdAt'>): Promise<Lead> {
  const leads = await getLeads()
  const lead: Lead = {
    ...data,
    id: crypto.randomUUID(),
    status: 'new',
    createdAt: new Date().toISOString(),
  }
  await putJSON('jd-leads.json', [lead, ...leads])
  return lead
}

export async function updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
  const leads = await getLeads()
  const updated = leads.map(l => (l.id === id ? { ...l, status } : l))
  await putJSON('jd-leads.json', updated)
}

export async function deleteLead(id: string): Promise<void> {
  const leads = await getLeads()
  await putJSON('jd-leads.json', leads.filter(l => l.id !== id))
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return (await getJSON<GalleryImage[]>('jd-gallery.json')) ?? []
}

export async function addGalleryImage(url: string, alt = ''): Promise<GalleryImage> {
  const images = await getGalleryImages()
  const image: GalleryImage = {
    id: crypto.randomUUID(),
    url,
    alt,
    createdAt: new Date().toISOString(),
  }
  await putJSON('jd-gallery.json', [image, ...images])
  return image
}

export async function removeGalleryImage(id: string): Promise<void> {
  const images = await getGalleryImages()
  const target = images.find(i => i.id === id)
  // Only delete from Blob if it's a Blob URL (not a local /public path)
  if (target && target.url.startsWith('https://')) {
    try { await del(target.url) } catch {}
  }
  await putJSON('jd-gallery.json', images.filter(i => i.id !== id))
}

export async function reorderGallery(ids: string[]): Promise<void> {
  const images = await getGalleryImages()
  const map = new Map(images.map(img => [img.id, img]))
  const reordered = ids.map(id => map.get(id)).filter(Boolean) as GalleryImage[]
  await putJSON('jd-gallery.json', reordered)
}

const ORIGINAL_IMAGES = [
  { url: '/IMG_1037.JPEG', alt: 'Custom hotrod build' },
  { url: '/IMG_1038.JPEG', alt: 'Custom street rod' },
  { url: '/IMG_1039.JPEG', alt: 'Pro touring build' },
  { url: '/IMG_1040.JPEG', alt: 'Show car build' },
  { url: '/IMG_1041.JPEG', alt: 'Rat rod build' },
  { url: '/IMG_1042.JPEG', alt: 'Custom engine build' },
  { url: '/IMG_1043.JPEG', alt: 'Hotrod restoration' },
  { url: '/IMG_1044.JPEG', alt: 'Custom build detail' },
  { url: '/IMG_1051.PNG', alt: 'Vehicle build' },
]

export async function seedOriginalImages(): Promise<void> {
  const seeded: GalleryImage[] = ORIGINAL_IMAGES.map(img => ({
    id: crypto.randomUUID(),
    url: img.url,
    alt: img.alt,
    createdAt: new Date().toISOString(),
  }))
  await putJSON('jd-gallery.json', seeded)
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export async function getSettings(): Promise<SiteSettings> {
  return (await getJSON<SiteSettings>('jd-settings.json')) ?? {}
}

export async function updateSettings(patch: Partial<SiteSettings>): Promise<void> {
  const current = await getSettings()
  await putJSON('jd-settings.json', { ...current, ...patch })
}
