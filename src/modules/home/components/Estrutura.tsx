// TROCAR: as 5 fotos abaixo (banco de imagem Pexels) pelas fotos reais
// da academia — mesma pendência já marcada no projeto anterior.
const FOTOS = [
  { url: 'https://images.pexels.com/photos/4720777/pexels-photo-4720777.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Sala de musculação' },
  { url: 'https://images.pexels.com/photos/16833338/pexels-photo-16833338.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Tatame de jiu-jitsu' },
  { url: 'https://images.pexels.com/photos/5895866/pexels-photo-5895866.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Área de kickboxing com sacos de pancada' },
  { url: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1200', label: 'Equipamentos de treino funcional' },
  {
    url: 'https://images.pexels.com/photos/4720777/pexels-photo-4720777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    label: 'Área de pesos livres',
    posicao: '70% 40%',
  },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {FOTOS.map((foto, i) => (
            <div
              key={i}
              className={`h-48 sm:h-56 bg-cover bg-center border border-cdc-border ${i === 0 ? 'col-span-2 row-span-2 h-full min-h-[240px]' : ''}`}
              style={{ backgroundImage: `url('${foto.url}')`, backgroundPosition: foto.posicao }}
              role="img"
              aria-label={foto.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
