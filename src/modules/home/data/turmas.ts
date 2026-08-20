// Fonte única dos horários — usada pela tabela de Horários e pela aba de
// Professores (pra saber o que cada um leciona), evita duplicar a mesma
// informação em dois lugares. Dados batendo com o quadro de horários
// físico da academia (print enviado pelo Pedro) — mais completo que a
// versão anterior, que só tinha 4 das 9 turmas reais.
export interface Turma {
  modalidade: 'Kickboxing' | 'Jiu-Jitsu'
  turma: string
  professor: string
  dias: string
  horario: string
}

export const TURMAS: Turma[] = [
  { modalidade: 'Kickboxing', turma: 'Infantil', professor: 'Jefinho', dias: 'Seg · Qua · Sex', horario: '17h–18h' },
  { modalidade: 'Kickboxing', turma: 'Misto', professor: 'Anderson', dias: 'Ter · Qui', horario: '8h' },
  { modalidade: 'Kickboxing', turma: 'Masculino', professor: 'Anderson', dias: 'Ter · Qui', horario: '20h' },
  { modalidade: 'Kickboxing', turma: 'Infantil', professor: 'Ludimila e Anderson', dias: 'Ter · Qui', horario: '18h' },
  { modalidade: 'Kickboxing', turma: 'Feminino', professor: 'Ludimila e Anderson', dias: 'Ter · Qui', horario: '19h' },
  { modalidade: 'Kickboxing', turma: 'Misto', professor: 'Saulo', dias: 'Seg a Sex', horario: '8h' },
  { modalidade: 'Kickboxing', turma: 'Misto', professor: 'Alfredo', dias: 'Sábado', horario: '9h–11h' },
  { modalidade: 'Jiu-Jitsu', turma: 'Misto', professor: 'Netto', dias: 'Ter · Qui', horario: '7h' },
  { modalidade: 'Jiu-Jitsu', turma: 'Misto', professor: 'Netto', dias: 'Seg · Qua · Sex', horario: '19h30' },
]
