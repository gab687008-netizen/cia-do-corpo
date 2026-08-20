const LUTAS = [
  {
    nome: 'Kickboxing',
    descricao: 'Condicionamento físico e técnica de luta em pé. Queima calórica alta, defesa pessoal e disciplina em cada aula.',
    foto: '/cia-do-corpo/fotos/turma-kickboxing.jpeg',
  },
  {
    nome: 'Jiu-Jitsu',
    descricao: 'Luta agarrada, alavancas e técnica sobre força. Pra quem quer competir ou só aprender a se defender de verdade.',
    // TROCAR: banco de imagem (Pexels) por foto real do tatame — ainda não
    // recebemos foto de jiu-jitsu da academia.
    foto: 'https://images.pexels.com/photos/16833338/pexels-photo-16833338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function AbaLutas() {
  return (
    <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
      {LUTAS.map((l) => (
        <div key={l.nome} className="group border border-cdc-border bg-cdc-surface overflow-hidden">
          <div
            className="h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${l.foto}')` }}
            role="img"
            aria-label={l.nome}
          />
          <div className="p-6 text-center">
            <h3 className="font-display uppercase text-xl mb-2.5 tracking-tight">{l.nome}</h3>
            <p className="font-body text-sm text-cdc-muted leading-relaxed">{l.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
