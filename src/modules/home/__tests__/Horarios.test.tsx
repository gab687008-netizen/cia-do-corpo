import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Horarios from '@/modules/home/components/Horarios'
import { TURMAS } from '@/modules/home/data/turmas'

describe('Horarios', () => {
  it('mostra a musculação como horário livre', () => {
    render(<Horarios />)
    expect(screen.getAllByText(/horário livre: segunda a sexta, 6h às 22h/i).length).toBeGreaterThan(0)
  })

  it('lista todas as turmas do quadro de horários, com professor e horário', () => {
    render(<Horarios />)

    expect(screen.getAllByText('Jefinho').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Ludimila e Anderson').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Anderson').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Saulo').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Alfredo').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Netto').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Jiu-Jitsu').length).toBeGreaterThan(0)
  })

  it('renderiza a tabela desktop e os cards mobile com as mesmas 9 turmas', () => {
    render(<Horarios />)
    // cada turma aparece 2x no DOM (card mobile + linha da tabela desktop,
    // ambos sempre presentes, alternados via classes de responsividade).
    expect(screen.getAllByText('20h').length).toBe(2)
    expect(TURMAS).toHaveLength(9)
  })
})
