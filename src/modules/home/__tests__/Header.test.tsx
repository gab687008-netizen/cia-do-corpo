import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/modules/home/components/Header'

describe('Header', () => {
  it('menu mobile começa fechado e abre ao clicar no hambúrguer', () => {
    render(<Header />)

    // nav desktop já renderiza os links (só fica escondida via CSS em telas
    // pequenas) — o menu mobile é quem só existe no DOM depois de aberto.
    expect(screen.getAllByRole('link', { name: /modalidades/i })).toHaveLength(1)

    fireEvent.click(screen.getByRole('button', { name: /abrir menu/i }))

    expect(screen.getAllByRole('link', { name: /modalidades/i })).toHaveLength(2)
    expect(screen.getByRole('button', { name: /fechar menu/i })).toBeTruthy()
  })

  it('link de "Aula grátis" aponta pro WhatsApp', () => {
    render(<Header />)
    const links = screen.getAllByRole('link', { name: /aula grátis/i }) as HTMLAnchorElement[]
    expect(links[0].href).toContain('wa.me')
  })
})
