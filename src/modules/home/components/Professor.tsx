const CREDENCIAIS = [
  { valor: '4º Dan', label: 'Kickboxing · CBKB' },
  { valor: '25 anos', label: 'à frente da academia' },
  { valor: '2', label: 'graduações: Ed. Física e Gestão' },
]

export default function Professor() {
  return (
    <section id="professor" className="py-20 sm:py-28 px-5 border-b border-cdc-border bg-cdc-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[320px_1fr] gap-10 md:gap-16 items-start">
        <div className="relative aspect-[4/5] max-w-[420px] mx-auto md:mx-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, sem otimização de imagem */}
          <img
            src="/cia-do-corpo/fotos/anderson-professor.jpeg"
            alt="Anderson Rodrigues, mestre de kickboxing faixa preta 4º Dan, de braços cruzados"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cdc-accent" aria-hidden="true" />
          <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cdc-accent" aria-hidden="true" />
          <p className="absolute bottom-4 left-4 font-label uppercase text-xs tracking-wide text-cdc-text bg-cdc-bg/80 px-3 py-2 leading-tight">
            Anderson Rodrigues
            <br />
            Mestre de Kickboxing
          </p>
        </div>

        <div>
          <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Quem comanda o tatame</p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl leading-[0.95] mb-5 tracking-tight">
            25 anos de
            <br />
            Cia do Corpo
          </h2>

          <p className="font-body text-base text-cdc-muted leading-relaxed max-w-xl mb-8">
            Fundada como uma academia de Kung Fu e ginástica feminina com 12 alunas, a Cia do Corpo cresceu
            até virar referência em luta e musculação no Sidil, sempre sob o mesmo comando técnico.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
            {CREDENCIAIS.map((c) => (
              <div key={c.label}>
                <p className="font-display text-2xl sm:text-3xl text-cdc-text">{c.valor}</p>
                <p className="font-body text-xs text-cdc-muted mt-1 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-base text-cdc-muted leading-relaxed max-w-xl">
            Pós-graduado em Políticas Públicas e Nutrição Esportiva, o professor acompanha de perto turmas
            de todas as idades, da musculação ao tatame de competição.
          </p>
        </div>
      </div>
    </section>
  )
}
