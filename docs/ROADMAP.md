# Roadmap — Projeto Guguita

Próximas features e prioridades. O catálogo detalhado dos jogos existentes está em
[`JOGOS.md`](JOGOS.md); o contexto e os princípios estão em [`PROJETO.md`](PROJETO.md).

## Legenda de status

| Símbolo | Significado |
|---|---|
| ✅ | Concluído |
| 🚧 | Em desenvolvimento |
| 💡 | Ideia / backlog |

---

## Já concluído

- ✅ Estrutura de pastas, design system (`assets/css/base.css`) e documentação inicial
- ✅ Portal (`index.html`) + hub de jogos (`jogos.html`)
- ✅ PWA offline (manifest + service worker)
- ✅ GA4 em todas as páginas, com evento `jogo_concluido` nos 7 jogos
- ✅ 6 jogos ativos catalogados (ver `JOGOS.md`)

---

## Prioridade 1 — Linguagem / Alfabeto

Categoria hoje **zerada** e de maior valor para o Gustavo. Foco imediato.

- 💡 Alfabeto interativo (letra + som + imagem)
- 💡 Sílabas simples (ba, be, bi, bo, bu…)
- 💡 Palavra + imagem (associação)

## Prioridade 2 — Expandir o que já funciona

- 🚧 Aventura do Guga — Fase 2 (continuação da Fase 1, já ativa)

## Prioridade 3 — Matemática (ampliar cobertura)

- 💡 Divisão simples
- 💡 Relógio / horas
- 💡 Sequências numéricas

## Prioridade 4 — Habilidades cognitivas

- 💡 Jogo da memória visual
- 💡 Encontre o diferente (atenção)
- 💡 Sequência de cores/formas

---

## Melhorias técnicas / débito

- 💡 Revisar/consolidar versões soltas da pasta `../Jogo/` (rascunho) no repositório
- 💡 Padronizar todos os jogos sobre `assets/css/base.css` (design system único)
- 💡 Verificar cobertura do `service-worker.js` sempre que adicionar assets

---

## Como priorizamos

Seguindo a filosofia do projeto (ver `PROJETO.md`): primeiro o que serve **melhor ao
Gustavo, do jeito dele**. Excelência e carinho no que já existe vêm antes de expandir
o catálogo. Produtização não é meta agora.
