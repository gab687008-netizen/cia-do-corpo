import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import QuizModal from '@/shared/components/QuizModal'
import { QuizProvider, useQuiz } from '@/shared/lib/quiz-provider'

function BotaoAbrir() {
  const { abrir } = useQuiz()
  return (
    <button type="button" onClick={abrir}>
      abrir
    </button>
  )
}

function renderQuiz() {
  return render(
    <QuizProvider>
      <BotaoAbrir />
      <QuizModal />
    </QuizProvider>,
  )
}

describe('QuizModal', () => {
  it('não renderiza nada até ser aberto', () => {
    renderQuiz()
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('percorre as 3 perguntas e monta o link do WhatsApp com as respostas', () => {
    renderQuiz()
    fireEvent.click(screen.getByText('abrir'))

    fireEvent.click(screen.getByText('Ganhar massa'))
    fireEvent.click(screen.getByText('Kickboxing'))
    fireEvent.click(screen.getByText('Noite'))

    const link = screen.getByRole('link', { name: /chamar no whatsapp/i }) as HTMLAnchorElement
    const mensagem = decodeURIComponent(link.href)
    expect(mensagem).toContain('Ganhar massa')
    expect(mensagem).toContain('Kickboxing')
    expect(mensagem).toContain('Noite')
  })

  it('fecha ao clicar no X e reseta o progresso', () => {
    renderQuiz()
    fireEvent.click(screen.getByText('abrir'))
    fireEvent.click(screen.getAllByLabelText('Fechar')[0])
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
