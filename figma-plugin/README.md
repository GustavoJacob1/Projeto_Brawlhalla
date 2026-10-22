# Plugin — Atualizar protótipo do DuoFinder

Este plugin leva para o arquivo do Figma **"Brawlhalla DuoFinder — Protótipo"** a mesma versão do
protótipo web (`prototipo/`):

1. **Identidade do Brawlhalla** nas variáveis de cor do arquivo: azul profundo `#0A1A3A` no fundo,
   cards em `#11264F`, ciano `#38D9F5` (brilho do logo) nos destaques e dourado `#FFC83D` (letreiro)
   nos botões principais, no logo e nos avatares. Como tudo no arquivo usa variáveis, as telas que já
   existem mudam junto.
2. **Arte oficial com as Lendas no topo da Home**, já embutida no plugin, escurecendo até o azul
   profundo. O título e o card "Dupla sugerida" começam onde a arte escurece.
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
   arquivo `manifest.json` desta pasta. Se você já importou uma versão anterior, não precisa importar
   de novo: o Figma lê o `code.js` atualizado.
4. Rode em **Plugins → Desenvolvimento → DuoFinder — Atualizar protótipo**. Não abre janela: ele
   trabalha sozinho e leva alguns segundos.
5. Espere a mensagem final, que começa com `✅ DuoFinder: identidade do Brawlhalla aplicada`.

Para navegar, selecione a tela **01 · Início** e clique em **▶ Apresentar** (*Present*).

## Bom saber

- Pode rodar quantas vezes quiser: telas prontas são mantidas, telas que ficaram pela metade são refeitas e nada é duplicado.
- Para trocar a arte da Home, selecione a camada **Banner Brawlhalla** (dentro de *01 · Início → Hero*) e troque a imagem do preenchimento.
- Se a mensagem final falar em "falhou" ou "aviso", abra **Plugins → Desenvolvimento → Mostrar/ocultar console** para ver o detalhe.
- O plugin só funciona nesse arquivo, porque usa os componentes que já estão nele.
- A arte do banner é material promocional da Blue Mammoth Games / Ubisoft, usada aqui em projeto acadêmico.
