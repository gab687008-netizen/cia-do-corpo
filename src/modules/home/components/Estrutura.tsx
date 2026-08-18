// TROCAR: as fotos marcadas com pexels.com abaixo são de banco de imagem —
// 3 das 5 já são fotos reais da academia (recebidas da equipe), as
// outras duas (jiu-jitsu e treino funcional) seguem pendentes.
const FOTOS = [
  { url: '/cia-do-corpo/fotos/turma-kickboxing.jpeg', label: 'Turma de kickboxing treinando' },
  { url: '/cia-do-corpo/fotos/aluna-musculacao-2.jpeg', label: 'Aluna na área de musculação' },
  { url: 'https://images.pexels.com/photos/16833338/pexels-photo-16833338.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Tatame de jiu-jitsu' },
  { url: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Equipamentos de treino funcional' },
  { url: '/cia-do-corpo/fotos/aluna-musculacao-1.jpeg', label: 'Aluna na área de musculação' },
]

export default function Estrutura() {
  return (
    <section id="estrutura" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Estrutura</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl mb-5 max-w-lg tracking-tight">
          Tudo no mesmo endereço
        </h2>
        <p className="font-body text-base text-cdc-muted leading-relaxed max-w-md mb-10">
          Musculação, tatame e área de luta no coração do Sidil. Sem precisar treinar em três lugares
          diferentes — a Cia do Corpo tem espaço pra cada modalidade.
        </p>

        {/* Grid uniforme (sem célula com tamanho diferente das outras) —
            evita o "buraco" que aparecia quando uma foto tentava ocupar
            2 linhas sem as vizinhas terem a mesma altura total. */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {FOTOS.map((foto) => (
            <div
              key={foto.url}
              className="aspect-[4/5] bg-cover bg-center border border-cdc-border"
              style={{ backgroundImage: `url('${foto.url}')` }}
              role="img"
              aria-label={foto.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
