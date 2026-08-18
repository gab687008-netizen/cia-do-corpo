import { linkWhatsApp } from '@/shared/lib/whatsapp'

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-cdc-border"
      style={{
        backgroundImage:
          'radial-gradient(circle at 15% 20%, rgba(212,46,46,0.16), transparent 45%), radial-gradient(circle at 85% 75%, rgba(201,162,39,0.10), transparent 40%)',
      }}
    >
      {/* Textura de fundo sutil (linhas diagonais) — reforça o clima "academia/ringue"
          sem depender de foto real que ainda não temos. */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 14px)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="font-display font-bold uppercase text-sm tracking-[0.25em] text-cdc-gold mb-5">
          25 anos em Divinópolis
        </p>
        <h1 className="font-display font-black uppercase text-5xl sm:text-7xl leading-[0.92] max-w-3xl">
          Corpo forte.
          <br />
          <span className="text-cdc-accent">Mente forte.</span>
        </h1>
        <p className="font-body text-lg text-cdc-muted max-w-xl mt-6 leading-relaxed">
          Musculação, kickboxing e jiu-jitsu num só lugar. Professor experiente, estrutura completa
          e uma comunidade que treina há duas décadas e meia.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-9">
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cdc-accent hover:bg-cdc-accent-hover transition-colors text-white font-display font-bold uppercase text-sm tracking-wide px-7 py-4"
          >
            Agendar aula grátis
          </a>
          <a
            href="#planos"
            className="border border-cdc-border hover:border-cdc-text/40 transition-colors font-display font-bold uppercase text-sm tracking-wide px-7 py-4"
          >
            Ver planos
          </a>
        </div>

        <dl className="grid grid-cols-3 gap-6 mt-16 max-w-lg">
          {[
            { valor: '25', label: 'anos de história' },
            { valor: '3', label: 'modalidades' },
            { valor: '6', label: 'dias por semana' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display font-black text-4xl text-cdc-text">{stat.valor}</dd>
              <dd className="font-body text-xs text-cdc-muted mt-1">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
