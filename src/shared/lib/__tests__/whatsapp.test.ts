import { describe, it, expect } from 'vitest'
import { linkWhatsApp } from '@/shared/lib/whatsapp'

describe('linkWhatsApp', () => {
  it('gera link wa.me com o número certo e mensagem padrão', () => {
    const link = linkWhatsApp()
    expect(link).toContain('https://wa.me/5537999288119')
    expect(link).toContain(encodeURIComponent('Olá! Vim pelo site'))
  })

  it('aceita mensagem customizada', () => {
    const link = linkWhatsApp('Quero saber sobre o plano Completo.')
    expect(link).toContain(encodeURIComponent('Quero saber sobre o plano Completo.'))
  })
})
