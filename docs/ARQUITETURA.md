# Arquitetura Técnica — Projeto Guguita

## Stack

| Camada | Tecnologia | Motivo |
|---|---|---|
| **Linguagem** | HTML + CSS + JavaScript puro | Sem dependências, funciona offline, zero build |
| **Hospedagem** | GitHub Pages | Gratuito, integrado ao repositório |
| **Domínio** | `www.projetoguguita.com.br` (CNAME) | Identidade do projeto |
| **Analytics** | Google Analytics 4 (`G-357V6NBRQ1`) | Rastreio anônimo de acessos |
| **Offline** | PWA (manifest.json + service-worker.js) | Funciona sem internet |
| **Repositório** | github.com/projetoguguita-max/guga-hora-brincar | Conta dedicada ao projeto |

---

## Estrutura de Pastas

```
guga-hora-brincar/
│
├── index.html              ← Portal principal (Projeto Guguita)
├── jogos.html              ← Hub de navegação dos mini-jogos
├── manifest.json           ← PWA manifest
├── service-worker.js       ← Cache offline
├── CNAME                   ← Domínio customizado
│
├── jogos/                  ← Mini-jogos (cada um é um HTML independente)
│   ├── aventura-guga-fase1.html
│   ├── monstrinho-comparacao.html
│   ├── soma-vai-um.html
│   ├── calculadora-vamos-multiplicar.html
│   ├── calculadora-vamos-tirar-v2.html
│   └── empilhar-colorir-blocos.html
│
├── assets/
│   ├── css/
│   │   └── base.css        ← Design system compartilhado (IMPORTAR EM TUDO)
│   ├── img/
│   │   ├── capa-guga.jpg
│   │   └── capa-guga.svg
│   └── video/
│       ├── Maior.mp4
│       ├── Menor.mp4
│       └── muito_bem.mp4
│
├── template-jogo.html      ← Modelo para novos jogos
│
└── docs/                   ← Documentação do projeto
    ├── PROJETO.md          ← Contexto, identidade, princípios
    ├── JOGOS.md            ← Catálogo de jogos
    ├── ARQUITETURA.md      ← Este arquivo
    └── ROADMAP.md          ← Próximas features
```

---

## Caminhos Relativos (importante!)

Como os jogos ficam em `jogos/`, os caminhos mudam:

| De `index.html` / `jogos.html` (raiz) | De `jogos/*.html` (subpasta) |
|---|---|
| `assets/css/base.css` | `../assets/css/base.css` |
| `assets/img/capa-guga.jpg` | `../assets/img/capa-guga.jpg` |
| `assets/video/muito_bem.mp4` | `../assets/video/muito_bem.mp4` |
| `jogos/aventura-guga-fase1.html` | `../jogos/aventura-guga-fase1.html` |
| `index.html` | `../index.html` |

---

## Google Analytics 4

**Measurement ID:** `G-357V6NBRQ1`

Snippet obrigatório em **todas** as páginas (no `<head>`, antes de fechar):

```html
<!-- Google Analytics 4 — Projeto Guguita -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-357V6NBRQ1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-357V6NBRQ1');
</script>
```

**Evento de conclusão de jogo** (disparar quando a criança termina):

```javascript
gtag('event', 'jogo_concluido', {
  jogo_nome: 'nome-do-jogo',   // ex: 'aventura-fase1'
  jogo_categoria: 'matematica' // ex: 'matematica', 'aventura', 'cores'
});
```

---

## PWA — Service Worker

O `service-worker.js` faz cache de todos os arquivos para uso offline.
**Após mover/adicionar arquivos**, atualizar a lista em `service-worker.js`.

Versão atual cacheada: ver `service-worker.js` (variável `CACHE_NAME`).

---

## Template de Novo Jogo

Usar `template-jogo.html` como ponto de partida.

**Checklist para cada novo jogo:**
- [ ] Copiar `template-jogo.html` para `jogos/nome-do-jogo.html`
- [ ] Importar `../assets/css/base.css`
- [ ] Incluir snippet do GA4
- [ ] Incluir evento `jogo_concluido` ao finalizar
- [ ] Botão "← Voltar" apontando para `../jogos.html`
- [ ] Touch targets mínimos de 52×52px
- [ ] Testar em tablet (768px) e celular (375px)
- [ ] Adicionar entrada em `docs/JOGOS.md`
- [ ] Adicionar card em `jogos.html`
- [ ] Atualizar `service-worker.js`

---

## Convenções de Nomenclatura

| Tipo | Padrão | Exemplo |
|---|---|---|
| Arquivos HTML | `kebab-case.html` | `aventura-guga-fase2.html` |
| Arquivos CSS | `kebab-case.css` | `jogo-aventura.css` |
| IDs HTML | `kebab-case` | `area-resposta` |
| Classes CSS | `kebab-case` com BEM leve | `card--azul`, `btn-voltar` |
| Eventos GA4 | `snake_case` | `jogo_concluido` |

---

## Deploy

O deploy é **automático** — qualquer `git push` para a branch `main` publica no GitHub Pages em ~1 minuto.

Fluxo:
```
git add .
git commit -m "descrição da mudança"
git push origin main
# ↓ GitHub Pages publica automaticamente
# www.projetoguguita.com.br atualizado!
```
