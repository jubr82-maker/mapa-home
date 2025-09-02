
'use client'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
const MapContainer = dynamic(()=>import('react-leaflet').then(m=>m.MapContainer),{ssr:false})
const TileLayer = dynamic(()=>import('react-leaflet').then(m=>m.TileLayer),{ssr:false})
const Marker = dynamic(()=>import('react-leaflet').then(m=>m.Marker),{ssr:false})
const Popup = dynamic(()=>import('react-leaflet').then(m=>m.Popup),{ssr:false})
const icon = new L.Icon({iconUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',iconRetinaUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',shadowUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',iconAnchor:[12,41]})
export default function PropertyMap({ listings=[], onBoundsChange }){
  const center=[49.815,6.129]
  function handleMove(map){ const b=map.getBounds(); onBoundsChange && onBoundsChange({minLat:b.getSouth(),maxLat:b.getNorth(),minLng:b.getWest(),maxLng:b.getEast()}) }
  return (
    <div className="h-[420px] card overflow-hidden">
      <MapContainer center={center} zoom={9} scrollWheelZoom className="h-full w-full" whenReady={e=>handleMove(e.target)} eventHandlers={{ moveend:(e)=>handleMove(e.target) }}>
        <TileLayer attribution="© OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {listings.filter(l=>l.latitude&&l.longitude).map(l=>(
          <Marker key={l.id} position={[l.latitude,l.longitude]} icon={icon}>
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{l.title}</div>
                <div>{l.location}</div>
                <div>{new Intl.NumberFormat('fr-LU',{style:'currency',currency:'EUR'}).format(l.price)}</div>
                <div className="mt-1"><a className="text-mapa-gold underline" href={`/listings/${l.id}`}>Voir le bien</a></div>
                <div className="mt-1"><a className="underline" target="_blank" href={`https://www.google.com/maps?q=${encodeURIComponent(l.latitude+','+l.longitude)}&layer=c&cbll=${l.latitude},${l.longitude}`} rel="noreferrer">Street View</a></div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
