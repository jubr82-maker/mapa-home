
import { NextResponse } from 'next/server'
import prisma from '../../../lib/db'
export async function POST(req){
  const { action, data } = await req.json()
  if(action==='create'){
    try{
      const payload={
        title:String(data.title||'').trim(), price:Number(data.price||0), location:String(data.location||'').trim(),
        municipality:String(data.municipality||'').trim()||null, canton:String(data.canton||'').trim()||null, type:data.type||null,
        beds:Number(data.beds||0), baths:Number(data.baths||0), area:Number(data.area||0),
        floor:data.floor?Number(data.floor):null, parking:data.parking?Number(data.parking):null, energyRating:String(data.energyRating||'').trim()||null,
        latitude:data.latitude?Number(data.latitude):null, longitude:data.longitude?Number(data.longitude):null,
        images:String(data.images||'').split(',').map(s=>s.trim()).filter(Boolean), thumbnail:String(data.images||'').split(',').map(s=>s.trim()).filter(Boolean)[0]||null,
        features:String(data.features||'').split(',').map(s=>s.trim()).filter(Boolean), description:String(data.description||'').trim()||'Description à venir.'
      }
      const created=await prisma.listing.create({ data: payload }); return NextResponse.json({ id:created.id, message:'Annonce créée.' })
    }catch(e){ return NextResponse.json({ error:'Erreur lors de la création.' }, { status:400 }) }
  }
  return NextResponse.json({ error:'Action inconnue.' }, { status:400 })
}
