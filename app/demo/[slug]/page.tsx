import RSVPForm from '@/components/RSVPForm'
import QRShare from '@/components/QRShare'
import Link from 'next/link'
import { MapPin, Calendar } from 'lucide-react'

export default function DemoPage({ params }: { params: { slug: string }}) {
  const event = {
    id: 'demo-boda-001',
    title: 'Boda de Ana & Luis',
    date: 'Sábado 25 de Octubre, 2025 — 5:00 PM',
    venue: 'Hacienda Santa Rosa, CDMX',
    maps: 'https://maps.google.com',
    gallery: [1,2,3]
  }
  return (
    <main className="container py-10 space-y-8">
      <header className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">{event.title}</h1>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center text-gray-600">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {event.date}</div>
          <span className="hidden md:inline">•</span>
          <Link href={event.maps} className="flex items-center gap-2 underline">
            <MapPin className="h-4 w-4" /> {event.venue}
          </Link>
        </div>
      </header>

      <section className="aspect-[16/9] rounded-3xl bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
        <div className="text-2xl md:text-3xl font-semibold">Portada de tu invitación</div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {['Ceremonia 5:00 PM','Recepción 7:00 PM','Fiesta 9:00 PM'].map((t,i)=>(
          <div key={i} className="card p-5">
            <div className="font-semibold">{t}</div>
            <div className="text-sm text-gray-600">Detalles opcionales, dress code, etc.</div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-4 items-start">
        <RSVPForm eventId={event.id} />
        <QRShare />
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {event.gallery.map((g,i)=>(
          <div key={i} className="aspect-[9/16] rounded-2xl bg-gray-100 flex items-center justify-center">
            Foto {i+1}
          </div>
        ))}
      </section>

      <footer className="py-10 text-center text-sm text-gray-600">
        Comparte este enlace por WhatsApp o con el código QR
      </footer>
    </main>
  )
}
