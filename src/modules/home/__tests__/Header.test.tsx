import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/modules/home/components/Header'
import QuizModal from '@/shared/components/QuizModal'
import { QuizProvider } from '@/shared/lib/quiz-provider'

function renderComQuiz() {
  return render(
    <QuizProvider>
      <Header />
      <QuizModal />
    </QuizProvider>,
  )
}

describe('Header', () => {
  it('menu mobile começa fechado e abre ao clicar no hambúrguer', () => {
    renderComQuiz()

    // nav desktop já renderiza os links (só fica escondida via CSS em telas
    // pequenas) — o menu mobile é quem só existe no DOM depois de aberto.
    expect(screen.getAllByRole('link', { name: /modalidades/i })).toHaveLength(1)

    fireEvent.click(screen.getByRole('button', { name: /abrir menu/i }))

    expect(screen.getAllByRole('link', { name: /modalidades/i })).toHaveLength(2)
    expect(screen.getByRole('button', { name: /fechar menu/i })).toBeTruthy()
  })

  it('botão "Aula grátis" abre o mini quiz em vez de linkar direto pro WhatsApp', () => {
    renderComQuiz()

    expect(screen.queryByRole('dialog')).toBeNull()

    fireEvent.click(screen.getAllByRole('button', { name: /aula grátis/i })[0])

    expect(screen.getByRole('dialog')).toBeTruthy()
    expect(screen.getByText(/qual seu objetivo/i)).toBeTruthy()
  })
})
