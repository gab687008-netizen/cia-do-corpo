const WHATSAPP_NUMERO = '5537999288119'
const MENSAGEM_PADRAO = 'Olá! Vim pelo site e quero agendar uma aula experimental.'

export function linkWhatsApp(mensagem: string = MENSAGEM_PADRAO): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
}
