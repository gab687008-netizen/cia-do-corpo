'use client'

import { useState } from 'react'
import { linkWhatsApp } from '@/shared/lib/whatsapp'

const LINKS = [
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#professor', label: 'Professor' },
  { href: '#horarios', label: 'Horários' },
  { href: '#planos', label: 'Planos' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cdc-bg/95 backdrop-blur border-b border-cdc-border">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, sem otimização de imagem */}
          <img src="/cia-do-corpo/logo.webp" alt="Academia Cia do Corpo" className="h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label uppercase tracking-wide font-medium text-sm text-cdc-muted hover:text-cdc-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cdc-accent hover:bg-cdc-accent-hover transition-colors text-cdc-bg font-label font-semibold uppercase tracking-wide text-sm px-5 py-2.5"
          >
            Aula grátis
          </a>
        </div>

        <button
          type="button"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((v) => !v)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
        >
          <span className={`block w-6 h-0.5 bg-cdc-text transition-transform ${menuAberto ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cdc-text transition-opacity ${menuAberto ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cdc-text transition-transform ${menuAberto ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuAberto && (
        <nav className="lg:hidden border-t border-cdc-border px-5 py-4 flex flex-col gap-3.5 bg-cdc-bg">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="font-label uppercase tracking-wide font-medium text-sm text-cdc-muted hover:text-cdc-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cdc-accent text-cdc-bg font-label font-semibold uppercase tracking-wide text-sm px-5 py-3 text-center mt-1"
          >
            Aula grátis
          </a>
        </nav>
      )}
    </header>
  )
}
