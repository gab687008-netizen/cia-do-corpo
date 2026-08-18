import { linkWhatsApp } from '@/shared/lib/whatsapp'

// CONFIRMAR: valores de referência (mesmos já usados no site antigo e no
// repositório anterior, nenhum dos dois confirmado com a academia). Trocar
// pelo valor real antes do lançamento oficial.
const PLANOS = [
  {
    nome: 'Musculação',
    preco: 99,
    destaque: false,
    itens: ['Acesso livre seg–sáb', 'Acompanhamento de professor'],
  },
  {
    nome: 'Musculação + 1 luta',
    preco: 149,
    destaque: true,
    itens: ['Tudo do plano Musculação', 'Escolha kickboxing ou jiu-jitsu', 'Uma turma de luta por semana'],
  },
  {
    nome: 'Completo',
    preco: 189,
    destaque: false,
    itens: ['Musculação liberada', 'Kickboxing sem limite', 'Jiu-Jitsu sem limite'],
  },
]

function mensagemPlano(nome: string): string {
  return `Olá! Vim pelo site e quero saber mais sobre o plano ${nome}.`
}

export default function Planos() {
  return (
    <section id="planos" className="py-20 sm:py-28 px-5 border-b border-cdc-border bg-cdc-surface">
      <div className="max-w-6xl mx-auto">
        <p className="font-display font-bold uppercase text-sm tracking-[0.25em] text-cdc-accent mb-3">Planos</p>
        <h2 className="font-display font-black uppercase text-3xl sm:text-4xl max-w-lg mb-14">
          Comece sem enrolação
        </h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {PLANOS.map((plano) => (
            <div
              key={plano.nome}
              className={`flex flex-col p-7 border ${
                plano.destaque ? 'border-cdc-accent bg-cdc-bg relative' : 'border-cdc-border bg-cdc-bg'
              }`}
            >
              {plano.destaque && (
                <span className="absolute -top-3 left-7 bg-cdc-accent text-white font-display font-bold uppercase text-[11px] tracking-wide px-3 py-1">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-display font-bold uppercase text-lg mb-1">{plano.nome}</h3>
              <p className="mb-6">
                <span className="font-display font-black text-4xl">R${plano.preco}</span>
                <span className="font-body text-sm text-cdc-muted">/mês</span>
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plano.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="flex-none mt-0.5 text-cdc-accent" aria-hidden="true">
                      <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body text-sm text-cdc-text">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={linkWhatsApp(mensagemPlano(plano.nome))}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center font-display font-bold uppercase text-sm tracking-wide px-5 py-3.5 transition-colors ${
                  plano.destaque
                    ? 'bg-cdc-accent hover:bg-cdc-accent-hover text-white'
                    : 'border border-cdc-border hover:border-cdc-text/40 text-cdc-text'
                }`}
              >
                Quero esse plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
