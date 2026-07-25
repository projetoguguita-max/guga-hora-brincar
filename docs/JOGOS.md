# Catálogo de Jogos — Projeto Guguita

Todos os mini-jogos do portal, com status, habilidades desenvolvidas e metadados.

---

## Status

| Símbolo | Significado |
|---|---|
| ✅ | Ativo e funcionando |
| 🔧 | Em manutenção |
| 🚧 | Em desenvolvimento |
| 💡 | Ideia / backlog |

---

## Jogos Ativos

### 1. Aventura do Guga — Fase 1
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/aventura-guga-fase1.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Aventura / Exploração |
| **Habilidades** | Atenção, sequenciamento |
| **Faixa etária** | 4–8 anos |
| **Dificuldade** | ⭐ (fácil) |
| **Notas** | Primeira fase — expandir para Fase 2 em breve |

---

### 2. Monstrinho da Comparação
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/monstrinho-comparacao.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Matemática |
| **Habilidades** | Comparação (maior/menor), números |
| **Faixa etária** | 5–8 anos |
| **Dificuldade** | ⭐⭐ (médio) |
| **Assets** | `assets/video/Maior.mp4`, `assets/video/Menor.mp4` |
| **Notas** | Usa vídeos do Gustavo como feedback |

---

### 3. Soma com Vai Um
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/soma-vai-um.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Matemática |
| **Habilidades** | Adição com reagrupamento ("vai um") |
| **Faixa etária** | 6–9 anos |
| **Dificuldade** | ⭐⭐⭐ (difícil) |
| **Notas** | Conteúdo mais avançado |

---

### 4. Calculadora — Vamos Multiplicar!
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/calculadora-vamos-multiplicar.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Matemática |
| **Habilidades** | Multiplicação |
| **Faixa etária** | 7–10 anos |
| **Dificuldade** | ⭐⭐⭐ (difícil) |

---

### 5. Calculadora — Vamos Tirar! v2
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/calculadora-vamos-tirar-v2.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Matemática |
| **Habilidades** | Subtração |
| **Faixa etária** | 6–9 anos |
| **Dificuldade** | ⭐⭐ (médio) |
| **Notas** | v2 — versão revisada |

---

### 6. Empilhar e Colorir Blocos
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/empilhar-colorir-blocos.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Cores / Coordenação |
| **Habilidades** | Reconhecimento de cores, coordenação motora |
| **Faixa etária** | 4–7 anos |
| **Dificuldade** | ⭐ (fácil) |

---

### 7. Blocos e Carinhas
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/blocos-carinhas.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Cores / Criação |
| **Habilidades** | Reconhecimento de cores, coordenação, reconhecimento de números |
| **Faixa etária** | 4–8 anos |
| **Dificuldade** | ⭐ (fácil) |
| **Assets** | Nenhum (tudo SVG inline) |
| **Notas** | Tela livre de criação, inspirada no hiperfoco do Gustavo (numberblocks + adesivos). A criança pinta livre numa matriz 10×10 (paleta de 10 cores), cola **carinhas** (tocar carinha → tocar bloco) e cola **plaquinhas de número** — digita o número e toca "Gerar" para criar um círculo transparente com o número em preto, marcando qual número está montando. 10 carinhas desenhadas em SVG (originais e genéricas, sem copyright — inspiradas em tipos de expressão: um olho, óculos, coroa, olhos quadrados, estrela, cílios, arco-íris, etc.). Borracha, Desfazer e Limpar tudo. Layout one-page, pensado para tablet. Sem comemoração/evento GA4 de conclusão (é tela livre, sem objetivo a "concluir"). |

---

## Ferramentas (não-jogos)

Páginas de apoio ao dia a dia do Gustavo — não têm "conclusão" nem evento `jogo_concluido`.

### Calendário do Papai
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/calendario-do-papai.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Previsibilidade / Rotina |
| **Habilidades** | Noção de tempo, previsibilidade, contagem regressiva ("dormidas") |
| **Assets** | Nenhum (tudo SVG inline; esqueleto pronto para plugar foto/vídeo do Papai) |
| **Analytics** | Evento próprio `dia_carimbado` (não usa `jogo_concluido`) |
| **Notas** | Calendário de previsibilidade de 30 dias. Herói com o número gigante de **dormidas até o Papai voltar** (frase muda por dia; comemora com confete no dia da volta). Grade tipo calendário (semanas Dom–Sáb) colorida por **fases** (com o Papai, Papai viajando) e **marcos** pontuais (volta às aulas, Papai volta). Chips de **filtro** para aprofundar por tipo de dia; tocar num dia abre o **detalhe**. A criança **carimba o dia de hoje** (localStorage) — dias passados já vêm carimbados, dias futuros ficam bloqueados. Cálculo automático por `new Date()`; datas/eventos editáveis nas constantes do topo (`DATA_INICIO`, `FASES`, `MARCOS`). Para testar outras datas: `?hoje=AAAA-MM-DD`. |

---

## Backlog de Jogos (💡 Ideias)

### Linguagem / Alfabeto (categoria ainda zerada — alta prioridade!)
- 💡 Alfabeto interativo (letra + som + imagem)
- 💡 Sílabas simples (ba, be, bi, bo, bu...)
- 💡 Palavra + imagem (associação)

### Matemática
- 💡 Divisão simples
- 💡 Relógio / horas
- 💡 Sequências numéricas

### Habilidades Cognitivas
- 💡 Jogo da memória visual
- 💡 Encontre o diferente (atenção)
- 💡 Sequência de cores/formas

### Aventura
- 🚧 Aventura do Guga — Fase 2

---

## Assets Compartilhados de Jogos

| Arquivo | Uso |
|---|---|
| `assets/video/muito_bem.mp4` | Celebração / vitória |
| `assets/video/Maior.mp4` | Feedback "maior" |
| `assets/video/Menor.mp4` | Feedback "menor" |
| `assets/img/capa-guga.jpg` | Foto do Guguita |
| `assets/img/capa-guga.svg` | Ícone SVG |
