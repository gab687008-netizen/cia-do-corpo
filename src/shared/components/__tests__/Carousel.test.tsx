import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Carousel from '@/shared/components/Carousel'

describe('Carousel', () => {
  it('renderiza os itens (triplicados, pra rolagem infinita) sem seta de navegação', () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>,
    )

    expect(screen.getAllByText('Item 1').length).toBe(3)
    expect(screen.getAllByText('Item 2').length).toBe(3)
    expect(screen.queryByRole('button')).toBeNull()
  })
})
