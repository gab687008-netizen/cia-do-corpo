import { linkWhatsApp } from '@/shared/lib/whatsapp'

export default function WhatsAppFloatButton() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-colors flex items-center justify-center shadow-lg shadow-black/40"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#0a0a0b" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 01-1.26-4.38c0-4.55 3.7-8.24 8.26-8.24a8.2 8.2 0 015.84 2.42 8.19 8.19 0 012.42 5.83c0 4.55-3.71 8.23-8.27 8.23z" />
      </svg>
    </a>
  )
}
