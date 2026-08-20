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
    <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
      <div className="flex flex-col items-center text-center">
        <div className="relative aspect-[4/5] w-full max-w-[300px] mb-7">
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

        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Quem comanda o tatame</p>
        <h3 className="font-display uppercase text-2xl sm:text-3xl leading-[0.95] mb-6 tracking-tight">
          25 anos de Cia do Corpo
        </h3>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mb-7">
          {CREDENCIAIS_ANDERSON.map((c) => (
            <div key={c.label} className="text-center">
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

      <div className="w-full">
        <p className="font-label font-semibold uppercase text-sm tracking-wide text-cdc-muted mb-6 text-center">
          Também dão aula na Cia do Corpo
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
          {outros.map((p) => (
            <div key={p.nome} className="flex flex-col items-center text-center gap-2 w-28">
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

      <a
        href={linkWhatsApp('Olá! Vim pelo site e quero saber mais sobre o personal trainer.')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full overflow-hidden border border-cdc-accent bg-cdc-bg px-6 py-7 flex flex-col items-center text-center gap-3 transition-transform duration-300 hover:scale-[1.015]"
      >
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cdc-accent/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden="true"
        />
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-cdc-accent" aria-hidden="true">
          <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5 20c0-3.6 3.13-6.2 7-6.2s7 2.6 7 6.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
        <p className="font-display uppercase text-xl tracking-tight">Personal trainer</p>
        <p className="font-body text-sm text-cdc-muted max-w-sm">
          Quer treino individual, com atenção exclusiva do começo ao fim? A Cia do Corpo também
          oferece personal trainer.
        </p>
        <span className="font-label font-semibold uppercase text-xs tracking-wide text-cdc-accent flex items-center gap-1.5">
          Falar sobre personal trainer
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </div>
  )
}
