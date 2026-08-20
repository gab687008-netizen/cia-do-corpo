import { linkWhatsApp } from '@/shared/lib/whatsapp'
import { TURMAS } from '@/modules/home/data/turmas'

const CREDENCIAIS_ANDERSON = [
  { valor: '4º Dan', label: 'Kickboxing · CBKB' },
  { valor: '25 anos', label: 'à frente da academia' },
  { valor: 'Educação Física', label: 'graduação e formação técnica' },
]

// Anderson já tem card em destaque próprio — os demais nomes vêm daqui,
// derivados do quadro de horários (fonte única em data/turmas.ts) em vez
// de mantidos numa segunda lista solta que poderia sair de sincronia.
function professoresSecundarios(): { nome: string; leciona: string[] }[] {
  const nomes = new Set<string>()
  for (const t of TURMAS) {
    for (const nome of t.professor.split(' e ')) {
      if (nome !== 'Anderson') nomes.add(nome)
    }
  }
  return [...nomes].map((nome) => ({
    nome,
    leciona: [...new Set(TURMAS.filter((t) => t.professor.includes(nome)).map((t) => `${t.modalidade} · ${t.turma}`))],
  }))
}

export default function AbaProfessores() {
  const outros = professoresSecundarios()

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start text-left">
        <div className="relative aspect-[4/5] max-w-[360px] mx-auto md:mx-0">
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
          <h3 className="font-display uppercase text-2xl sm:text-3xl leading-[0.95] mb-5 tracking-tight">
            25 anos de
            <br />
            Cia do Corpo
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-6 max-w-lg">
            {CREDENCIAIS_ANDERSON.map((c) => (
              <div key={c.label}>
                <p className="font-display text-2xl sm:text-3xl text-cdc-text">{c.valor}</p>
                <p className="font-body text-xs text-cdc-muted mt-1 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-base text-cdc-muted leading-relaxed max-w-xl">
            Graduado em Educação Física, o professor Anderson está à frente da Cia do Corpo há 25
            anos, acompanhando de perto turmas de todas as idades, da musculação ao tatame de
            competição.
          </p>
        </div>
      </div>

      <div>
        <p className="font-label font-semibold uppercase text-sm tracking-wide text-cdc-muted mb-5 text-center">
          Também dão aula na Cia do Corpo
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {outros.map((p) => (
            <div key={p.nome} className="flex flex-col items-center text-center gap-2">
              <span
                className="w-16 h-16 rounded-full bg-cdc-accent-dim text-cdc-accent font-display text-xl flex items-center justify-center"
                aria-hidden="true"
              >
                {p.nome.charAt(0)}
              </span>
              <p className="font-label font-semibold text-sm">{p.nome}</p>
              <p className="font-body text-xs text-cdc-muted leading-snug">{p.leciona.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-cdc-border bg-cdc-surface p-6 text-center">
        <p className="font-body text-sm text-cdc-muted mb-3">
          Quer treino individual? A Cia do Corpo também tem personal trainer.
        </p>
        <a
          href={linkWhatsApp('Olá! Vim pelo site e quero saber mais sobre o personal trainer.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-label font-semibold uppercase text-xs tracking-wide text-cdc-accent hover:text-cdc-accent-hover transition-colors"
        >
          Falar sobre personal trainer →
        </a>
      </div>
    </div>
  )
}
