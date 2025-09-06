import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TuMarca RSVP - Invitaciones digitales',
  description: 'Crea y comparte invitaciones digitales con RSVP, mapas, galería y más.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="es"><body>{children}</body></html>)
}
