import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Carousel from '@/shared/components/Carousel'

describe('Carousel', () => {
  it('renderiza os itens filhos e os botões de navegação', () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>,
    )

    expect(screen.getByText('Item 1')).toBeTruthy()
    expect(screen.getByText('Item 2')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Anterior' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Próximo' })).toBeTruthy()
  })

  it('começa com a seta "Anterior" desabilitada', () => {
    render(
      <Carousel>
        <div>Item 1</div>
      </Carousel>,
    )
    const botao = screen.getByRole('button', { name: 'Anterior' }) as HTMLButtonElement
    expect(botao.disabled).toBe(true)
  })
})
