const MODALIDADES = [
  {
    nome: 'Musculação',
    descricao: 'Treino de força com acompanhamento, do iniciante ao avançado. Equipamento completo pra hipertrofia, emagrecimento ou performance.',
    // Foto quadrada, não retrato — encaixa muito melhor no recorte
    // paisagem do card do que uma foto vertical (crop ficava descentralizado).
    foto: '/cia-do-corpo/fotos/aluna-musculacao-1.jpeg',
  },
  {
    nome: 'Kickboxing',
    descricao: 'Condicionamento físico e técnica de luta em pé. Queima calórica alta, defesa pessoal e disciplina em cada aula.',
    foto: '/cia-do-corpo/fotos/turma-kickboxing.jpeg',
  },
  {
    nome: 'Jiu-Jitsu',
    descricao: 'Luta agarrada, alavancas e técnica sobre força. Pra quem quer competir ou só aprender a se defender de verdade.',
    // TROCAR: banco de imagem (Pexels) por foto real do tatame — ainda não
    // recebemos foto de jiu-jitsu da academia, diferente das outras duas.
    foto: 'https://images.pexels.com/photos/16833338/pexels-photo-16833338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Modalidades() {
  return (
    <section id="modalidades" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Modalidades</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl max-w-lg mb-14 tracking-tight">
          Três caminhos, um objetivo
        </h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {MODALIDADES.map((m) => (
            <div key={m.nome} className="group border border-cdc-border bg-cdc-surface overflow-hidden">
              <div
                className="h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${m.foto}')` }}
                role="img"
                aria-label={m.nome}
              />
              <div className="p-6">
                <h3 className="font-display uppercase text-xl mb-2.5 tracking-tight">{m.nome}</h3>
                <p className="font-body text-sm text-cdc-muted leading-relaxed">{m.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
