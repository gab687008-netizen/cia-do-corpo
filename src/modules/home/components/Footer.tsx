export default function Footer() {
  return (
    <footer className="border-t border-cdc-border px-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-display font-black uppercase text-sm tracking-tight">
          Cia do <span className="text-cdc-accent">Corpo</span>
        </p>
        <p className="font-body text-xs text-cdc-muted">© {new Date().getFullYear()} Cia do Corpo. Divinópolis/MG.</p>
      </div>
    </footer>
  )
}
