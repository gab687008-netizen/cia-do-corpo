'use client'

import { useQuiz } from '@/shared/lib/quiz-provider'
import ContadorAnimado from '@/shared/components/ContadorAnimado'

// TROCAR: foto de banco de imagem (Pexels) por foto real da academia —
// mesma que já estava marcada como pendente no projeto anterior.
const FOTO_HERO = 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1600'

const STATS = [
  { valor: 25, label: 'anos de história' },
  { valor: 3, label: 'modalidades' },
  { valor: 6, label: 'dias por semana' },
]

export default function Hero() {
  const { abrir } = useQuiz()

  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-cdc-border bg-cdc-bg bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(10,10,11,.55), rgba(10,10,11,.92)), url('${FOTO_HERO}')` }}
    >
      <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 sm:pt-28 sm:pb-32 flex flex-col items-center text-center">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-5">25 anos em Divinópolis</p>
        <h1 className="font-display uppercase text-5xl sm:text-7xl leading-[0.92] max-w-3xl tracking-tight">
          Corpo forte.
          <br />
          <span className="text-cdc-accent">Mente forte.</span>
        </h1>
        <p className="font-body text-lg text-cdc-muted max-w-xl mt-6 leading-relaxed">
          Musculação, kickboxing e jiu-jitsu num só lugar. Professor experiente, estrutura completa
          e uma comunidade que treina há duas décadas e meia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <button
            type="button"
            onClick={abrir}
            className="bg-cdc-accent hover:bg-cdc-accent-hover hover:scale-[1.05] active:scale-[0.97] hover:shadow-lg hover:shadow-cdc-accent/25 transition-all duration-200 text-cdc-bg font-label font-semibold uppercase tracking-wide text-sm px-7 py-4 cursor-pointer"
          >
            Agendar aula grátis
          </button>
          <a
            href="#planos"
            className="border border-cdc-text/25 hover:border-cdc-accent hover:text-cdc-accent hover:scale-[1.05] active:scale-[0.97] transition-all duration-200 font-label font-semibold uppercase tracking-wide text-sm px-7 py-4"
          >
            Ver planos
          </a>
        </div>

        <dl className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl text-cdc-text">
                <ContadorAnimado valorFinal={stat.valor} />
              </dd>
              <dd className="font-label text-xs text-cdc-muted mt-1">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
