const CREDENCIAIS = [
  '4º Dan em Kickboxing — Confederação Brasileira de Kickboxing',
  '25 anos à frente da Cia do Corpo',
  '2 graduações: Educação Física e Gestão',
  'Pós-graduação em Políticas Públicas e Nutrição Esportiva',
]

export default function Professor() {
  return (
    <section id="professor" className="py-20 sm:py-28 px-5 border-b border-cdc-border bg-cdc-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
        <div>
          <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Professor</p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[0.95] tracking-tight">
            Anderson
            <br />
            Rodrigues
          </h2>
        </div>

        <div>
          <p className="font-body text-base text-cdc-muted leading-relaxed max-w-xl mb-8">
            Fundador e instrutor-chefe da Cia do Corpo há 25 anos. Formação técnica e acadêmica que une o
            que funciona no tatame com o que a ciência do esporte comprova — pra treinar com segurança e
            resultado de verdade.
          </p>

          <ul className="flex flex-col gap-3.5">
            {CREDENCIAIS.map((credencial) => (
              <li key={credencial} className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-none mt-0.5 text-cdc-accent" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-body text-sm text-cdc-text">{credencial}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
