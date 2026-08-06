# Academia Cia do Corpo — Site

Landing page da Academia Cia do Corpo, no bairro Sidil, em Divinópolis/MG.

**No ar:** https://gab687008-netizen.github.io/cia-do-corpo/

## Sobre

Página única, sem build step e sem dependências: um arquivo `index.html`
autocontido (CSS e JS inline, imagens em base64). Abre com dois cliques em
qualquer navegador e pode ser enviado por WhatsApp ou e-mail sem quebrar.

- **107 KB** no disco · **~54 KB** servidos com gzip
- Fontes: Anton, Oswald, Inter e JetBrains Mono (Google Fonts)
- Tema escuro com identidade preto + dourado

## Seções

Hero · Modalidades · Professor · Grade de horários · Planos · Estrutura · Contato

## Decisões de implementação

- **Mapa sob demanda.** O iframe do Google Maps só é criado quando o visitante
  clica em "Ver o mapa" — nenhuma requisição a terceiros no carregamento.
- **Tabela de horários responsiva.** No mobile as linhas viram cartões em vez de
  esconder colunas, então nenhuma informação se perde na tela pequena.
- **Movimento em uma curva só.** Todas as transições usam a mesma
  `cubic-bezier(.22,1,.36,1)` e animam apenas `transform`/`opacity`.
  `prefers-reduced-motion` desliga tudo.
- **Acessibilidade.** Contraste mínimo de 4.5:1 em todo texto, alvos de toque de
  44px, navegação por teclado e menu mobile fechável por Esc.

## Pendências

- [ ] Trocar as fotos do Pexels pelas fotos reais da academia — cada ponto de
      troca está marcado com o comentário `TROCAR:` no HTML.
- [ ] Confirmar os valores dos planos (hoje são valores de referência).
- [ ] Confirmar o professor da turma de jiu-jitsu de seg/qua/sex.

## Contato da academia

Av. Paraná, 941 — Sidil, Divinópolis/MG
WhatsApp (37) 99928-8119 · [@ciadocorpoacademiafitness](https://www.instagram.com/ciadocorpoacademiafitness/)
