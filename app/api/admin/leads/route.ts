import { NextRequest, NextResponse } from 'next/server'
import { getLeads, updateLeadStatus, deleteLead } from '@/lib/storage'
import { getSession } from '@/lib/auth'

export async function GET() {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const leads = await getLeads()
  return NextResponse.json(leads)
}

export async function PATCH(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, status } = await req.json()
  await updateLeadStatus(id, status)
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: NextRequest) {
  if (!await getSession()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  await deleteLead(id)
  return NextResponse.json({ ok: true })
}
