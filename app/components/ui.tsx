import { Check } from 'lucide-react'
import React from 'react'

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-bold mb-6">{children}</h2>
}
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>
}
export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((p, i) => (
        <li key={i} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" />{p}</li>
      ))}
    </ul>
  )
}
export function Button({ children, variant='primary', className='', ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }) {
  const v = variant === 'primary' ? 'btn btn-primary' : 'btn btn-outline'
  return <button className={`${v} ${className}`} {...props}>{children}</button>
}
Delete ui.tsx
