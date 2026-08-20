'use client'

import { useState } from 'react'
import { useQuiz } from '@/shared/lib/quiz-provider'
import { linkWhatsApp } from '@/shared/lib/whatsapp'

const PERGUNTAS = [
  { chave: 'objetivo', texto: 'Qual seu objetivo?', opcoes: ['Emagrecer', 'Ganhar massa', 'Aprender a lutar', 'Defesa pessoal'] },
  { chave: 'modalidade', texto: 'Prefere treinar sozinho ou em grupo/luta?', opcoes: ['Musculação (livre)', 'Kickboxing', 'Jiu-Jitsu'] },
  { chave: 'horario', texto: 'Melhor horário pra você?', opcoes: ['Manhã', 'Tarde', 'Noite'] },
] as const

type Respostas = Partial<Record<(typeof PERGUNTAS)[number]['chave'], string>>

function montarMensagem(respostas: Respostas): string {
  return `Oi! Fiz o quiz do site e quero começar: meu objetivo é ${respostas.objetivo}, tenho interesse em ${respostas.modalidade}, e prefiro treinar no período da ${respostas.horario}.`
}

export default function QuizModal() {
  const { aberto, fechar } = useQuiz()
  const [passo, setPasso] = useState(0)
  const [respostas, setRespostas] = useState<Respostas>({})

  if (!aberto) return null

  function reiniciarEFechar() {
    fechar()
    setPasso(0)
    setRespostas({})
  }

  function escolher(opcao: string) {
    setRespostas((r) => ({ ...r, [PERGUNTAS[passo].chave]: opcao }))
    setPasso((p) => p + 1)
  }

  const concluido = passo >= PERGUNTAS.length

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Fechar"
        onClick={reiniciarEFechar}
        className="absolute inset-0 bg-cdc-bg/85 cursor-pointer"
      />

      <div className="relative bg-cdc-surface border border-cdc-border max-w-md w-full p-7">
        <button
          type="button"
          aria-label="Fechar"
          onClick={reiniciarEFechar}
          className="absolute top-4 right-4 text-cdc-muted hover:text-cdc-text transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>

        {!concluido && (
          <div className="flex gap-1.5 mb-6">
            {PERGUNTAS.map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 ${i <= passo ? 'bg-cdc-accent' : 'bg-cdc-border'}`}
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {!concluido ? (
          <>
            <h3 className="font-display uppercase text-xl mb-5 tracking-tight pr-6">{PERGUNTAS[passo].texto}</h3>
            <div className="flex flex-col gap-2.5">
              {PERGUNTAS[passo].opcoes.map((opcao) => (
                <button
                  key={opcao}
                  type="button"
                  onClick={() => escolher(opcao)}
                  className="text-left font-label font-medium text-sm px-4 py-3 border border-cdc-border hover:border-cdc-accent hover:text-cdc-accent transition-colors cursor-pointer"
                >
                  {opcao}
                </button>
              ))}
            </div>
            {passo > 0 && (
              <button
                type="button"
                onClick={() => setPasso((p) => p - 1)}
                className="mt-5 font-body text-xs text-cdc-muted hover:text-cdc-text transition-colors cursor-pointer"
              >
                ← Voltar
              </button>
            )}
          </>
        ) : (
          <>
            <h3 className="font-display uppercase text-xl mb-3 tracking-tight">Prontinho!</h3>
            <p className="font-body text-sm text-cdc-muted mb-6 leading-relaxed">
              Já sabemos o que você procura. Clica abaixo pra falar com a gente no WhatsApp e agendar
              sua aula grátis.
            </p>
            <a
              href={linkWhatsApp(montarMensagem(respostas))}
              target="_blank"
              rel="noopener noreferrer"
              onClick={reiniciarEFechar}
              className="block text-center bg-cdc-accent hover:bg-cdc-accent-hover transition-colors text-cdc-bg font-label font-semibold uppercase tracking-wide text-sm px-6 py-3.5"
            >
              Chamar no WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  )
}
