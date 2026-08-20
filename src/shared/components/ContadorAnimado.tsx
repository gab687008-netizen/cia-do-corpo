'use client'

import { useEffect, useState } from 'react'

const DURACAO_MS = 700
const PASSO_MS = 30

export default function ContadorAnimado({ valorFinal }: { valorFinal: number }) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    const reduzMovimento =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    // Com movimento reduzido, pula direto pro valor final no primeiro tick
    // em vez de interpolar — ainda passa pelo callback do interval (não
    // chama setState direto no corpo do efeito).
    const passos = reduzMovimento ? 1 : Math.max(1, Math.round(DURACAO_MS / PASSO_MS))
    let passoAtual = 0
    const id = setInterval(() => {
      passoAtual += 1
      setValor(Math.round((valorFinal * passoAtual) / passos))
      if (passoAtual >= passos) clearInterval(id)
    }, PASSO_MS)

    return () => clearInterval(id)
  }, [valorFinal])

  return <>{valor}</>
}
