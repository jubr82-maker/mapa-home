
import Link from 'next/link'
import { t } from '../lib/i18n'
export default function ListingCard({ listing }){
  return (
    <div className="card overflow-hidden hover:shadow-gold transition">
      <div className="aspect-[16/10] bg-black/40">
        {listing.thumbnail ? <img src={listing.thumbnail} alt={listing.title} className="w-full h-full object-cover" /> : null}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
        <p className="text-sm text-white/70 line-clamp-1">{listing.location}</p>
        <p className="mt-2 font-semibold text-mapa-gold">{new Intl.NumberFormat('fr-LU',{style:'currency',currency:'EUR'}).format(listing.price)}</p>
        <p className="text-sm text-white/80">{listing.beds} ch · {listing.baths} sdb · {listing.area} m²</p>
        <Link href={`/listings/${listing.id}`} className="inline-block mt-3 text-mapa-gold hover:underline">{t('view')}</Link>
      </div>
    </div>
  )
}
