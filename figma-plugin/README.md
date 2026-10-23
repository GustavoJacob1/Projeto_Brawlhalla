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

1. No terminal, dentro da pasta do projeto, atualize: `git pull origin main`.
2. Abra o **Figma Desktop** (plugins em desenvolvimento só rodam no app) e o arquivo
   **"Brawlhalla DuoFinder — Protótipo"**.
3. Vá em **Plugins → Desenvolvimento → Importar plugin do manifesto…**
   (em inglês: *Plugins → Development → Import plugin from manifest…*) e escolha o `manifest.json`
   **desta pasta** (`Projeto_Brawlhalla/figma-plugin/manifest.json`).
   O nome do plugin mudou para **"DuoFinder — Protótipo Brawlhalla (v4)"**, então importe de novo mesmo
   que já tenha importado uma versão anterior.
4. Rode **Plugins → Desenvolvimento → DuoFinder — Protótipo Brawlhalla (v4)**. Ele trabalha sozinho por
   alguns segundos.
5. Confira a mensagem final: ela precisa começar com **`✅ DuoFinder v4:`**. Se aparecer outro texto
   (por exemplo "Atualizar protótipo" ou sem "v4"), o Figma está rodando uma cópia antiga do plugin.

Para navegar, selecione a tela **01 · Início** e clique em **▶ Apresentar** (*Present*).

## Bom saber

- As telas **04 a 08 e a capa são apagadas e refeitas a cada execução**, para ficarem iguais ao protótipo.
  Se você editar alguma delas à mão, a edição some quando rodar o plugin de novo.
- As telas 01, 02 e 03 não são apagadas: o plugin só atualiza as cores e a arte da Home.
- As versões antigas ("DuoFinder — Completar protótipo" e "DuoFinder — Atualizar protótipo") podem ser removidas em
  **Plugins → Desenvolvimento → Gerenciar plugins em desenvolvimento**, para não confundir.
- Para trocar a arte da Home, selecione a camada **Banner Brawlhalla** (dentro de *01 · Início → Hero*) e troque a imagem do preenchimento.
- Se a mensagem final falar em "falhou" ou "aviso", abra **Plugins → Desenvolvimento → Mostrar/ocultar console** para ver o detalhe.
- O plugin só funciona nesse arquivo, porque usa os componentes que já estão nele.
- A arte do banner é material promocional da Blue Mammoth Games / Ubisoft, usada aqui em projeto acadêmico.
