import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Planos from '@/modules/home/components/Planos'

describe('Planos', () => {
  it('mostra os três planos com preço certo', () => {
    render(<Planos />)

    expect(screen.getByText('Musculação')).toBeTruthy()
    expect(screen.getByText('R$99')).toBeTruthy()
    expect(screen.getByText('Musculação + 1 luta')).toBeTruthy()
    expect(screen.getByText('R$149')).toBeTruthy()
    expect(screen.getByText('Completo')).toBeTruthy()
    expect(screen.getByText('R$189')).toBeTruthy()
  })

  it('marca o plano intermediário como "Mais escolhido"', () => {
    render(<Planos />)
    expect(screen.getByText('Mais escolhido')).toBeTruthy()
  })

  it('cada plano linka pro WhatsApp com o nome do plano na mensagem', () => {
    render(<Planos />)

    const links = screen.getAllByRole('link', { name: /quero esse plano/i }) as HTMLAnchorElement[]
    expect(links).toHaveLength(3)
    expect(decodeURIComponent(links[0].href)).toContain('plano Musculação.')
    expect(decodeURIComponent(links[2].href)).toContain('plano Completo.')
  })
})
