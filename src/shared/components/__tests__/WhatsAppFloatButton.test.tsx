import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WhatsAppFloatButton from '@/shared/components/WhatsAppFloatButton'

describe('WhatsAppFloatButton', () => {
  it('renderiza um link clicável pro WhatsApp', () => {
    render(<WhatsAppFloatButton />)
    const link = screen.getByRole('link', { name: /falar no whatsapp/i }) as HTMLAnchorElement
    expect(link.href).toContain('wa.me')
    expect(link.target).toBe('_blank')
  })
})
