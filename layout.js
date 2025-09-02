
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata = { title:'MAPA Home – Listings', description:'Real-estate listings with AI-powered search and copy.' }
export default function RootLayout({ children }){
  return (<html lang="fr"><body><Navbar /><main className="container py-10">{children}</main><Footer /></body></html>)
}
