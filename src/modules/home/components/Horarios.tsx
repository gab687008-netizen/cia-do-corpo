import { TURMAS } from '@/modules/home/data/turmas'

export default function Horarios() {
  return (
    <section id="horarios" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono uppercase text-xs tracking-[3px] text-cdc-accent mb-3">Horários</p>
        <h2 className="font-display uppercase text-3xl sm:text-4xl max-w-lg mb-4 tracking-tight">
          Encaixa na sua rotina
        </h2>
        <p className="font-body text-sm text-cdc-muted mb-10 max-w-md">
          Musculação é horário livre. Kickboxing e jiu-jitsu têm turma fixa — escolha a sua.
        </p>

        <div className="border border-cdc-border bg-cdc-surface p-5 sm:p-6 mb-6 w-full max-w-xl text-left">
          <p className="font-label font-semibold uppercase text-sm tracking-wide mb-1">Musculação</p>
          <p className="font-body text-sm text-cdc-muted">
            Horário livre — segunda a sexta, 6h às 22h · sábado, 8h às 12h
          </p>
        </div>

        {/* Mobile: cards empilhados (9 turmas numa tabela larga exige
            rolagem horizontal cansativa nessa quantidade de linhas). */}
        <div className="sm:hidden w-full flex flex-col gap-3 text-left">
          {TURMAS.map((t, i) => (
            <div key={i} className="border border-cdc-border bg-cdc-surface p-4">
              <p
                className={`font-display uppercase text-lg tracking-tight mb-1 ${t.modalidade === 'Jiu-Jitsu' ? 'text-cdc-jj' : 'text-cdc-text'}`}
              >
                {t.modalidade} · {t.turma}
              </p>
              <p className="font-body text-sm text-cdc-muted">{t.professor}</p>
              <p className="font-body text-sm text-cdc-muted">{t.dias}</p>
              <p className="font-body font-semibold text-sm text-cdc-accent mt-1">{t.horario}</p>
            </div>
          ))}
        </div>

        {/* Desktop/tablet: tabela completa. */}
        <div className="hidden sm:block w-full overflow-x-auto border border-cdc-border text-left">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="border-b border-cdc-border bg-cdc-surface">
                {['Modalidade', 'Turma', 'Professor', 'Dias', 'Horário'].map((col) => (
                  <th
                    key={col}
                    className="text-left font-body font-semibold text-[11px] uppercase tracking-wide text-cdc-muted px-4 py-3"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TURMAS.map((t, i) => (
                <tr key={i} className="border-b border-cdc-border last:border-0">
                  <td className={`font-body font-semibold text-sm px-4 py-3.5 ${t.modalidade === 'Jiu-Jitsu' ? 'text-cdc-jj' : ''}`}>
                    {t.modalidade}
                  </td>
                  <td className="font-body text-sm text-cdc-muted px-4 py-3.5">{t.turma}</td>
                  <td className="font-body text-sm text-cdc-muted px-4 py-3.5">{t.professor}</td>
                  <td className="font-body text-sm text-cdc-muted px-4 py-3.5">{t.dias}</td>
                  <td className="font-body font-semibold text-sm text-cdc-accent px-4 py-3.5">{t.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
