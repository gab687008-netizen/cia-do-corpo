const ITENS = [
  'Sala de musculação',
  'Tatame',
  'Área de luta',
  'Treino funcional',
  'Pesos livres',
]

export default function Estrutura() {
  return (
    <section id="estrutura" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-display font-bold uppercase text-sm tracking-[0.25em] text-cdc-accent mb-3">Estrutura</p>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl mb-5 leading-[0.95]">
            Tudo no mesmo
            <br />
            endereço
          </h2>
          <p className="font-body text-base text-cdc-muted leading-relaxed max-w-md">
            Musculação, tatame e área de luta no coração do Sidil. Sem precisar treinar em três lugares
            diferentes — a Cia do Corpo tem espaço pra cada modalidade.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-px bg-cdc-border">
          {ITENS.map((item, i) => (
            <li
              key={item}
              className={`bg-cdc-surface p-6 flex items-center gap-3 ${i === ITENS.length - 1 ? 'col-span-2' : ''}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cdc-accent flex-none" aria-hidden="true" />
              <span className="font-body font-semibold text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
