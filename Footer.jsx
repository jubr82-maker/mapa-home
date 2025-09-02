
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 text-sm text-white/80">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} MAPA Home. Tous droits réservés.</p>
          <p>Contact · admin@mapagroup.org · +352 691 620 127</p>
        </div>
      </div>
    </footer>
  )
}
