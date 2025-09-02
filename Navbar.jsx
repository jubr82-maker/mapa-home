
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { t } from '../lib/i18n'
export default function Navbar(){
  return (
    <header className="border-b border-white/10 bg-black/60 backdrop-blur sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="MAPA Home" className="h-7 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/listings" className="hover:text-mapa-gold">{t('nav.listings')}</Link>
          <Link href="/tools/affordability" className="hover:text-mapa-gold">{t('nav.affordability')}</Link>
          <Link href="/regulations" className="hover:text-mapa-gold">{t('nav.regulations')}</Link>
          <Link href="/admin/new" className="hover:text-mapa-gold">{t('nav.add')}</Link>
          <Link href="/contact" className="hover:text-mapa-gold">Contact</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
