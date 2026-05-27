import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SESSION_KEY = 'admin_session'

async function verifyToken(token: string): Promise<boolean> {
  const secret = process.env.ADMIN_SECRET || 'change-this-secret-in-env'
  const parts = token.split('.')
  if (parts.length < 2) return false
  const value = parts.slice(0, -1).join('.')
  const sig = parts[parts.length - 1]
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  const expected = await crypto.subtle.sign('HMAC', key, enc.encode(value))
  const expectedHex = Array.from(new Uint8Array(expected))
    .map(b => b.toString(16).padStart(2, '0')).join('')
  return expectedHex === sig
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the login page itself
  if (pathname === '/admin' || pathname === '/admin/') {
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get(SESSION_KEY)?.value
    if (!token || !await verifyToken(token)) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
