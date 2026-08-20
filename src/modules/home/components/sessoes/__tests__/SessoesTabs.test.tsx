import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SessoesTabs from '@/modules/home/components/sessoes/SessoesTabs'

describe('SessoesTabs', () => {
  it('começa na aba Musculação', () => {
    render(<SessoesTabs />)
    expect(screen.getByRole('tab', { name: 'Musculação' })).toHaveProperty('ariaSelected', 'true')
    expect(screen.getByText(/horário livre, sem turma fixa/i)).toBeTruthy()
  })

  it('troca pra aba Lutas e mostra Kickboxing e Jiu-Jitsu', () => {
    render(<SessoesTabs />)
    fireEvent.click(screen.getByRole('tab', { name: 'Lutas' }))

    expect(screen.getByText('Kickboxing')).toBeTruthy()
    expect(screen.getByText('Jiu-Jitsu')).toBeTruthy()
  })

  it('aba Professores lista o Anderson em destaque e os outros 5 instrutores', () => {
    render(<SessoesTabs />)
    fireEvent.click(screen.getByRole('tab', { name: 'Professores' }))

    expect(screen.getByAltText(/anderson rodrigues/i)).toBeTruthy()
    expect(screen.getByText('Jefinho')).toBeTruthy()
    expect(screen.getByText('Ludimila')).toBeTruthy()
    expect(screen.getByText('Netto')).toBeTruthy()
    expect(screen.getByText('Saulo')).toBeTruthy()
    expect(screen.getByText('Alfredo')).toBeTruthy()
    expect(screen.getAllByText(/personal trainer/i).length).toBeGreaterThan(0)
  })

  it('aba Espaço mostra a galeria de fotos da estrutura', () => {
    render(<SessoesTabs />)
    fireEvent.click(screen.getByRole('tab', { name: 'Espaço' }))

    expect(screen.getByLabelText('Turma de kickboxing treinando')).toBeTruthy()
  })
})
