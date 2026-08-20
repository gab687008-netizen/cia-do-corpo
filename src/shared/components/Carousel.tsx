'use client'

import { useEffect, useRef, useState } from 'react'

export default function Carousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [podeVoltar, setPodeVoltar] = useState(false)
  const [podeAvancar, setPodeAvancar] = useState(true)

  function atualizarSetas() {
    const el = trackRef.current
    if (!el) return
    setPodeVoltar(el.scrollLeft > 4)
    setPodeAvancar(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    atualizarSetas()
  }, [])

  function mover(direcao: 1 | -1) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direcao * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        onScroll={atualizarSetas}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => mover(-1)}
          disabled={!podeVoltar}
          className="w-10 h-10 border border-cdc-border hover:border-cdc-accent disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 4L6 10l6.5 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => mover(1)}
          disabled={!podeAvancar}
          className="w-10 h-10 border border-cdc-border hover:border-cdc-accent disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center justify-center cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7.5 4L14 10l-6.5 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
