# Protótipo navegável — Brawlhalla DuoFinder

Protótipo de alta fidelidade da plataforma, com a identidade visual do projeto.
Abra o `index.html` em qualquer navegador (Chrome, Edge ou Firefox) para clicar pelas telas.
A barrinha escura no canto inferior direito troca de tela direto.

| Arquivo | O que é |
|---|---|
| `index.html` | Protótipo completo (7 telas + modal), funciona offline, exceto as fontes, que vêm do Google Fonts |
| `banner-brawlhalla.webp` | Arte do banner da Home (precisa ficar na mesma pasta do `index.html`) |
| `telas/01-inicio.png` … `telas/08-modal-discord.png` | Cada tela em 1440 px de largura, para usar no Figma |

O que funciona no protótipo:
- **Busca de dupla:** filtros de faixa de Elo, região, Lendas e "só com Discord", busca por nickname e ordenação.
- **Perfil do jogador:** cada card abre o perfil daquele jogador, com compatibilidade e comparação de Elo calculadas.
- **Meu perfil:** editar nickname, Elo, região ou Lendas atualiza o card de pré-visualização na hora.
- **Contato:** o botão Discord abre o modal com o usuário e um botão de copiar.
- **Banner da Home:** arte oficial do Brawlhalla com várias Lendas (`banner-brawlhalla.webp`).
  O botão "Trocar imagem do banner" testa outra imagem. Ela fica salva só no seu navegador.

Jogadores e números são fictícios.

## Como levar para o Figma

**Opção 1: imagens como referência (manual).**
Arraste os PNGs da pasta `telas/` para o Figma, um em cada frame de 1440 de largura, trave a camada
e redesenhe por cima usando o guia de estilo abaixo. É o caminho mais trabalhoso, mas o resultado fica 100% editável e organizado do seu jeito.

**Opção 2: importar o HTML como camadas editáveis.**
Plugins da comunidade, como o **html.to.design**, convertem uma página web em camadas do Figma.
Abra o protótipo no navegador, use o plugin (ou a extensão dele no Chrome) em cada tela e ajuste o resultado.
O plano gratuito desses plugins costuma limitar o número de importações.

**Opção 3: o plugin deste repositório.**
A pasta `figma-plugin/` cria tudo direto no arquivo "Brawlhalla DuoFinder — Protótipo", com componentes e
variáveis. Veja `figma-plugin/README.md`. Atenção: o plugin ainda aplica a identidade antiga (tema claro),
não esta.

## Guia de estilo

### Cores (inspiradas no Brawlhalla)

O azul profundo vem do mundo do jogo, o ciano do brilho atrás do logo e o dourado do letreiro "BRAWLHALLA".

| Nome | Hex | Uso |
|---|---|---|
| Azul profundo | `#0A1A3A` | Fundo das páginas |
| Azul de card | `#11264F` | Cards, barra de navegação, modal, seção "Como funciona" |
| Azul de apoio | `#193466` | Áreas internas dos cards, avisos |
| Azul escuro | `#071330` | Painel do Login, faixa "Pronto para achar sua dupla?" |
| Borda | `#24447E` | Bordas de cards e campos |
| Branco azulado | `#EAF2FF` | Títulos e textos principais |
| Texto secundário | `#C2D4F0` | Parágrafos |
| Texto fraco | `#8EA8D2` | Rótulos e legendas |
| Ciano | `#38D9F5` | Menu ativo, filtros selecionados, interruptores, destaques dos gráficos |
| Ciano claro | `#6BE3F8` | Links e sobretítulos |
| Dourado | `#FFC83D` | Botões principais (texto `#0A1A3A`), logo, "Finder", avatares, ícones dos indicadores |
| Verde | `#3DDC97` | Compatibilidade e confirmações |
| Discord | `#5865F2` | Botões de contato |

Divisões de Elo (texto da insígnia, fundo com 14% de opacidade):
Tin `#AAB4C8` · Bronze `#E8A06A` · Prata `#D4DEEC` · Ouro `#FFC83D` · Platina `#4FE3C9` · Diamante `#B4BEFF`.

### Banner da Home

A arte (`banner-brawlhalla.webp`, 1080 × 607) ocupa a largura toda no topo da Home, sem cortar o logo.
Na metade de baixo ela escurece até o azul profundo, e o título, os botões e o card "Dupla sugerida"
começam a 60% da altura da arte. No Figma: frame de 1440, imagem de 1440 × 809 no topo e um degradê de
transparente (46%) para `#0A1A3A` (100%) por cima dela.

### Tipografia

| Estilo | Fonte | Tamanho / altura da linha |
|---|---|---|
| Título da Home | Chakra Petch Bold | 68 / 72 |
| Título de página (H1) | Chakra Petch Bold | 40 / 48 |
| H2 | Chakra Petch Bold | 28 / 36 |
| H3 / títulos de card | Chakra Petch SemiBold | 20 / 28 |
| Sobretítulo | Chakra Petch SemiBold, maiúsculas, espaçamento 12% | 13 / 16 |
| Texto grande | Inter Regular | 18 / 28 |
| Texto | Inter Regular | 16 / 24 |
| Texto pequeno | Inter Regular | 14 / 20 |
| Botões e rótulos | Inter SemiBold | 14 / 20 |
| Legendas | Inter SemiBold | 12 / 16 |
| Números de indicador | Inter SemiBold | 36 / 44 |

### Medidas

- Frame desktop: **1440 px**, margens laterais de **48 px**.
- Barra de navegação: **72 px** de altura, branca, borda inferior de 1 px.
- Cards: raio **20 px** (cards grandes 24 px, card de jogador 16 px), padding **28 px**, borda 1 px.
- Botões: altura **40 px** (padding 10/18, raio 10) e grande **52 px** (padding 14/24, raio 12).
- Campos: altura **48 px**, raio **10 px**, ícone de 16 px à esquerda.
- Chips de filtro: raio total (pílula), padding 7/14.
- Avatar: círculo com fundo dourado a 22%, borda dourada de 2 px, iniciais em Chakra Petch Bold
  (36, 52 e 104 px).
- Espaçamento entre cards: **20–24 px**; entre seções: **24–32 px**.
- Ícones: [Lucide](https://lucide.dev), traço de 2 px.
