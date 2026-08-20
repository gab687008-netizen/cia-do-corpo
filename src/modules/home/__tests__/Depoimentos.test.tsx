import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Depoimentos from '@/modules/home/components/Depoimentos'

describe('Depoimentos', () => {
  it('mostra as 6 avaliações reais com nome e texto', () => {
    render(<Depoimentos />)

    expect(screen.getByText('Celia Faria Tavares Gontijo')).toBeTruthy()
    expect(screen.getByText('Biel Mello')).toBeTruthy()
    expect(screen.getByText('Flavio Roguinho')).toBeTruthy()
    expect(screen.getByText('Carlos Eduardo De Mendonça')).toBeTruthy()
    expect(screen.getByText('Cassiano Ricardo Lemos de Camargos')).toBeTruthy()
    expect(screen.getByText('Vitor Silvestre')).toBeTruthy()
  })

  it('linka pro Google pra ver todas as avaliações', () => {
    render(<Depoimentos />)
    const link = screen.getByRole('link', { name: /ver todas as avaliações no google/i }) as HTMLAnchorElement
    expect(link.href).toContain('google.com/maps')
  })
})
