
'use client'
import { useState } from 'react'
export default function AIHelper(){
  const [q,setQ]=useState(''); const [resp,setResp]=useState(null); const [loading,setLoading]=useState(false)
  async function ask(){ if(!q.trim()) return; setLoading(true); setResp(null); try{ const r=await fetch('/api/ai/qa',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q})}); const data=await r.json(); setResp(data) }catch(e){ setResp({answer:'Erreur lors de la requête. Réessayez.'}) } finally{ setLoading(false) } }
  return (<div className="border border-white/10 rounded-lg p-4 bg-black/30"><div className="flex gap-2"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ex: maison 4 chambres Steinfort, budget 900k, jardin, garage" className="flex-1 border border-white/10 rounded px-3 py-2 bg-black/40"/><button onClick={ask} className="btn btn-gold">{loading?'Analyse…':'Chercher'}</button></div>{resp?.answer?<div className="mt-3 text-sm whitespace-pre-wrap text-white/90">{resp.answer}</div>:null}{resp?.hits?.length?(<ul className="mt-3 space-y-2">{resp.hits.map(h=>(<li key={h.id} className="text-sm"><a className="text-mapa-gold underline" href={`/listings/${h.id}`}>{h.title}</a><span className="text-white/80"> — {h.location} · {h.beds} ch · {h.area} m²</span></li>))}</ul>):null}</div>)
}
