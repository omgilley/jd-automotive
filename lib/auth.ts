import { cookies } from 'next/headers'

const SESSION_KEY = 'admin_session'
const SESSION_VALUE = 'authenticated'

function getSecret() {
  return process.env.ADMIN_SECRET || 'change-this-secret-in-env'
}

async function signValue(value: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(value))
  const hex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('')
  return `${value}.${hex}`
}

async function verifyToken(token: string): Promise<boolean> {
  const parts = token.split('.')
  if (parts.length < 2) return false
  const value = parts.slice(0, -1).join('.')
  const sig = parts[parts.length - 1]
  const expected = await signValue(value)
  const expectedSig = expected.split('.').pop() ?? ''
  return expectedSig === sig
}

export async function createSessionCookie(): Promise<string> {
  return signValue(SESSION_VALUE)
}

export { verifyToken, SESSION_KEY }

export async function getSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_KEY)?.value
  if (!token) return false
  return verifyToken(token)
}
