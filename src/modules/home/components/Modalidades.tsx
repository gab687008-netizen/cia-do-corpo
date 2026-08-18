const MODALIDADES = [
  {
    nome: 'Musculação',
    descricao: 'Treino de força com acompanhamento, do iniciante ao avançado. Equipamento completo pra hipertrofia, emagrecimento ou performance.',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 8v8M18 8v8M2 10v4M22 10v4M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: 'Kickboxing',
    descricao: 'Condicionamento físico e técnica de luta em pé. Queima calórica alta, defesa pessoal e disciplina em cada aula.',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    nome: 'Jiu-Jitsu',
    descricao: 'Luta agarrada, alavancas e técnica sobre força. Pra quem quer competir ou só aprender a se defender de verdade.',
    icone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

export default function Modalidades() {
  return (
    <section id="modalidades" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-display font-bold uppercase text-sm tracking-[0.25em] text-cdc-accent mb-3">Modalidades</p>
        <h2 className="font-display font-black uppercase text-3xl sm:text-4xl max-w-lg mb-14">
          Três caminhos, um objetivo
        </h2>

        <div className="grid sm:grid-cols-3 gap-px bg-cdc-border">
          {MODALIDADES.map((m) => (
            <div key={m.nome} className="bg-cdc-bg p-8">
              <div className="text-cdc-accent mb-5">{m.icone}</div>
              <h3 className="font-display font-bold uppercase text-xl mb-2.5">{m.nome}</h3>
              <p className="font-body text-sm text-cdc-muted leading-relaxed">{m.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
