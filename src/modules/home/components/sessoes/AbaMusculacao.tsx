// Foto de banco de imagem — as fotos reais recebidas até agora (aluna
// flexionando, aluno na cadeira) não transmitiam "musculação" com
// clareza suficiente. TROCAR quando a academia mandar uma foto melhor.
const FOTO = '/cia-do-corpo/fotos/musculacao-banco.webp'

export default function AbaMusculacao() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
      <div
        className="aspect-[4/3] bg-cover bg-center border border-cdc-border"
        style={{ backgroundImage: `url('${FOTO}')` }}
        role="img"
        aria-label="Musculação"
      />
      <div className="text-center md:text-left">
        <h3 className="font-display uppercase text-2xl mb-3 tracking-tight">Musculação</h3>
        <p className="font-body text-base text-cdc-muted leading-relaxed">
          Treino de força com acompanhamento, do iniciante ao avançado. Equipamento completo pra
          hipertrofia, emagrecimento ou performance. Horário livre, sem turma fixa: você treina no
          seu tempo.
        </p>
      </div>
    </div>
  )
}
