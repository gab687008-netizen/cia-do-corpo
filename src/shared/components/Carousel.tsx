'use client'

import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react'

const COPIAS = 3

// Carrossel sem seta: a pessoa arrasta (touch nativo no mobile, ponteiro
// no desktop) e nunca chega ao fim de verdade — os itens são triplicados
// e, sempre que o scroll se aproxima de uma ponta, pula sem transição pro
// mesmo ponto da cópia do meio, criando a sensação de rolagem infinita.
//
// Recebe `children` (não uma função de render) de propósito: o chamador
// normalmente é um Server Component, e passar uma função pra um Client
// Component quebra o build (função não é serializável através dessa
// fronteira) — JSX já renderizado, sim.
export default function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const arrastando = useRef(false)
  const inicioX = useRef(0)
  const inicioScroll = useRef(0)
  const moveu = useRef(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollLeft = el.scrollWidth / COPIAS
  }, [])

  function corrigirLoop() {
    const el = trackRef.current
    if (!el) return
    const umTerco = el.scrollWidth / COPIAS
    if (el.scrollLeft < umTerco * 0.5) el.scrollLeft += umTerco
    else if (el.scrollLeft > umTerco * 1.5) el.scrollLeft -= umTerco
  }

  function aoPressionar(e: React.PointerEvent<HTMLDivElement>) {
    const el = trackRef.current
    if (!el || e.pointerType === 'touch') return
    arrastando.current = true
    moveu.current = false
    inicioX.current = e.clientX
    inicioScroll.current = el.scrollLeft
    el.setPointerCapture(e.pointerId)
  }

  function aoMover(e: React.PointerEvent<HTMLDivElement>) {
    const el = trackRef.current
    if (!arrastando.current || !el) return
    const delta = e.clientX - inicioX.current
    if (Math.abs(delta) > 4) moveu.current = true
    el.scrollLeft = inicioScroll.current - delta
  }

  function aoSoltar() {
    arrastando.current = false
  }

  function aoClicarCapturando(e: React.MouseEvent<HTMLDivElement>) {
    if (moveu.current) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const itens = Children.toArray(children)

  return (
    <div
      ref={trackRef}
      onScroll={corrigirLoop}
      onPointerDown={aoPressionar}
      onPointerMove={aoMover}
      onPointerUp={aoSoltar}
      onPointerLeave={aoSoltar}
      onClickCapture={aoClicarCapturando}
      className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {Array.from({ length: COPIAS }).flatMap((_, copia) =>
        itens.map((item, i) => (isValidElement(item) ? cloneElement(item, { key: `${copia}-${i}` }) : item)),
      )}
    </div>
  )
}
