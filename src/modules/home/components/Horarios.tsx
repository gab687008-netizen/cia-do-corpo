const TURMAS = [
  { modalidade: 'Kickboxing', turma: 'Infantil', professor: 'Jefinho', dias: 'Seg · Qua · Sex', horario: '17h–18h' },
  { modalidade: 'Kickboxing', turma: 'Feminino', professor: 'Ludimila', dias: 'Ter · Qui', horario: '18h' },
  { modalidade: 'Kickboxing', turma: 'Misto', professor: 'Anderson', dias: 'Ter · Qui', horario: '8h · 20h' },
  { modalidade: 'Jiu-Jitsu', turma: 'Misto', professor: 'Netto', dias: 'Ter · Qui', horario: '7h' },
]

export default function Horarios() {
  return (
    <section id="horarios" className="py-20 sm:py-28 px-5 border-b border-cdc-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-display font-bold uppercase text-sm tracking-[0.25em] text-cdc-accent mb-3">Horários</p>
        <h2 className="font-display font-black uppercase text-3xl sm:text-4xl max-w-lg mb-4">
          Encaixa na sua rotina
        </h2>
        <p className="font-body text-sm text-cdc-muted mb-10">
          Musculação é horário livre. Kickboxing e jiu-jitsu têm turma fixa — escolha a sua.
        </p>

        <div className="border border-cdc-border bg-cdc-surface p-5 sm:p-6 mb-6">
          <p className="font-display font-bold uppercase text-sm tracking-wide mb-1">Musculação</p>
          <p className="font-body text-sm text-cdc-muted">
            Horário livre — segunda a sexta, 6h às 22h · sábado, 8h às 12h
          </p>
        </div>

        <div className="overflow-x-auto border border-cdc-border">
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
                  <td className="font-body font-semibold text-sm px-4 py-3.5">{t.modalidade}</td>
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
