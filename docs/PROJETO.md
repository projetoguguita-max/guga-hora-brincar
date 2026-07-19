# Projeto Guguita — Contexto e Identidade

## Quem é o Gustavo?

Gustavo (Guguita) é filho do Ricardo Nabais. Tem autismo e aprende de uma forma
única — com muita energia, estímulos visuais, repetição positiva e celebração das
conquistas. O Projeto Guguita nasceu do amor do pai pelo filho e da vontade de criar
ferramentas que funcionam **para ele, do jeito dele**.

---

## O que é o Projeto Guguita?

Um ecossistema digital educativo e afetivo, composto por:

- 🎮 **Portal de jogos** — mini-jogos educativos feitos sob medida
- 📸 **Instagram** — dia a dia, bastidores, vídeos curtos
- 📺 **YouTube** — vídeos mais longos e séries educativas
- 🎵 **TikTok** — clips curtos e conteúdo viral
- 🌐 **Site** — [www.projetoguguita.com.br](https://www.projetoguguita.com.br)

**Repositório:** [github.com/projetoguguita-max/guga-hora-brincar](https://github.com/projetoguguita-max/guga-hora-brincar)

---

## Princípios de Design

### Para o Gustavo (e crianças com autismo)
- **Feedback imediato e claro** — a criança sabe na hora se acertou ou errou
- **Celebração positiva** — animações, vídeos, sons de vitória
- **Touch targets grandes** — mínimo 52×52px (tablet first!)
- **Sem sobrecarga** — uma coisa por vez, sem muitos elementos simultâneos
- **Consistência visual** — mesma paleta, mesmas fontes em tudo
- **Sem penalidade** — errar é só tentar de novo, sem punição

### Ordem de prioridade de dispositivos
1. **Tablet** (iPad, principalmente)
2. **Celular**
3. **Computador**

---

## Identidade Visual

### Paleta de Cores
| Token | Hex | Uso |
|---|---|---|
| `--creme` | `#F5EDD8` | Fundo principal |
| `--branco` | `#FFFDF8` | Cards, painéis |
| `--bege-esc` | `#C8B890` | Bordas, sombras |
| `--marrom` | `#8B5E3C` | Título principal |
| `--azul` | `#2F7FC0` | Destaque, ação |
| `--verde` | `#4A9B6F` | Acerto, sucesso |
| `--vermelho` | `#C84040` | Erro (suave) |
| `--laranja` | `#D4733A` | Energia, aventura |
| `--roxo` | `#7C5AC7` | Fantasia, criação |
| `--rosa` | `#D963A5` | Diversão, pintura |

### Tipografia
- **Títulos:** `Baloo 2` (peso 700–900) — arredondado, amigável, infantil
- **Corpo/UI:** `Nunito` (peso 600–900) — legível, aconchegante

### Componentes padrão
Ver `assets/css/base.css` para implementação de:
- `.card` e variantes de cor
- `.btn-voltar`, `.btn`
- `.topo`, `.capa`, `.titulo`, `.sub`
- `.area-jogo`
- Animações: `.celebracao`, `.pula`

---

## Tom de Voz

- **Encorajador:** "Muito bem!", "Você conseguiu!", "Tente de novo!"
- **Simples:** frases curtas, palavras conhecidas
- **Positivo:** nunca punitivo, sempre motivador
- **Pessoal:** pode mencionar o Guguita, o Papai, personagens que ele conhece

---

## Métricas e Analytics

- **Ferramenta:** Google Analytics 4
- **Conta:** projetoguguita (Google)
- **Measurement ID:** `G-357V6N6RQ1`
- **Domínio:** `www.projetoguguita.com.br`
- **Eventos personalizados:** `jogo_concluido` (disparado ao completar cada jogo)

---

## Redes Sociais

| Plataforma | Handle | Link |
|---|---|---|
| Instagram | @projetoguguita | — |
| YouTube | Projeto Guguita | — |
| TikTok | @projetoguguita | — |

---

## Filosofia do Projeto

> "Primeiro, fazemos para o Gustavo. Se um dia ajudar outras crianças, melhor ainda."

Produtização não é missão agora. O foco é excelência e carinho no que já existe.
