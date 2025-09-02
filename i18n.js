
import { cookies } from 'next/headers'
export const SUPPORTED = ['fr','en','de','lb','pt']
export const dict = {
  fr:{brand:'MAPA Home',nav:{listings:'Annonces',add:'Ajouter',affordability:'Capacité d’emprunt',regulations:'Réglementations'},
      heroTitle:"L’immobilier en version premium propulsé par l’IA",
      heroSubtitle:"Recherchez, comparez et vendez mieux grâce à nos outils intelligents et une expertise de plus de 10 ans.",
      discover:"Découvrir les annonces", publish:"Publier un bien", aiSearchTitle:"Recherche assistée par IA",
      aiSearchSubtitle:"Décrivez votre besoin en langage naturel et laissez l’IA vous suggérer des biens.",
      newest:"Nouveautés", viewAll:"Voir tout", offerTitle:"Offre Défi Spéciale Rentrée",
      offerLine:"Mandat exclusif 30 jours · Commission 2% HT · Limité à 20 propriétaires jusqu’au 31/10/2025",
      filter:"Filtrer", tipBounds:"Astuce : zoomez/déplacez la carte pour filtrer par zone.", none:"Aucun bien ne correspond.", contact:"Contact", view:"Voir le bien"},
  en:{brand:'MAPA Home',nav:{listings:'Listings',add:'Add',affordability:'Affordability',regulations:'Regulations'},
      heroTitle:"Premium real estate, powered by AI", heroSubtitle:"Search, compare and sell smarter with intelligent tools and 10+ years of expertise.",
      discover:"Browse listings", publish:"Post a property", aiSearchTitle:"AI-assisted search", aiSearchSubtitle:"Describe your needs; AI suggests properties.",
      newest:"New arrivals", viewAll:"View all", offerTitle:"Back-to-School Challenge", offerLine:"30-day exclusive · 2% fee ex VAT · Limited to 20 owners until 31/10/2025",
      filter:"Filter", tipBounds:"Tip: move/zoom the map to filter by area.", none:"No properties match.", contact:"Contact", view:"View listing"},
  de:{brand:'MAPA Home',nav:{listings:'Inserate',add:'Hinzufügen',affordability:'Leistungsfähigkeit',regulations:'Vorschriften'},
      heroTitle:"Premium-Immobilien, angetrieben von KI", heroSubtitle:"Suchen, vergleichen und besser verkaufen mit intelligenten Tools und 10+ Jahren Erfahrung.",
      discover:"Inserate ansehen", publish:"Objekt veröffentlichen", aiSearchTitle:"KI-gestützte Suche", aiSearchSubtitle:"Beschreiben Sie Ihren Bedarf – KI schlägt Objekte vor.",
      newest:"Neuheiten", viewAll:"Alle ansehen", offerTitle:"Spezielle Herbst-Challenge", offerLine:"30 Tage Exklusivmandat · 2% exkl. MwSt. · bis 31.10.2025 (20 Eigentümer)",
      filter:"Filtern", tipBounds:"Tipp: Karte verschieben/zoomen zum Filtern.", none:"Keine passenden Objekte.", contact:"Kontakt", view:"Exposé ansehen"},
  lb:{brand:'MAPA Home',nav:{listings:'Annoncen',add:'Dobäisetzen',affordability:'Lounsfähegkeet',regulations:'Reglementer'},
      heroTitle:"Premium-Immobilien mat AI", heroSubtitle:"Sicht, vergläich a verkaaft méi schlau mat eise smarte Outilen.",
      discover:"Annoncen kucken", publish:"E Bien asetzen", aiSearchTitle:"AI-gescheit Sich", aiSearchSubtitle:"Beschreiw däi Besoin – d'AI mécht Virschléi.",
      newest:"Nei Offeren", viewAll:"Alles kucken", offerTitle:"Rentrée Défi Offer", offerLine:"30-Deeg Exklusivmandat · 2% Frais exkl. TVA · bis 31/10/2025 (20 Proprietären)",
      filter:"Filteren", tipBounds:"Tipp: zoom/verschib d'Kaart fir no Géigend ze filteren.", none:"Kee passenden Bien.", contact:"Kontakt", view:"Annonce kucken"},
  pt:{brand:'MAPA Home',nav:{listings:'Anúncios',add:'Adicionar',affordability:'Capacidade de empréstimo',regulations:'Regulamentos'},
      heroTitle:"Imobiliário premium com IA", heroSubtitle:"Pesquise, compare e venda melhor com ferramentas inteligentes.",
      discover:"Ver anúncios", publish:"Publicar imóvel", aiSearchTitle:"Pesquisa assistida por IA", aiSearchSubtitle:"Descreva o que procura e a IA sugere imóveis.",
      newest:"Novidades", viewAll:"Ver tudo", offerTitle:"Oferta Regresso às Aulas", offerLine:"Exclusivo 30 dias · 2% s/ IVA · até 31/10/2025 (20 proprietários)",
      filter:"Filtrar", tipBounds:"Dica: mova/aproxime o mapa para filtrar.", none:"Nenhum imóvel corresponde.", contact:"Contacto", view:"Ver imóvel"}
}
export function getLang(){ const ck=cookies(); const c=ck.get('lang')?.value||process.env.SITE_LOCALE||'fr'; return SUPPORTED.includes(c)?c:'fr' }
export function t(key){ const l=getLang(); return key.split('.').reduce((a,p)=>a?.[p], dict[l])||key }
