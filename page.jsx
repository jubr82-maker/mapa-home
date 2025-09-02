
import prisma from '../lib/db'
import ListingCard from '../components/ListingCard'
import SearchBar from '../components/SearchBar'
import AIHelper from '../components/AIHelper'
import { t } from '../lib/i18n'
export default async function Home(){
  const listings = await prisma.listing.findMany({ orderBy:{ createdAt:'desc' }, take:6 })
  return (
    <div className="space-y-10">
      <section className="hero rounded-2xl p-8 border border-white/10 bg-white/5">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight">{t('heroTitle')}</h1>
          <p className="text-white/80 mt-3">{t('heroSubtitle')}</p>
          <div className="mt-6 max-w-2xl"><SearchBar /></div>
          <div className="mt-6"><a href="/listings" className="btn btn-gold">{t('discover')}</a><a href="/admin/new" className="btn btn-outline ml-3">{t('publish')}</a></div>
        </div>
      </section>
      <section className="card p-6">
        <h2 className="text-xl font-semibold">{t('aiSearchTitle')}</h2>
        <p className="text-white/80 mb-4">{t('aiSearchSubtitle')}</p>
        <AIHelper />
      </section>
      <section>
        <div className="flex items-center justify-between mb-4"><h3 className="text-xl font-semibold">{t('newest')}</h3><a className="text-mapa-gold hover:underline" href="/listings">{t('viewAll')}</a></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{listings.map(l=><ListingCard key={l.id} listing={l} />)}</div>
      </section>
      <section className="card p-6"><h3 className="font-semibold text-lg mb-2">{t('offerTitle')}</h3><p className="text-white/80">{t('offerLine')}</p></section>
    </div>
  )
}
