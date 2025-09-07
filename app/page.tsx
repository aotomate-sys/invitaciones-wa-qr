'use client'

import Link from 'next/link'

export default function Page() {
  const waNumber = '521234567890' // cámbialo por el tuyo
  const waText = encodeURIComponent('Hola, quiero mi invitación digital ✨')
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`

  return (
    <main style={{maxWidth: 960, margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu'}}>
      <h1 style={{fontSize: 40, fontWeight: 800, lineHeight: 1.1, marginBottom: 12}}>
        Crea y comparte <span style={{color:'#e11d48'}}>tu invitación</span> en minutos
      </h1>
      <p style={{fontSize: 18, color:'#4b5563', marginBottom: 16}}>
        RSVP, mapas, galería, música y más — listo para WhatsApp e impresión con QR.
      </p>
      <div style={{display:'flex', gap:12, flexWrap:'wrap', marginBottom: 24}}>
        <Link href="/demo/boda-ejemplo" style={{padding:'10px 14px', background:'#e11d48', color:'#fff', borderRadius:14, textDecoration:'none', fontWeight:600}}>
          Probar demo
        </Link>
        <Link href="/plantillas" style={{padding:'10px 14px', border:'1px solid #d1d5db', borderRadius:14, textDecoration:'none', fontWeight:600}}>
          Ver plantillas
        </Link>
        <a href={waUrl} target="_blank" style={{padding:'10px 14px', border:'1px solid #d1d5db', borderRadius:14, textDecoration:'none', fontWeight:600}}>
          WhatsApp
        </a>
      </div>
      <p style={{fontSize: 14, color:'#6b7280'}}>© 2025 TuMarca RSVP</p>
    </main>
  )
}
