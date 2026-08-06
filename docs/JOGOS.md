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
| **Assets** | `assets/js/carinhas.js` (fonte canônica das carinhas — SVGs, helpers e paletas) |
| **Notas** | Tela livre de criação, inspirada no hiperfoco do Gustavo (numberblocks + adesivos). A criança pinta livre numa matriz 10×10 (paleta de 10 cores), cola **carinhas** (tocar carinha → tocar bloco) e cola **plaquinhas de número** — digita o número e toca "Gerar" para criar um círculo transparente com o número em preto, marcando qual número está montando. 27 carinhas desenhadas em SVG (originais e genéricas, sem copyright — inspiradas em tipos de expressão: um olho, óculos, coroa, olhos quadrados, estrela, cílios, arco-íris, etc.). Borracha, Desfazer e Limpar tudo. Layout one-page, pensado para tablet. Sem comemoração/evento GA4 de conclusão (é tela livre, sem objetivo a "concluir"). **As carinhas/paletas vêm de `assets/js/carinhas.js`**, compartilhado com a Folha de Adesivos. |

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
| **Notas** | Calendário de previsibilidade de 30 dias. Herói com o número gigante de **dormidas até o Papai voltar** durante a viagem (frase muda por dia; confete no dia da volta); depois da volta vira "onde você está hoje" (com o Papai / com a Mamãe / viagem juntos). Grade tipo calendário (semanas Dom–Sáb) colorida por **onde o Guga dorme** (💚 Papai, 💗 Mamãe, ✈️ Papai viajando, 😄 viagem com o Papai) com **pontinhos** das atividades e **marcos** pontuais (volta às aulas, Papai volta). Tocar num dia abre o **detalhe** com a **rotina em sequência** (ex.: Escolinha com a AT → Clínica → Casa do Papai). Chips de **filtro** para aprofundar por tipo de dia. A criança **carimba o dia de hoje** (localStorage) — passados já vêm carimbados, futuros ficam bloqueados. Cálculo automático por `new Date()`; tudo editável nas constantes do topo (`DATA_INICIO`, `FASES`, `ATIVIDADES`, `MARCOS`, `AT_NOME`, `CUIDADORES`). Testar datas: `?hoje=AAAA-MM-DD`. |

---

### Folha de Adesivos
| Campo | Valor |
|---|---|
| **Arquivo** | `jogos/adesivos.html` |
| **Status** | ✅ Ativo |
| **Categoria** | Criação / Impressão |
| **Habilidades** | Reconhecimento de carinhas/cores; apoio ao recorte e colagem (motricidade) |
| **Assets** | `assets/js/carinhas.js` (mesma fonte canônica de carinhas do Blocos e Carinhas) |
| **Analytics** | Evento próprio `folha_adesivos_impressa` (com `quantidade`; não usa `jogo_concluido`) |
| **Notas** | Gera uma **folha de adesivos pronta para imprimir** em papel adesivo A4 e recortar depois. Cada adesivo é um quadradinho **de 2 cm × 2 cm exatos** (CSS em `mm`/`@page`, nunca px) com uma carinha SVG. Layout A4 retrato, margem de página 10 mm, **calha de 6 mm** entre adesivos (opção "espaço largo" = 8 mm) para cortar à mão — **7 por linha** (~70 por folha; 6×9 no modo largo). Linhas de corte tracejadas (liga/desliga). Cores aproximadas dos Numberblocks (paleta `CORES_NUMEROS`; cores não têm copyright) — escolha por adesivo (toca a cor → 🖌 no adesivo), "colorir todas iguais" ou "cores variadas". Em fundo escuro, halo claro atrás da carinha para contraste. Dá para escolher **quais carinhas** entram e **quantas cópias** de cada, e adicionar **plaquinhas de número** (reaproveita `placaSVG`). Ao imprimir (`window.print()`), a interface some — só a grade aparece, fundo branco, sem sombras/gradientes. Pré-visualização mostra a folha A4 real. |

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
| `assets/js/carinhas.js` | Fonte canônica das carinhas (FACES + helpers + `placaSVG` + paletas). Usado por `blocos-carinhas.html` e `adesivos.html` |
