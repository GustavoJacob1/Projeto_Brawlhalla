# Plugin — Atualizar protótipo do DuoFinder

Este plugin atualiza o arquivo do Figma **"Brawlhalla DuoFinder — Protótipo"**:

1. **Nova identidade visual**, clara e com as cores do projeto:
   azul noturno `#111827` (textos e banners), azul competitivo `#2563EB` (botões e destaques),
   dourado `#F4B942` (logo, avatares e detalhes) e cinza claro `#E5E7EB` (fundo).
   Como tudo no arquivo usa variáveis, as telas que já existem mudam junto.
2. **Banner do Brawlhalla no fundo da Home**, com sombreamento para o texto continuar legível.
   Na janela do plugin você escolhe a imagem (uma arte oficial com várias Lendas).
   Sem imagem, fica uma arte provisória de céu com ilhas flutuantes.
3. **Telas que faltavam**, incluindo o **Dashboard**:

| Tela | Conteúdo |
|---|---|
| 04 · Buscar dupla | Filtros (faixa de Elo, região, Lendas, só com Discord) e grade de cards de jogadores |
| 05 · Perfil do jogador | Compatibilidade, informações competitivas, comparação de Elo e Lendas favoritas |
| 06 · Meu perfil | Formulário de edição (nickname, Elo, região, Lendas, Discord, horário, bio) e prévia do card |
| 07 · Dashboard | Indicadores, distribuição de Elo, Lendas mais escolhidas, jogadores por região e mais compatíveis |
| 08 · Modal — Contato Discord | Janela sobreposta com o usuário do Discord e os passos para chamar |
| Capa | Título do projeto acima das telas |

4. **Interações do protótipo** (navbar, botões, cards e modal), com o "Fluxo principal" começando na tela 01.

## Como rodar

1. Instale e abra o **Figma Desktop**: plugins em desenvolvimento só rodam no app.
2. Abra o arquivo **"Brawlhalla DuoFinder — Protótipo"** (está nos seus Rascunhos/Drafts).
3. No menu, vá em **Plugins → Desenvolvimento → Importar plugin do manifesto…**
   (em inglês: *Plugins → Development → Import plugin from manifest…*) e escolha o
   arquivo `manifest.json` desta pasta. Se você já importou a versão anterior, basta rodar de novo,
   porque o Figma lê o `code.js` atualizado.
4. Rode em **Plugins → Desenvolvimento → DuoFinder — Atualizar protótipo**.
5. Na janela que abrir, escolha a imagem do banner (JPG ou PNG, até 4096 px de largura) e clique em **Aplicar**.
   Ou clique em **Aplicar sem imagem**.
6. Espere a mensagem final, que começa com `✅ DuoFinder: identidade nova aplicada`.

Para navegar, selecione a tela **01 · Início** e clique em **▶ Apresentar** (*Present*).

## Imagem do banner

Use uma arte oficial do Brawlhalla com várias Lendas (wallpapers do site oficial ou da página do jogo na Steam).
O plugin não baixa nada da internet: a imagem sai do seu computador e fica só no seu arquivo do Figma.
Para trocar depois, rode o plugin de novo e escolha outra imagem, ou selecione a camada
**Banner Brawlhalla** (dentro de *01 · Início → Hero*) e troque o preenchimento por outra imagem.

## Bom saber

- Pode rodar quantas vezes quiser: telas prontas são mantidas, telas que ficaram pela metade são refeitas e nada é duplicado.
- Se a mensagem final falar em "falhou" ou "aviso", abra **Plugins → Desenvolvimento → Mostrar/ocultar console** para ver o detalhe.
- O plugin só funciona nesse arquivo, porque usa os componentes que já estão nele.
