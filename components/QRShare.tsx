'use client'
import { useEffect, useState } from 'react'

export default function QRShare({ url }: { url?: string }) {
  const [href, setHref] = useState(url || '')
  useEffect(() => { if (!url) { setHref(window.location.href) } }, [url])
  const api = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(href || 'https://example.com')
  return (
    <div className="card p-5 text-center space-y-3">
      <div className="font-semibold">Escanea el código QR</div>
      <img src={api} alt="QR" className="mx-auto rounded-xl border" />
      <div className="text-xs text-gray-600 break-all">{href}</div>
      <button onClick={() => navigator.clipboard.writeText(href)} className="btn btn-outline" title="Copiar enlace">Copiar enlace</button>
    </div>
  )
}
