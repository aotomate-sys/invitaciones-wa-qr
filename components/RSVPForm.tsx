'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function RSVPForm({ eventId }: { eventId: string }) {
  const [name, setName] = useState(''); const [guests, setGuests] = useState(1)
  const [menu, setMenu] = useState(''); const [status, setStatus] = useState<'Sí'|'No'|'Pendiente'>('Sí')
  const [loading, setLoading] = useState(false); const [ok, setOk] = useState<string | null>(null); const [err, setErr] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setOk(null); setErr(null)
    try {
      const { error } = await supabase.from('rsvps').insert({ event_id: eventId, name, guests, menu, status })
      if (error) throw error; setOk('¡Gracias! Tu confirmación fue registrada.'); setName(''); setGuests(1); setMenu(''); setStatus('Sí')
    } catch (e:any) { setErr(e.message || 'Error al guardar.') } finally { setLoading(false) }
  }

  return (
    <form onSubmit={submit} className="card p-4 md:p-6 space-y-3">
      <div className="text-lg font-semibold">Confirma tu asistencia</div>
      <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre completo" className="w-full rounded-xl border px-3 py-2" />
      <div className="grid grid-cols-2 gap-3">
        <div><label className="text-sm">Acompañantes</label><input type="number" min={0} value={guests} onChange={e=>setGuests(parseInt(e.target.value||'0'))} className="w-full rounded-xl border px-3 py-2"/></div>
        <div><label className="text-sm">Menú / Alergias</label><input value={menu} onChange={e=>setMenu(e.target.value)} placeholder="Ej. Pollo, sin nueces" className="w-full rounded-xl border px-3 py-2"/></div>
      </div>
      <div className="flex gap-2">{['Sí','No','Pendiente'].map(s=> (
        <button type="button" key={s} onClick={()=>setStatus(s as any)} className={`px-3 py-2 rounded-xl border ${status===s?'bg-rose-600 text-white border-rose-600':'bg-white'}`}>{s}</button>
      ))}</div>
      <button disabled={loading} className="btn btn-primary">{loading? 'Enviando...' : 'Confirmar'}</button>
      {ok && <div className="text-emerald-700 text-sm">{ok}</div>}
      {err && <div className="text-rose-700 text-sm">{err}</div>}
    </form>
  )
}
