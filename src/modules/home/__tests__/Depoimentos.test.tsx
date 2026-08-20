import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Depoimentos from '@/modules/home/components/Depoimentos'

describe('Depoimentos', () => {
  it('mostra as 6 avaliações reais com nome e texto (triplicadas pro carrossel infinito)', () => {
    render(<Depoimentos />)

    expect(screen.getAllByText('Celia Faria Tavares Gontijo').length).toBe(3)
    expect(screen.getAllByText('Biel Mello').length).toBe(3)
    expect(screen.getAllByText('Flavio Roguinho').length).toBe(3)
    expect(screen.getAllByText('Carlos Eduardo De Mendonça').length).toBe(3)
    expect(screen.getAllByText('Cassiano Ricardo Lemos de Camargos').length).toBe(3)
    expect(screen.getAllByText('Vitor Silvestre').length).toBe(3)
  })

  it('linka pro Google pra ver todas as avaliações', () => {
    render(<Depoimentos />)
    const link = screen.getByRole('link', { name: /ver todas as avaliações no google/i }) as HTMLAnchorElement
    expect(link.href).toContain('google.com/maps')
  })
})
