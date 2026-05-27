'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { Lead } from '@/lib/storage'

type Filter = 'all' | 'new' | 'contacted' | 'closed'

const statusColors: Record<string, string> = {
  new: 'bg-jd-red/20 text-jd-red border-jd-red/40',
  contacted: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  closed: 'bg-green-500/20 text-green-400 border-green-500/40',
}

const sourceLabels: Record<string, string> = {
  popup: '🎯 Popup',
  contact: '📋 Contact',
  hotrod: '🔥 Hot Rod',
}

const nextStatus: Record<string, Lead['status']> = {
  new: 'contacted',
  contacted: 'closed',
  closed: 'new',
}

function AdminNav() {
  const router = useRouter()
  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/admin')
  }
  return (
    <nav className="bg-black border-b border-jd-border sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bebas text-lg tracking-widest text-jd-white">J&amp;D Admin</span>
          <div className="hidden sm:flex items-center gap-4">
            <a href="/admin/leads" className="font-barlow text-sm tracking-wide text-jd-red uppercase">Leads</a>
            <a href="/admin/gallery" className="font-barlow text-sm tracking-wide text-jd-gray hover:text-jd-white uppercase transition-colors">Gallery</a>
            <a href="/admin/settings" className="font-barlow text-sm tracking-wide text-jd-gray hover:text-jd-white uppercase transition-colors">Settings</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="font-barlow text-xs text-jd-gray hover:text-jd-white uppercase transition-colors hidden sm:block">View Site →</a>
          <button onClick={logout} className="font-barlow text-xs tracking-wide text-jd-gray hover:text-jd-red uppercase transition-colors">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [loading, setLoading] = useState(true)

  const fetchLeads = useCallback(async () => {
    const res = await fetch('/api/admin/leads')
    if (res.ok) setLeads(await res.json())
    setLoading(false)
  }, [])

  useEffect(() => { fetchLeads() }, [fetchLeads])

  const cycleStatus = async (lead: Lead) => {
    const newStatus = nextStatus[lead.status]
    setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: newStatus } : l))
    await fetch('/api/admin/leads', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: lead.id, status: newStatus }),
    })
  }

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead?')) return
    setLeads(prev => prev.filter(l => l.id !== id))
    await fetch('/api/admin/leads', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter)
  const counts = {
    all: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    closed: leads.filter(l => l.status === 'closed').length,
  }

  return (
    <div className="min-h-screen bg-jd-black">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-bebas text-4xl tracking-wider text-jd-white">ALL LEADS</h1>
            <p className="font-barlow text-sm text-jd-gray tracking-wide">{leads.length} total submissions</p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(['all', 'new', 'contacted', 'closed'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-barlow text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all ${
                filter === f
                  ? 'bg-jd-red border-jd-red text-white'
                  : 'border-jd-border text-jd-gray hover:border-jd-red/50 hover:text-jd-white'
              }`}
            >
              {f} ({counts[f]})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-jd-gray">Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-jd-card border border-jd-border rounded-xl">
            <div className="text-4xl mb-3">📋</div>
            <p className="font-barlow text-jd-gray tracking-wide">No {filter === 'all' ? '' : filter} leads yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(lead => (
              <div key={lead.id} className="bg-jd-card border border-jd-border rounded-lg p-4 hover:border-jd-red/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bebas text-xl tracking-wide text-jd-white">{lead.name}</span>
                      <span className={`font-barlow text-xs px-2 py-0.5 rounded border tracking-widest uppercase ${statusColors[lead.status]}`}>
                        {lead.status}
                      </span>
                      <span className="font-barlow text-xs text-jd-gray/60">{sourceLabels[lead.source] ?? lead.source}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                      <a href={`tel:${lead.phone}`} className="font-barlow text-sm text-jd-silver hover:text-jd-red transition-colors">📞 {lead.phone}</a>
                      <a href={`mailto:${lead.email}`} className="font-barlow text-sm text-jd-silver hover:text-jd-red transition-colors">✉️ {lead.email}</a>
                    </div>
                    {lead.service && (
                      <p className="font-inter text-xs text-jd-gray">
                        <span className="text-jd-gray/50">Service: </span>{lead.service}
                      </p>
                    )}
                    {lead.message && (
                      <p className="font-inter text-xs text-jd-gray mt-1 italic">
                        &ldquo;{lead.message.slice(0, 120)}{lead.message.length > 120 ? '…' : ''}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col gap-2 flex-shrink-0">
                    <p className="font-inter text-xs text-jd-gray/40 hidden sm:block text-right">
                      {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <button
                      onClick={() => cycleStatus(lead)}
                      className="font-barlow text-xs tracking-widest uppercase px-3 py-1.5 border border-jd-border hover:border-jd-red/50 rounded text-jd-gray hover:text-jd-white transition-all"
                    >
                      Mark {nextStatus[lead.status]}
                    </button>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="font-barlow text-xs tracking-widest uppercase px-3 py-1.5 border border-jd-border hover:border-red-500/50 rounded text-jd-gray hover:text-red-400 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
