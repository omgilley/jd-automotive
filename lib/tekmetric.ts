export const TEKMETRIC_ID = '8e9b140b-6e56-49a9-ae32-380693734bc8'

export function openBooking() {
  if (typeof window === 'undefined') return

  const tryOpen = () => {
    if ((window as any).onShowBooking) {
      ;(window as any).onShowBooking(TEKMETRIC_ID)
      return true
    }
    return false
  }

  if (tryOpen()) return

  // Script still loading — poll every 100ms for up to 5s
  const start = Date.now()
  const id = setInterval(() => {
    if (tryOpen() || Date.now() - start > 5000) clearInterval(id)
  }, 100)
}
