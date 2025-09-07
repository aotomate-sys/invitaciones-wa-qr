import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Saber si está configurado o no
export const hasSupabase = Boolean(url && key)

// Exporta el cliente solo si hay credenciales, sino deja null
export const supabase = hasSupabase
  ? createClient(url as string, key as string)
  : null as any
