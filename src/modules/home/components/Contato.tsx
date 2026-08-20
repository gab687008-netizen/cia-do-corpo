import { linkWhatsApp } from '@/shared/lib/whatsapp'

const ENDERECO = 'Av. Paraná, 941 — Sidil, Divinópolis/MG'
const MAPA_SRC =
  'https://www.google.com/maps?q=' + encodeURIComponent('Av. Paraná, 941, Sidil, Divinópolis - MG') + '&output=embed'

export default function Contato() {
  return (
    <section id="contato" className="py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Contato</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl max-w-lg mb-14 tracking-tight">
          Vem treinar com a gente
        </h2>

        <div className="grid md:grid-cols-2 gap-8 w-full text-left">
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div>
              <p className="font-body font-semibold text-[11px] uppercase tracking-wide text-cdc-muted mb-1.5">Endereço</p>
              <p className="font-body text-base">{ENDERECO}</p>
            </div>

            <div>
              <p className="font-body font-semibold text-[11px] uppercase tracking-wide text-cdc-muted mb-1.5">Horário de atendimento</p>
              <p className="font-body text-base">Segunda a sexta, 6h às 22h</p>
              <p className="font-body text-base">Sábado, 8h às 12h</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cdc-accent hover:bg-cdc-accent-hover transition-colors text-cdc-bg font-label font-semibold uppercase text-sm tracking-wide px-6 py-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 01-1.26-4.38c0-4.55 3.7-8.24 8.26-8.24a8.2 8.2 0 015.84 2.42 8.19 8.19 0 012.42 5.83c0 4.55-3.71 8.23-8.27 8.23z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/ciadocorpoacademiafitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-cdc-border-strong bg-cdc-surface-2 hover:border-cdc-accent transition-colors font-label font-semibold uppercase text-sm tracking-wide px-6 py-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
                @ciadocorpoacademiafitness
              </a>
            </div>
          </div>

          <div className="h-72 md:h-full min-h-[280px] border border-cdc-border overflow-hidden">
            <iframe
              src={MAPA_SRC}
              title="Localização da Cia do Corpo no mapa"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
