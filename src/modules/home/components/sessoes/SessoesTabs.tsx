'use client'

import { useState } from 'react'
import AbaMusculacao from './AbaMusculacao'
import AbaLutas from './AbaLutas'
import AbaProfessores from './AbaProfessores'
import AbaEspaco from './AbaEspaco'

const ABAS = [
  { id: 'musculacao', label: 'Musculação', Conteudo: AbaMusculacao },
  { id: 'lutas', label: 'Lutas', Conteudo: AbaLutas },
  { id: 'professores', label: 'Professores', Conteudo: AbaProfessores },
  { id: 'espaco', label: 'Espaço', Conteudo: AbaEspaco },
] as const

export default function SessoesTabs() {
  const [abaAtiva, setAbaAtiva] = useState<(typeof ABAS)[number]['id']>('musculacao')
  const Conteudo = ABAS.find((a) => a.id === abaAtiva)!.Conteudo

  return (
    <section id="modalidades" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Conheça a Cia do Corpo</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl max-w-lg mb-10 tracking-tight">
          Três caminhos, um objetivo
        </h2>

        <div role="tablist" aria-label="Seções da Cia do Corpo" className="flex flex-wrap justify-center gap-2 mb-12">
          {ABAS.map((a) => (
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={abaAtiva === a.id}
              onClick={() => setAbaAtiva(a.id)}
              className={`font-label font-semibold uppercase text-sm tracking-wide px-5 py-2.5 border transition-colors cursor-pointer ${
                abaAtiva === a.id
                  ? 'border-cdc-accent bg-cdc-accent text-cdc-bg'
                  : 'border-cdc-border text-cdc-muted hover:border-cdc-accent hover:text-cdc-accent'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="w-full">
          <Conteudo />
        </div>
      </div>
    </section>
  )
}
