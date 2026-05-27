'use client'

import { openBooking } from '@/lib/tekmetric'

interface Props {
  className?: string
  children: React.ReactNode
  extraOnClick?: () => void
}

export default function BookingButton({ className, children, extraOnClick }: Props) {
  return (
    <button
      onClick={() => { extraOnClick?.(); openBooking() }}
      className={className}
    >
      {children}
    </button>
  )
}
