'use client'

import { createContext, useContext, useMemo, useState } from 'react'

interface QuizContexto {
  aberto: boolean
  abrir: () => void
  fechar: () => void
}

const Contexto = createContext<QuizContexto | null>(null)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false)
  const valor = useMemo(() => ({ aberto, abrir: () => setAberto(true), fechar: () => setAberto(false) }), [aberto])

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>
}

export function useQuiz(): QuizContexto {
  const contexto = useContext(Contexto)
  if (!contexto) throw new Error('useQuiz precisa estar dentro de um QuizProvider')
  return contexto
}
