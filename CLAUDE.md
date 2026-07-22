# CLAUDE.md — Projeto Guguita

> **Esta é a pasta de referência canônica do projeto.** Toda a documentação e o
> código publicado vivem aqui. (A pasta `../Jogo/` é apenas rascunho/origem —
> não usar como fonte da verdade.)

## Leia primeiro

Antes de qualquer mudança, leia a documentação em `docs/`:

- **`docs/PROJETO.md`** — contexto, identidade, princípios de design, paleta, tom de voz, GA4
- **`docs/ARQUITETURA.md`** — stack, estrutura de pastas, caminhos relativos, deploy, checklist de novo jogo
- **`docs/JOGOS.md`** — catálogo de jogos ativos e backlog
- **`docs/ROADMAP.md`** — próximas features e prioridades

## O essencial

- **Para quem:** feito sob medida para o **Gustavo (Guguita)**, filho do Ricardo, que tem autismo.
  Filosofia: "Primeiro fazemos para o Gustavo; se ajudar outras crianças, melhor ainda."
- **Stack:** HTML + CSS + JavaScript puro. **Zero build, zero dependências.** PWA offline.
- **Hospedagem:** GitHub Pages. Domínio `projetoguguita.com.br` (CNAME).
- **Deploy:** automático — `git push` na branch `main` publica em ~1 min.
- **Analytics:** GA4 `G-357V6N6RQ1`, evento custom `jogo_concluido`.

## Princípios inegociáveis (design para autismo)

- Feedback imediato e claro (acertou/errou na hora)
- Celebração positiva (animações, vídeos, som de vitória)
- **Sem punição** por erro — errar é só tentar de novo
- Touch targets ≥ **52×52px** — **tablet-first** (iPad), depois celular, depois desktop
- Uma coisa por vez, sem sobrecarga visual
- Consistência: mesma paleta e fontes em tudo (`assets/css/base.css`)

## Ao criar/editar um jogo

Seguir o checklist em `docs/ARQUITETURA.md`. Em resumo:
- Partir de `template-jogo.html`, salvar em `jogos/nome-do-jogo.html`
- Importar `../assets/css/base.css` e o snippet do GA4
- Disparar `jogo_concluido` ao finalizar
- Botão "← Voltar" para `../jogos.html`
- Atualizar `docs/JOGOS.md`, o card em `jogos.html` e a lista do `service-worker.js`

## Convenções

- Arquivos/IDs/classes em `kebab-case`; eventos GA4 em `snake_case`
- Fontes: `Baloo 2` (títulos) + `Nunito` (corpo)
- Idioma do conteúdo: **português (pt-BR)**, tom encorajador e simples
