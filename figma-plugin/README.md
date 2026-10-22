# Plugin — Completar protótipo do DuoFinder

Este plugin termina o protótipo no arquivo do Figma **"Brawlhalla DuoFinder — Protótipo"**.
O arquivo já tem as variáveis de cor, os estilos de texto, os componentes e as telas
01 (Início), 02 (Login) e 03 (Cadastro). O plugin cria o resto:

| Tela | Conteúdo |
|---|---|
| 04 · Buscar dupla | Filtros (faixa de Elo, região, Lendas, só com Discord) e grade de cards de jogadores |
| 05 · Perfil do jogador | Cabeçalho com compatibilidade, informações competitivas, comparação de Elo e Lendas favoritas |
| 06 · Meu perfil | Formulário de edição (nickname, Elo, região, Lendas, Discord, horário, bio) e prévia do card |
| 07 · Dashboard | Indicadores, distribuição de Elo, Lendas mais escolhidas, jogadores por região e mais compatíveis |
| 08 · Modal — Contato Discord | Janela sobreposta com o usuário do Discord e os passos para chamar |
| Capa | Título do projeto acima das telas |

Ele também liga os cliques do protótipo (navbar, botões, cards, modal), define o
"Fluxo principal" começando na tela 01 e corrige o fundo do banner da tela 01.

## Como rodar

1. Instale e abra o **Figma Desktop**: plugins em desenvolvimento só rodam no app.
2. Abra o arquivo **"Brawlhalla DuoFinder — Protótipo"** (está nos seus Rascunhos/Drafts).
3. No menu, vá em **Plugins → Desenvolvimento → Importar plugin do manifesto…**
   (em inglês: *Plugins → Development → Import plugin from manifest…*) e escolha o
   arquivo `manifest.json` desta pasta.
4. Rode em **Plugins → Desenvolvimento → DuoFinder — Completar protótipo**.
5. Espere a mensagem `✅ DuoFinder: 6 tela(s) criada(s) · 34 interações ligadas`.

Para navegar, selecione a tela **01 · Início** e clique em **▶ Apresentar** (*Present*).

## Bom saber

- Pode rodar de novo sem duplicar nada: telas que já existem são puladas e as interações são reaplicadas.
- Se a mensagem final falar em "avisos", abra **Plugins → Desenvolvimento → Mostrar/ocultar console** para ver o detalhe.
- O plugin só funciona nesse arquivo, porque usa os componentes que já estão nele.
