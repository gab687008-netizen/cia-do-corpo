import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import ContadorAnimado from '@/shared/components/ContadorAnimado'

describe('ContadorAnimado', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('começa em 0 e chega no valor final depois da animação', () => {
    render(<ContadorAnimado valorFinal={25} />)
    expect(screen.getByText('0')).toBeTruthy()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('25')).toBeTruthy()
  })

  it('mostra o valor final direto quando o usuário prefere menos movimento', () => {
    const matchMediaOriginal = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia

    render(<ContadorAnimado valorFinal={6} />)

    act(() => {
      vi.advanceTimersByTime(30)
    })
    expect(screen.getByText('6')).toBeTruthy()

    window.matchMedia = matchMediaOriginal
  })
})
