// TROCAR: cards de citação individual (nome + nota + texto) entram quando
// o Pedro mandar prints ou o link do Google Meu Negócio com as avaliações
// reais que ele quer destacar — não inventar avaliação atribuída a
// cliente real. Por enquanto, CTA real linkando pra busca do Google Maps
// do próprio endereço já conhecido da academia.
const LINK_GOOGLE =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Cia do Corpo Divinópolis')

export default function Depoimentos() {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 px-5 border-b border-cdc-border bg-cdc-surface">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Avaliações</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl max-w-lg mb-6 tracking-tight">
          Quem treina, recomenda
        </h2>

        <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="#e3a62f">
              <path d="M10 1.5l2.47 5.5 5.98.55-4.53 4 1.35 5.9L10 14.9l-5.27 2.55 1.35-5.9-4.53-4 5.98-.55L10 1.5z" />
            </svg>
          ))}
        </div>

        <p className="font-body text-sm text-cdc-muted max-w-md mb-8">
          Avaliações reais de alunos no Google. Confira o perfil completo da academia.
        </p>

        <a
          href={LINK_GOOGLE}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cdc-border hover:border-cdc-accent hover:text-cdc-accent transition-colors font-label font-semibold uppercase tracking-wide text-sm px-7 py-4"
        >
          Ver avaliações no Google
        </a>
      </div>
    </section>
  )
}
