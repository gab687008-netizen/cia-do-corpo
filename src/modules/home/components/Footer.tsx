export default function Footer() {
  return (
    <footer className="border-t border-cdc-border px-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, sem otimização de imagem */}
        <img src="/cia-do-corpo/logo.webp" alt="Academia Cia do Corpo" className="h-9 w-auto opacity-90" />
        <p className="font-body text-xs text-cdc-muted">© {new Date().getFullYear()} Cia do Corpo. Divinópolis/MG.</p>
      </div>
    </footer>
  )
}
