
'use client'
import { useEffect, useState } from 'react'
import { SUPPORTED } from '../lib/i18n'
export default function LanguageSwitcher(){
  const [lang,setLang]=useState('fr')
  useEffect(()=>{ const s=localStorage.getItem('lang')||document.documentElement.lang||'fr'; setLang(s); document.documentElement.lang=s },[])
  function change(v){ setLang(v); localStorage.setItem('lang',v); document.cookie='lang='+v+'; path=/; max-age=31536000'; location.reload() }
  return <select className="bg-black/40 border border-white/10 rounded px-2 py-1 text-sm" value={lang} onChange={e=>change(e.target.value)}>{SUPPORTED.map(l=><option key={l} value={l}>{l.toUpperCase()}</option>)}</select>
}
