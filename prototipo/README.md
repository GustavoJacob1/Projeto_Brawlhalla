# Protótipo navegável — Brawlhalla DuoFinder

Protótipo de alta fidelidade da plataforma, com a identidade visual do projeto.
Abra o `index.html` em qualquer navegador (Chrome, Edge ou Firefox) para clicar pelas telas.
A barrinha escura no canto inferior direito troca de tela direto.

| Arquivo | O que é |
|---|---|
| `index.html` | Protótipo completo (7 telas + modal), funciona offline, exceto as fontes, que vêm do Google Fonts |
| `telas/01-inicio.png` … `telas/08-modal-discord.png` | Cada tela em 1440 px de largura, para usar no Figma |

O que funciona no protótipo:
- **Busca de dupla:** filtros de faixa de Elo, região, Lendas e "só com Discord", busca por nickname e ordenação.
- **Perfil do jogador:** cada card abre o perfil daquele jogador, com compatibilidade e comparação de Elo calculadas.
- **Meu perfil:** editar nickname, Elo, região ou Lendas atualiza o card de pré-visualização na hora.
- **Contato:** o botão Discord abre o modal com o usuário e um botão de copiar.
- **Banner da Home:** use "Escolher imagem do banner" para colocar uma arte oficial com as Lendas
  (por exemplo, a arte do jogo na página da Steam ou um wallpaper do site oficial).
  A imagem fica salva só no seu navegador. Sem imagem, aparece uma arte provisória de céu com ilhas flutuantes.
- **Tema:** o protótipo abre no tema escuro; o botão "Ver tema claro" alterna entre os dois.

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
variáveis. Veja `figma-plugin/README.md`.

## Guia de estilo

### Cores (tema escuro, o principal)

| Nome | Hex | Uso |
|---|---|---|
| Azul noturno | `#111827` | Fundo das páginas |
| Azul de card | `#1A2335` | Cards, barra de navegação, modal |
| Azul de apoio | `#243049` | Áreas internas dos cards, chips |
| Azul profundo | `#0B1120` | Painel do Login, faixa "Pronto para achar sua dupla?" |
| Borda | `#2C3A55` | Bordas de cards e campos |
| Cinza claro | `#E5E7EB` | Títulos e textos principais |
| Texto secundário | `#C3CAD6` | Parágrafos |
| Texto fraco | `#8E99AD` | Rótulos e legendas |
| Azul competitivo | `#2563EB` | Botões principais, filtros selecionados, destaques dos gráficos |
| Azul claro | `#7DB0FF` | Links e menu ativo (o azul competitivo fica fraco como texto no fundo escuro) |
| Dourado | `#F4B942` | Logo, "Finder", avatares, botão da Home, ícones dos indicadores |
| Verde | `#34D399` | Compatibilidade e confirmações |
| Discord | `#5865F2` | Botões de contato |

Divisões de Elo (texto da insígnia, fundo com 14% de opacidade):
Tin `#A3AAB8` · Bronze `#E39A62` · Prata `#CBD5E1` · Ouro `#F4C542` · Platina `#4FE3C9` · Diamante `#A5B4FC`.

O botão "Ver tema claro", na barrinha do protótipo, mostra a versão clara
(fundo `#E5E7EB`, cards brancos, texto `#111827`).

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
