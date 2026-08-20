import Carousel from '@/shared/components/Carousel'

const LINK_GOOGLE =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Cia do Corpo Divinópolis')

interface Avaliacao {
  nome: string
  tempo: string
  texto: string
}

// Transcritas dos prints reais do Google Meu Negócio da academia (enviados
// pelo Pedro em 2026-08-20) — só entraram aqui as avaliações com texto
// completo visível no print. Duas ficaram de fora por estarem cortadas
// com "... Mais" no Google, pra não completar a fala de alguém com texto
// que não vimos de verdade.
const AVALIACOES: Avaliacao[] = [
  {
    nome: 'Celia Faria Tavares Gontijo',
    tempo: '4 anos atrás',
    texto:
      'Ambiente aconchegante, ótimos aparelhos, atividades direcionadas para cada propósito, tenho lordose e depois da musculação não senti mais dores. Super recomendo.',
  },
  {
    nome: 'Biel Mello',
    tempo: '4 anos atrás',
    texto:
      'Academia top, lá é minha segunda casa kk, o atendimento é ótimo e tem excelentes profissionais capacitados para atendê-los!!!',
  },
  {
    nome: 'Flavio Roguinho',
    tempo: '4 anos atrás',
    texto:
      'A melhor academia que já frequentei. Tem 6 anos que estou lá praticando esportes e não troco por nada. Parabéns aí Anderson e toda a sua equipe, mega profissionais.',
  },
  {
    nome: 'Carlos Eduardo De Mendonça',
    tempo: '3 anos atrás',
    texto:
      'Local muito bom. Professores atenciosos. O proprietário é fenomenal, muito alegre, educado e muito responsável. Quem estiver precisando treinar pode fazer contato.',
  },
  {
    nome: 'Cassiano Ricardo Lemos de Camargos',
    tempo: 'Um mês atrás',
    texto: 'Excelente academia com excelente localização. Para quem malha sozinho é para quem treina com personal. Tem academia e treinos de luta.',
  },
  {
    nome: 'Vitor Silvestre',
    tempo: '2 meses atrás',
    texto: 'Ambiente aconchegante e familiar.',
  },
]

function CardAvaliacao({ nome, tempo, texto }: Avaliacao) {
  return (
    <div className="snap-start flex-none w-[270px] sm:w-[320px] border border-cdc-border bg-cdc-bg p-6 flex flex-col gap-4 text-left">
      <div className="flex items-center gap-3">
        <span
          className="w-11 h-11 rounded-full bg-cdc-accent-dim text-cdc-accent font-display text-base flex items-center justify-center flex-none"
          aria-hidden="true"
        >
          {nome.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="font-label font-semibold text-sm leading-tight truncate">{nome}</p>
          <p className="font-body text-xs text-cdc-muted">{tempo}</p>
        </div>
      </div>
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#e3a62f">
            <path d="M10 1.5l2.47 5.5 5.98.55-4.53 4 1.35 5.9L10 14.9l-5.27 2.55 1.35-5.9-4.53-4 5.98-.55L10 1.5z" />
          </svg>
        ))}
      </div>
      <p className="font-body text-sm text-cdc-muted leading-relaxed">{texto}</p>
    </div>
  )
}

export default function Depoimentos() {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 px-5 border-b border-cdc-border bg-cdc-surface">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Avaliações</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl max-w-lg mb-6 tracking-tight">
          Quem treina, recomenda
        </h2>

        <div className="flex items-center gap-1.5 mb-10" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="#e3a62f">
              <path d="M10 1.5l2.47 5.5 5.98.55-4.53 4 1.35 5.9L10 14.9l-5.27 2.55 1.35-5.9-4.53-4 5.98-.55L10 1.5z" />
            </svg>
          ))}
        </div>

        <Carousel>
          {AVALIACOES.map((a) => (
            <CardAvaliacao key={a.nome} {...a} />
          ))}
        </Carousel>

        <a
          href={LINK_GOOGLE}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cdc-border hover:border-cdc-accent hover:text-cdc-accent transition-colors font-label font-semibold uppercase tracking-wide text-sm px-7 py-4 mt-10"
        >
          Ver todas as avaliações no Google
        </a>
      </div>
    </section>
  )
}
