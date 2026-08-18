import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Horarios from '@/modules/home/components/Horarios'

describe('Horarios', () => {
  it('mostra a musculação como horário livre', () => {
    render(<Horarios />)
    expect(screen.getByText(/horário livre — segunda a sexta, 6h às 22h/i)).toBeTruthy()
  })

  it('lista as turmas de kickboxing e jiu-jitsu com professor e horário', () => {
    render(<Horarios />)

    expect(screen.getByText('Jefinho')).toBeTruthy()
    expect(screen.getByText('Ludimila')).toBeTruthy()
    expect(screen.getByText('Anderson')).toBeTruthy()
    expect(screen.getByText('Netto')).toBeTruthy()
    expect(screen.getAllByText('Jiu-Jitsu').length).toBeGreaterThan(0)
  })
})
