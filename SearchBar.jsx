
'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { t } from '../lib/i18n'
export default function SearchBar(){
  const [q,setQ]=useState(''); const router=useRouter()
  return (<div className="flex gap-2"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ville, nombre de chambres, budget…" className="flex-1 border border-white/10 rounded px-3 py-2 bg-black/40"/><button onClick={()=>router.push(`/listings?query=${encodeURIComponent(q)}`)} className="btn btn-gold">{t('nav.listings')}</button></div>)
}
