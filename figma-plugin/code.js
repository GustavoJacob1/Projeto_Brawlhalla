// DuoFinder — Completar protótipo
// Roda no arquivo "Brawlhalla DuoFinder — Protótipo" e cria as telas 04 a 08,
// liga as interações do protótipo e ajusta a tela 01.
// Usa os componentes, variáveis e estilos de texto que já existem no arquivo.

const ICON_IDS = { 'search': '3:7', 'chevron-down': '3:10', 'arrow-left': '3:14', 'arrow-right': '3:18', 'check': '3:21', 'users': '3:27', 'message': '3:30', 'map-pin': '3:34', 'target': '3:39', 'swords': '3:49', 'user-plus': '3:55', 'copy': '3:59', 'x': '3:63', 'plus': '3:67', 'trophy': '3:75', 'chart': '3:81', 'user': '3:85', 'mail': '3:89', 'lock': '3:93', 'sliders': '3:104', 'zap': '3:107', 'shield': '3:110', 'clock': '3:114', 'globe': '3:119', 'pencil': '3:122', 'eye': '3:126', 'trending-up': '3:130', 'log-out': '3:135', 'star': '3:138', 'gamepad': '3:145', 'home': '3:149', 'info': '3:154' };
const COMP_IDS = { logo: '3:156', av: '3:177', tier: '3:203', chip: '3:213', lt: '3:215', btn: '6:50', inp: '6:71', tog: '6:77', kpi: '6:79', pc: '6:97', nav: '6:243' };
const K = { bTxt: 'Texto#6:0', bShow: 'Mostrar ícone#6:9', bIcon: 'Ícone#6:18', iR: 'Rótulo#6:27', iV: 'Valor#6:30', iA: 'Ajuda#6:33', iSA: 'Mostrar ajuda#6:36', iSI: 'Mostrar ícone#6:39', iIc: 'Ícone#6:42', kT: 'Título#6:45', kV: 'Valor#6:46', kD: 'Detalhe#6:47', kI: 'Ícone#6:48', pN: 'Nickname#6:49', pR: 'Região#6:50', pE: 'Elo#6:51', pC: 'Compatibilidade#6:52', pD: 'Diferença#6:53', lL: 'Lenda#3:7', lI: 'Inicial#3:8' };
const FONTS = [['Chakra Petch', 'Bold'], ['Chakra Petch', 'SemiBold'], ['Inter', 'Regular'], ['Inter', 'Semi Bold']];
const SCREEN_X = { s4: 4620, s5: 6160, s6: 7700, s7: 9240, s8: 10780 };

const PLAYERS = [
  { nick: 'Zyphr', ini: 'ZY', elo: 1865, tierTxt: 'Platina 3', compat: '94%', diff: '+45 de Elo', legends: ['Hattori', 'Orion', 'Kor'] },
  { nick: 'Kaizen', ini: 'KZ', elo: 1790, tierTxt: 'Platina 2', compat: '91%', diff: '−30 de Elo', legends: ['Val', 'Ember', 'Jhala'] },
  { nick: 'Lunna', ini: 'LU', elo: 1902, tierTxt: 'Platina 4', compat: '87%', diff: '+82 de Elo', legends: ['Ada', 'Teros', 'Koji'] },
  { nick: 'ThunderBR', ini: 'TB', elo: 1748, tierTxt: 'Platina 2', compat: '84%', diff: '−72 de Elo', legends: ['Thatch', 'Mordex', 'Sidra'] },
  { nick: 'Mizuki', ini: 'MZ', elo: 1933, tierTxt: 'Platina 4', compat: '79%', diff: '+113 de Elo', legends: ['Artemis', 'Caspian', 'Zariel'] },
  { nick: 'RatoVeloz', ini: 'RV', elo: 1705, tierTxt: 'Platina 1', compat: '76%', diff: '−115 de Elo', legends: ['Bödvar', 'Hattori', 'Ember'] },
];

let V = {}, S = {}, C = {}, I = {};

// ---------- helpers ----------
const paint = (n) => {
  if (!V[n]) throw new Error('Variável não encontrada: ' + n);
  return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', V[n]);
};

async function T(parent, chars, style, color = 'text/primary', o = {}) {
  const t = figma.createText();
  await t.setTextStyleIdAsync(S[style].id);
  t.characters = chars;
  t.fills = [paint(color)];
  t.name = o.name || chars.slice(0, 30);
  if (parent) parent.appendChild(t);
  if (o.w) { t.textAutoResize = 'HEIGHT'; t.resize(o.w, t.height); }
  if (o.fill) { t.textAutoResize = 'HEIGHT'; t.layoutSizingHorizontal = 'FILL'; }
  if (o.align) t.textAlignHorizontal = o.align;
  return t;
}

function raw(parent, chars, family, style, size, color, lh) {
  const t = figma.createText();
  t.fontName = { family, style };
  t.fontSize = size;
  if (lh) t.lineHeight = { unit: 'PIXELS', value: lh };
  t.characters = chars;
  t.fills = [paint(color)];
  t.name = chars.slice(0, 30);
  if (parent) parent.appendChild(t);
  return t;
}

function setPad(f, p) {
  const [t, r, b, l] = Array.isArray(p) ? (p.length === 2 ? [p[0], p[1], p[0], p[1]] : p) : [p, p, p, p];
  f.paddingTop = t; f.paddingRight = r; f.paddingBottom = b; f.paddingLeft = l;
}

function AL(dir) {
  const f = figma.createFrame();
  f.layoutMode = dir;
  f.primaryAxisSizingMode = 'AUTO';
  f.counterAxisSizingMode = 'AUTO';
  f.fills = [];
  f.clipsContent = false;
  return f;
}

function box(dir, o = {}) {
  const f = AL(dir === 'H' ? 'HORIZONTAL' : 'VERTICAL');
  f.name = o.name || 'Frame';
  f.fills = o.fill ? [paint(o.fill)] : [];
  if (o.gap != null) f.itemSpacing = o.gap;
  if (o.pad != null) setPad(f, o.pad);
  if (o.radius != null) f.cornerRadius = o.radius;
  if (o.stroke) { f.strokes = [paint(o.stroke)]; f.strokeWeight = o.sw || 1; f.strokeAlign = 'INSIDE'; }
  if (o.align) f.counterAxisAlignItems = o.align;
  if (o.justify) f.primaryAxisAlignItems = o.justify;
  if (o.parent) o.parent.appendChild(f);
  if (o.w && o.h) { f.resize(o.w, o.h); f.layoutSizingHorizontal = 'FIXED'; f.layoutSizingVertical = 'FIXED'; }
  else if (o.w) { f.resize(o.w, f.height); f.layoutSizingHorizontal = 'FIXED'; f.layoutSizingVertical = 'HUG'; }
  else if (o.h) { f.resize(f.width, o.h); f.layoutSizingVertical = 'FIXED'; f.layoutSizingHorizontal = 'HUG'; }
  if (o.fillW) f.layoutSizingHorizontal = 'FILL';
  return f;
}

const variant = (set, name) => {
  const v = set.children.find((c) => c.name === name);
  if (!v) throw new Error('Variante não encontrada: ' + set.name + ' / ' + name);
  return v;
};
const recolor = (node, color) => { for (const n of node.findAll((n) => n.type === 'VECTOR' && n.strokes.length)) n.strokes = [paint(color)]; };

function icon(parent, name, size = 20, color = 'text/secondary') {
  const i = I[name].createInstance();
  i.resize(size, size);
  if (color !== 'text/secondary') recolor(i, color);
  i.name = 'icon/' + name;
  if (parent) parent.appendChild(i);
  return i;
}

const BTN_FG = { 'Primário': 'brand/on-primary', 'Secundário': 'text/primary', 'Fantasma': 'text/secondary', 'Discord': 'text/primary' };
function button(parent, tipo, size, text, ic, fill) {
  const b = variant(C.btn, `Tipo=${tipo}, Tamanho=${size}`).createInstance();
  parent.appendChild(b);
  const p = { [K.bTxt]: text };
  if (ic) { p[K.bShow] = true; p[K.bIcon] = I[ic].id; }
  b.setProperties(p);
  if (ic) recolor(b, BTN_FG[tipo]);
  if (fill) b.layoutSizingHorizontal = 'FILL';
  b.name = 'Botão ' + text;
  return b;
}

function input(parent, label, value, o = {}) {
  const n = variant(C.inp, 'Tipo=' + (o.select ? 'Seleção' : 'Texto')).createInstance();
  parent.appendChild(n);
  const p = { [K.iR]: label, [K.iV]: value, [K.iSI]: !!o.icon };
  if (o.icon) p[K.iIc] = I[o.icon].id;
  if (o.help) { p[K.iSA] = true; p[K.iA] = o.help; }
  n.setProperties(p);
  recolor(n.findOne((x) => x.name === 'Campo'), 'text/muted');
  if (o.placeholder) n.findOne((x) => x.name === 'Valor').fills = [paint('text/muted')];
  if (o.noLabel) n.findOne((x) => x.name === 'Rótulo').visible = false;
  if (o.w) n.resize(o.w, n.height); else n.layoutSizingHorizontal = 'FILL';
  n.name = 'Campo ' + label;
  return n;
}

function chip(parent, text, sel) {
  const c = variant(C.chip, 'Estado=' + (sel ? 'Selecionado' : 'Padrão')).createInstance();
  parent.appendChild(c);
  c.setProperties({ [K.chip]: text });
  return c;
}

function tier(parent, t, txt) {
  const b = variant(C.tier, 'Tier=' + t).createInstance();
  parent.appendChild(b);
  b.findOne((n) => n.type === 'TEXT').characters = txt || t;
  return b;
}

function avatar(parent, size, ini) {
  const a = variant(C.av, 'Tamanho=' + size).createInstance();
  parent.appendChild(a);
  a.setProperties({ [K.av]: ini });
  return a;
}

function toggle(parent, on = true) {
  const t = variant(C.tog, 'Estado=' + (on ? 'Ligado' : 'Desligado')).createInstance();
  parent.appendChild(t);
  return t;
}

function kpi(parent, title, value, detail, ic, neutral) {
  const k = C.kpi.createInstance();
  parent.appendChild(k);
  k.setProperties({ [K.kT]: title, [K.kV]: value, [K.kD]: detail, [K.kI]: I[ic].id });
  recolor(k.findOne((x) => x.name === 'Ícone fundo'), 'brand/accent');
  if (neutral) {
    const d = k.findOne((x) => x.name === 'Detalhe');
    d.children[0].visible = false;
    d.findOne((x) => x.type === 'TEXT').fills = [paint('text/muted')];
  }
  k.layoutSizingHorizontal = 'FILL';
  return k;
}

function playerCard(parent, d) {
  const c = C.pc.createInstance();
  parent.appendChild(c);
  c.setProperties({ [K.pN]: d.nick, [K.pR]: d.reg || 'BRZ', [K.pE]: String(d.elo), [K.pC]: d.compat, [K.pD]: d.diff });
  c.findOne((x) => x.type === 'INSTANCE' && x.name === 'Avatar').setProperties({ [K.av]: d.ini });
  const tb = c.findOne((x) => x.type === 'INSTANCE' && x.name === 'Tier Badge');
  tb.setProperties({ Tier: d.tier || 'Platina' });
  tb.findOne((x) => x.type === 'TEXT').characters = d.tierTxt;
  const tags = c.findAll((x) => x.type === 'INSTANCE' && x.name === 'Legend Tag');
  d.legends.forEach((n, i) => { if (tags[i]) tags[i].setProperties({ [K.lL]: n, [K.lI]: n[0] }); });
  if (d.fill) c.layoutSizingHorizontal = 'FILL';
  c.name = 'Player Card · ' + d.nick;
  return c;
}

function navbar(parent, state, active) {
  const n = variant(C.nav, 'Estado=' + state).createInstance();
  parent.appendChild(n);
  n.layoutSizingHorizontal = 'FILL';
  if (active) {
    const l = n.findOne((x) => x.name === 'Link/' + active);
    l.fills = [paint('brand/primary-soft')];
    l.findOne((x) => x.type === 'TEXT').fills = [paint('brand/primary')];
    recolor(l, 'brand/primary');
  }
  n.name = 'Navbar';
  return n;
}

function screen(name, x) {
  const f = AL('VERTICAL');
  f.name = name;
  f.fills = [paint('bg/base')];
  f.itemSpacing = 0;
  f.clipsContent = true;
  f.resize(1440, 900);
  f.layoutSizingHorizontal = 'FIXED';
  f.layoutSizingVertical = 'HUG';
  f.x = x; f.y = 0;
  return f;
}

async function card(parent, title, o = {}) {
  const c = box('V', { name: title || 'Card', fill: 'bg/surface', stroke: 'border/default', radius: 20, pad: 28, gap: 20, parent, w: o.w });
  if (!o.w) c.layoutSizingHorizontal = 'FILL';
  if (title) await T(c, title, 'Heading/H3');
  return c;
}

function divider(parent) {
  const r = figma.createRectangle();
  r.name = 'Divisor';
  parent.appendChild(r);
  r.resize(100, 1);
  r.layoutSizingHorizontal = 'FILL';
  r.fills = [paint('border/default')];
  return r;
}

const row = (parent, gap = 20) => { const r = box('H', { name: 'Linha', gap, parent }); r.layoutSizingHorizontal = 'FILL'; return r; };
function wrapRow(parent) { const r = box('H', { name: 'Opções', gap: 8, parent }); r.layoutSizingHorizontal = 'FILL'; r.layoutWrap = 'WRAP'; r.counterAxisSpacing = 8; return r; }

async function group(parent, label, value) {
  const g = box('V', { name: label, gap: 12, parent });
  g.layoutSizingHorizontal = 'FILL';
  const h = box('H', { name: 'Rótulo', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: g });
  h.layoutSizingHorizontal = 'FILL';
  await T(h, label, 'Label/Default', 'text/primary');
  if (value) await T(h, value, 'Label/Default', 'brand/primary');
  return g;
}

function softSquare(parent, size, idx, letter, fontSize) {
  const pairs = [['brand/accent-soft', 'brand/accent'], ['brand/primary-soft', 'brand/primary'], ['status/success-soft', 'status/success']];
  const [s, f] = pairs[idx % 3];
  const b = box('H', { name: 'Retrato', fill: s, radius: Math.round(size * 0.22), w: size, h: size, align: 'CENTER', justify: 'CENTER', parent });
  raw(b, letter, 'Chakra Petch', 'Bold', fontSize, f);
  return b;
}

const shadow = [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.5 }, offset: { x: 0, y: 24 }, radius: 64, spread: 0, visible: true, blendMode: 'NORMAL' }];

// ---------- 04 · Buscar dupla ----------
async function buildBusca() {
  const scr = screen('04 · Buscar dupla', SCREEN_X.s4);
  navbar(scr, 'Logado', 'Buscar dupla');

  const head = box('H', { name: 'Cabeçalho', pad: [40, 48, 0, 48], justify: 'SPACE_BETWEEN', align: 'MAX', parent: scr });
  head.layoutSizingHorizontal = 'FILL';
  const ht = box('V', { name: 'Título', gap: 8, parent: head });
  await T(ht, 'Buscar dupla', 'Heading/H1');
  const sub = await T(ht, 'Jogadores com Elo próximo ao seu. Você está em Platina 3 · 1820 de Elo.', 'Body/Default', 'text/secondary');
  const i0 = sub.characters.indexOf('Platina 3 · 1820');
  sub.setRangeFontName(i0, i0 + 16, { family: 'Inter', style: 'Semi Bold' });
  sub.setRangeFills(i0, i0 + 16, [paint('text/primary')]);
  const hr = box('H', { name: 'Busca', gap: 12, align: 'MAX', parent: head });
  input(hr, 'Buscar', 'Buscar por nickname', { icon: 'search', placeholder: true, noLabel: true, w: 320 });
  input(hr, 'Ordenar', 'Ordenar: mais compatíveis', { icon: 'sliders', select: true, noLabel: true, w: 280 });

  const body = box('H', { name: 'Conteúdo', pad: [32, 48, 64, 48], gap: 32, parent: scr });
  body.layoutSizingHorizontal = 'FILL';

  // Filtros
  const fl = box('V', { name: 'Filtros', fill: 'bg/surface', stroke: 'border/default', radius: 20, pad: 24, gap: 28, w: 300, parent: body });
  const fh = box('H', { name: 'Topo', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: fl });
  fh.layoutSizingHorizontal = 'FILL';
  const fht = box('H', { name: 'Título', gap: 8, align: 'CENTER', parent: fh });
  icon(fht, 'sliders', 20, 'text/primary');
  await T(fht, 'Filtros', 'Heading/H3');
  await T(fh, 'Limpar', 'Label/Default', 'brand/primary');

  const g1 = await group(fl, 'Faixa de Elo', '1670 – 1970');
  const sl = figma.createFrame();
  sl.name = 'Slider'; sl.resize(252, 20); sl.fills = []; sl.clipsContent = false;
  g1.appendChild(sl);
  const trk = figma.createRectangle(); trk.name = 'Trilho'; trk.resize(252, 6); trk.y = 7; trk.cornerRadius = 3; trk.fills = [paint('bg/elevated')]; sl.appendChild(trk);
  const a = 0.26, b = 0.72;
  const rng = figma.createRectangle(); rng.name = 'Faixa'; rng.resize(252 * (b - a), 6); rng.x = 252 * a; rng.y = 7; rng.cornerRadius = 3; rng.fills = [paint('brand/primary')]; sl.appendChild(rng);
  for (const p of [a, b]) {
    const k = figma.createEllipse(); k.name = 'Alça'; k.resize(20, 20); k.x = 252 * p - 10; k.y = 0;
    k.fills = [paint('text/primary')]; k.strokes = [paint('brand/primary')]; k.strokeWeight = 3; k.strokeAlign = 'INSIDE';
    sl.appendChild(k);
  }
  const sll = box('H', { name: 'Escala', justify: 'SPACE_BETWEEN', parent: g1 });
  sll.layoutSizingHorizontal = 'FILL';
  await T(sll, '1500', 'Label/Small', 'text/muted');
  await T(sll, '±150 do seu Elo', 'Label/Small', 'text/muted');
  await T(sll, '2150', 'Label/Small', 'text/muted');
  const qr = wrapRow(g1);
  for (const [t, s] of [['±50', false], ['±100', false], ['±150', true], ['±250', false]]) chip(qr, t, s);

  const g2 = await group(fl, 'Região');
  const rr = wrapRow(g2);
  for (const [t, s] of [['BRZ', true], ['US-E', false], ['US-W', false], ['EU', false], ['SA', false], ['SEA', false]]) chip(rr, t, s);

  const g3 = await group(fl, 'Lendas', 'Qualquer uma');
  const lr = wrapRow(g3);
  for (const t of ['Hattori', 'Orion', 'Kor', 'Val', 'Ember', 'Jhala', '+ mais']) chip(lr, t, false);

  const dr = box('H', { name: 'Só com Discord', gap: 12, align: 'CENTER', parent: fl });
  dr.layoutSizingHorizontal = 'FILL';
  const drt = box('V', { name: 'Texto', gap: 2, parent: dr });
  drt.layoutSizingHorizontal = 'FILL';
  await T(drt, 'Só com Discord', 'Label/Default', 'text/primary');
  await T(drt, 'Mostrar apenas quem tem contato', 'Body/Small', 'text/muted');
  toggle(dr, true);
  button(fl, 'Primário', 'M', 'Aplicar filtros', 'check', true);

  // Resultados
  const res = box('V', { name: 'Resultados', gap: 20, parent: body });
  res.layoutSizingHorizontal = 'FILL';
  const rh = box('H', { name: 'Resumo', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: res });
  rh.layoutSizingHorizontal = 'FILL';
  const cnt = await T(rh, '24 jogadores compatíveis encontrados', 'Body/Default', 'text/secondary');
  cnt.setRangeFontName(0, 2, { family: 'Inter', style: 'Semi Bold' });
  cnt.setRangeFills(0, 2, [paint('text/primary')]);
  const act = box('H', { name: 'Filtros ativos', gap: 8, parent: rh });
  for (const t of ['BRZ', '±150 de Elo', 'Com Discord']) chip(act, t, true);
  for (let r = 0; r < 2; r++) {
    const line = row(res);
    for (let c = 0; c < 3; c++) playerCard(line, Object.assign({ fill: true }, PLAYERS[r * 3 + c]));
  }
  const pgw = box('H', { name: 'Paginação', justify: 'CENTER', parent: res });
  pgw.layoutSizingHorizontal = 'FILL';
  const pg = box('H', { name: 'Páginas', gap: 8, align: 'CENTER', parent: pgw });
  for (const p of ['1', '2', '3', '4']) {
    const sel = p === '1';
    const pb = box('H', { name: 'Página ' + p, fill: sel ? 'brand/primary' : 'bg/surface', stroke: sel ? null : 'border/default', radius: 10, w: 40, h: 40, align: 'CENTER', justify: 'CENTER', parent: pg });
    await T(pb, p, 'Label/Default', sel ? 'brand/on-primary' : 'text/secondary');
  }
  button(pg, 'Fantasma', 'M', 'Próxima', 'arrow-right');
  return scr;
}

// ---------- 05 · Perfil do jogador ----------
async function buildPerfil() {
  const scr = screen('05 · Perfil do jogador', SCREEN_X.s5);
  navbar(scr, 'Logado', 'Buscar dupla');
  const ct = box('V', { name: 'Conteúdo', pad: [32, 48, 64, 48], gap: 24, parent: scr });
  ct.layoutSizingHorizontal = 'FILL';

  const back = box('H', { name: 'Voltar', gap: 8, align: 'CENTER', parent: ct });
  icon(back, 'arrow-left', 18, 'text/secondary');
  await T(back, 'Voltar para a busca', 'Label/Default', 'text/secondary');

  const hc = box('H', { name: 'Cabeçalho do perfil', fill: 'bg/surface', stroke: 'border/default', radius: 24, pad: 32, gap: 28, align: 'CENTER', parent: ct });
  hc.layoutSizingHorizontal = 'FILL';
  avatar(hc, 'G', 'ZY');
  const info = box('V', { name: 'Informações', gap: 12, parent: hc });
  info.layoutSizingHorizontal = 'FILL';
  const nr = box('H', { name: 'Nome', gap: 12, align: 'CENTER', parent: info });
  await T(nr, 'Zyphr', 'Heading/H1');
  tier(nr, 'Platina', 'Platina 3');
  const meta = box('H', { name: 'Meta', gap: 20, align: 'CENTER', parent: info });
  for (const [ic, txt] of [['map-pin', 'Brasil (BRZ)'], ['clock', 'Joga à noite · 19h–23h'], ['user', 'No DuoFinder desde set/2026']]) {
    const m = box('H', { name: txt, gap: 6, align: 'CENTER', parent: meta });
    icon(m, ic, 16, 'text/muted');
    await T(m, txt, 'Body/Small', 'text/muted');
  }
  await T(info, 'Main Hattori há 3 temporadas. Procuro dupla fixa para chegar ao Diamante — jogo agressivo e gosto de parceiro que segure o centro do mapa.', 'Body/Default', 'text/secondary', { w: 680, name: 'Bio' });
  const side = box('V', { name: 'Ação', gap: 8, align: 'MAX', parent: hc });
  raw(side, '94%', 'Chakra Petch', 'Bold', 44, 'status/success', 48);
  await T(side, 'de compatibilidade com você', 'Body/Small', 'text/muted');
  box('V', { name: 'Espaço', h: 4, parent: side });
  button(side, 'Discord', 'G', 'Chamar no Discord', 'message');

  const r2 = row(ct, 24);
  const comp = await card(r2, 'Informações competitivas');
  const tiles = [['Elo atual (2v2)', '1865'], ['Pico na temporada', '1912'], ['Divisão', 'Platina 3'], ['Região', 'BRZ']];
  for (let r = 0; r < 2; r++) {
    const tr = row(comp, 16);
    for (let c = 0; c < 2; c++) {
      const [l, v] = tiles[r * 2 + c];
      const tl = box('V', { name: l, fill: 'bg/elevated', radius: 14, pad: 16, gap: 4, parent: tr });
      tl.layoutSizingHorizontal = 'FILL';
      await T(tl, l, 'Label/Small', 'text/muted');
      await T(tl, v, 'Heading/H2');
    }
  }
  const cmp = await card(r2, 'Comparação com você', { w: 460 });
  const sc = box('H', { name: 'Rótulos', justify: 'SPACE_BETWEEN', parent: cmp });
  sc.layoutSizingHorizontal = 'FILL';
  await T(sc, '1670', 'Label/Small', 'text/muted');
  await T(sc, 'Sua faixa de busca (±150)', 'Label/Small', 'text/muted');
  await T(sc, '1970', 'Label/Small', 'text/muted');
  const scale = figma.createFrame();
  scale.name = 'Escala de Elo'; scale.resize(404, 24); scale.fills = []; scale.clipsContent = false;
  cmp.appendChild(scale);
  const st = figma.createRectangle(); st.name = 'Faixa'; st.resize(404, 8); st.y = 8; st.cornerRadius = 4; st.fills = [paint('bg/elevated')]; scale.appendChild(st);
  for (const [elo, col, nm] of [[1820, 'brand/accent', 'Você'], [1865, 'brand/primary', 'Zyphr']]) {
    const m = figma.createEllipse(); m.name = 'Marcador ' + nm; m.resize(16, 16);
    m.x = 404 * (elo - 1670) / 300 - 8; m.y = 4;
    m.fills = [paint(col)]; m.strokes = [paint('bg/surface')]; m.strokeWeight = 3; m.strokeAlign = 'OUTSIDE';
    scale.appendChild(m);
  }
  const lgd = box('H', { name: 'Legenda', gap: 20, parent: cmp });
  for (const [col, txt] of [['brand/accent', 'Você · 1820'], ['brand/primary', 'Zyphr · 1865']]) {
    const it = box('H', { name: txt, gap: 8, align: 'CENTER', parent: lgd });
    const dot = figma.createEllipse(); dot.resize(10, 10); dot.fills = [paint(col)]; it.appendChild(dot);
    await T(it, txt, 'Label/Small', 'text/secondary');
  }
  divider(cmp);
  const checks = box('V', { name: 'Critérios', gap: 10, parent: cmp });
  for (const txt of ['Diferença de +45 de Elo, dentro da sua faixa', 'Mesma região: BRZ', '2 Lendas em comum: Hattori e Orion', 'Horário parecido: noite']) {
    const c = box('H', { name: txt, gap: 10, align: 'CENTER', parent: checks });
    icon(c, 'check', 18, 'status/success');
    await T(c, txt, 'Body/Small', 'text/secondary');
  }
  comp.layoutSizingVertical = 'FILL';

  const lc = await card(ct, 'Lendas favoritas');
  const lr = row(lc, 16);
  const legends = [['Hattori', 'Espada · Lança', true], ['Orion', 'Lança-foguete · Lança', false], ['Kor', 'Manoplas · Martelo', false]];
  for (let i = 0; i < legends.length; i++) {
    const [name, weapons, main] = legends[i];
    const b = box('H', { name: name, fill: 'bg/elevated', radius: 16, pad: 20, gap: 16, align: 'CENTER', parent: lr });
    b.layoutSizingHorizontal = 'FILL';
    softSquare(b, 64, i, name[0], 28);
    const v = box('V', { name: 'Texto', gap: 4, parent: b });
    const nh = box('H', { name: 'Nome', gap: 8, align: 'CENTER', parent: v });
    await T(nh, name, 'Heading/H3');
    if (main) {
      const mp = box('H', { name: 'Main', fill: 'brand/primary-soft', radius: 999, pad: [2, 8], parent: nh });
      await T(mp, 'Main', 'Label/Small', 'brand/primary');
    }
    await T(v, weapons, 'Body/Small', 'text/muted');
  }
  return scr;
}

// ---------- 06 · Meu perfil ----------
async function buildMeuPerfil() {
  const scr = screen('06 · Meu perfil', SCREEN_X.s6);
  navbar(scr, 'Logado', 'Meu perfil');
  const ct = box('V', { name: 'Conteúdo', pad: [40, 48, 64, 48], gap: 28, parent: scr });
  ct.layoutSizingHorizontal = 'FILL';

  const head = box('H', { name: 'Cabeçalho', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: ct });
  head.layoutSizingHorizontal = 'FILL';
  const ht = box('V', { name: 'Título', gap: 8, parent: head });
  await T(ht, 'Meu perfil', 'Heading/H1');
  await T(ht, 'Mantenha seu Elo atualizado para receber sugestões de dupla mais precisas.', 'Body/Default', 'text/secondary');
  const ha = box('H', { name: 'Ações', gap: 12, parent: head });
  button(ha, 'Fantasma', 'M', 'Cancelar');
  button(ha, 'Primário', 'M', 'Salvar alterações', 'check');

  const body = box('H', { name: 'Corpo', gap: 32, parent: ct });
  body.layoutSizingHorizontal = 'FILL';
  const form = box('V', { name: 'Formulário', fill: 'bg/surface', stroke: 'border/default', radius: 24, pad: 32, gap: 24, parent: body });
  form.layoutSizingHorizontal = 'FILL';
  const who = box('H', { name: 'Identidade', gap: 20, align: 'CENTER', parent: form });
  avatar(who, 'G', 'JC');
  const wt = box('V', { name: 'Texto', gap: 6, parent: who });
  await T(wt, 'Jacob', 'Heading/H2');
  tier(wt, 'Platina', 'Platina 3');
  await T(wt, 'Seu avatar usa as iniciais do seu nickname.', 'Body/Small', 'text/muted');
  divider(form);
  await T(form, 'Dados do jogador', 'Heading/H3');
  const r1 = row(form);
  input(r1, 'Nickname no jogo', 'Jacob', { icon: 'gamepad' });
  input(r1, 'E-mail', 'jacob@email.com', { icon: 'mail' });
  const r2 = row(form);
  input(r2, 'Elo atual no 2v2', '1820', { icon: 'trophy', help: 'Última atualização: 20/10/2026' });
  input(r2, 'Região', 'Brasil (BRZ)', { icon: 'globe', select: true });
  const lg = box('V', { name: 'Lendas favoritas', gap: 10, parent: form });
  lg.layoutSizingHorizontal = 'FILL';
  const lh = box('H', { name: 'Rótulo', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: lg });
  lh.layoutSizingHorizontal = 'FILL';
  await T(lh, 'Lendas favoritas (até 3)', 'Label/Default', 'text/secondary');
  await T(lh, '3 de 3 selecionadas', 'Label/Small', 'brand/primary');
  const ch = wrapRow(lg);
  for (const n of ['Hattori', 'Orion', 'Kor']) chip(ch, n, true);
  for (const n of ['Val', 'Ember', 'Jhala', 'Thatch', 'Mordex', 'Teros', 'Bödvar', 'Koji', 'Ada', 'Sidra']) chip(ch, n, false);
  chip(ch, '+ Ver todas', false);
  divider(form);
  await T(form, 'Contato e preferências', 'Heading/H3');
  const r3 = row(form);
  input(r3, 'Discord', 'jacob.bh', { icon: 'message' });
  input(r3, 'Horário em que costuma jogar', 'Noite (19h–23h)', { icon: 'clock', select: true });
  const tg = box('H', { name: 'Visibilidade', fill: 'bg/elevated', radius: 12, gap: 12, pad: 16, align: 'CENTER', parent: form });
  tg.layoutSizingHorizontal = 'FILL';
  const tgt = box('V', { name: 'Texto', gap: 2, parent: tg });
  tgt.layoutSizingHorizontal = 'FILL';
  await T(tgt, 'Mostrar meu Discord para outros jogadores', 'Label/Default', 'text/primary');
  await T(tgt, 'Se desligado, ninguém vê seu contato.', 'Body/Small', 'text/muted');
  toggle(tg, true);
  const bio = box('V', { name: 'Sobre você', gap: 8, parent: form });
  bio.layoutSizingHorizontal = 'FILL';
  await T(bio, 'Sobre você (opcional)', 'Label/Default', 'text/secondary');
  const ta = box('V', { name: 'Campo', fill: 'bg/input', stroke: 'border/default', radius: 10, pad: 14, parent: bio });
  ta.layoutSizingHorizontal = 'FILL';
  ta.resize(ta.width, 104); ta.layoutSizingVertical = 'FIXED'; ta.layoutSizingHorizontal = 'FILL';
  await T(ta, 'Ex-competitivo, cheguei ao top 7 do Brasil. Voltando ao ranqueado 2v2 e procurando dupla fixa para jogar à noite.', 'Body/Default', 'text/primary', { fill: true });
  await T(bio, '113/200', 'Body/Small', 'text/muted', { fill: true, align: 'RIGHT' });

  const pv = box('V', { name: 'Pré-visualização', gap: 16, w: 360, parent: body });
  await T(pv, 'Pré-visualização', 'Overline', 'text/muted');
  await T(pv, 'É assim que outros jogadores veem seu card na busca.', 'Body/Small', 'text/secondary', { fill: true });
  const me = playerCard(pv, { nick: 'Jacob', ini: 'JC', elo: 1820, tierTxt: 'Platina 3', compat: 'Você', diff: 'Seu Elo', legends: ['Hattori', 'Orion', 'Kor'], fill: true });
  const cl = me.findOne((x) => x.type === 'TEXT' && x.characters === 'compatível');
  if (cl) cl.visible = false;
  const tip = box('H', { name: 'Dica', fill: 'brand/accent-soft', radius: 12, gap: 10, pad: 16, parent: pv });
  tip.layoutSizingHorizontal = 'FILL';
  icon(tip, 'info', 18, 'brand/accent');
  await T(tip, 'Dica: atualize seu Elo sempre que terminar uma sessão de ranqueadas.', 'Body/Small', 'text/secondary', { fill: true });
  button(pv, 'Fantasma', 'M', 'Sair da conta', 'log-out');
  return scr;
}

// ---------- 07 · Dashboard ----------
async function buildDashboard() {
  const scr = screen('07 · Dashboard', SCREEN_X.s7);
  navbar(scr, 'Logado', 'Dashboard');
  const ct = box('V', { name: 'Conteúdo', pad: [40, 48, 64, 48], gap: 24, parent: scr });
  ct.layoutSizingHorizontal = 'FILL';

  const head = box('H', { name: 'Cabeçalho', justify: 'SPACE_BETWEEN', align: 'MAX', parent: ct });
  head.layoutSizingHorizontal = 'FILL';
  const ht = box('V', { name: 'Título', gap: 8, parent: head });
  await T(ht, 'Dashboard da comunidade', 'Heading/H1');
  await T(ht, 'Indicadores dos jogadores cadastrados no DuoFinder · atualizado em 22/10/2026', 'Body/Default', 'text/secondary');
  input(head, 'Região', 'Região: todas', { icon: 'globe', select: true, noLabel: true, w: 240 });

  const kr = row(ct);
  kpi(kr, 'Jogadores cadastrados', '1.248', '+86 este mês', 'users', false);
  kpi(kr, 'Com Elo compatível com você', '137', 'na sua faixa de ±150 de Elo', 'target', true);
  kpi(kr, 'Elo médio da comunidade', '1.412', 'equivale a Ouro 1', 'trophy', true);
  kpi(kr, 'Com Discord disponível', '74%', '924 jogadores', 'message', true);

  // Distribuição de Elo (colunas, uma série + destaque da divisão do usuário)
  const r2 = row(ct);
  const dist = await card(r2, null);
  await chartHeader(dist, 'Distribuição de Elo', 'Jogadores por divisão no 2v2', 'Sua divisão');
  const W = 828, top = 24, base = 264, maxV = 400, scaleY = (base - top) / maxV;
  const ch = figma.createFrame();
  ch.name = 'Gráfico'; ch.resize(W, 320); ch.fills = []; ch.clipsContent = false;
  dist.appendChild(ch);
  for (const v of [0, 100, 200, 300, 400]) {
    const y = base - v * scaleY;
    const g = figma.createRectangle(); g.name = 'Grade ' + v; g.resize(W - 44, 1); g.x = 44; g.y = y;
    g.fills = [paint(v === 0 ? 'border/strong' : 'chart/grid')]; ch.appendChild(g);
    const lt = await T(null, String(v), 'Label/Small', 'text/muted', { name: 'Eixo ' + v });
    ch.appendChild(lt); lt.textAutoResize = 'HEIGHT'; lt.resize(32, lt.height); lt.textAlignHorizontal = 'RIGHT'; lt.x = 0; lt.y = y - 8;
  }
  const tiers = [['Tin', '< 910', 96], ['Bronze', '910–1129', 212], ['Prata', '1130–1389', 338], ['Ouro', '1390–1679', 301], ['Platina', '1680–1999', 214], ['Diamante', '2000+', 87]];
  const slot = (W - 44) / tiers.length;
  for (let i = 0; i < tiers.length; i++) {
    const [nm, range, v] = tiers[i];
    const cx = 44 + slot * i + slot / 2;
    const h = v * scaleY;
    const bar = figma.createRectangle(); bar.name = 'Coluna ' + nm; bar.resize(24, h); bar.x = cx - 12; bar.y = base - h;
    bar.topLeftRadius = 4; bar.topRightRadius = 4;
    bar.fills = [paint(nm === 'Platina' ? 'brand/accent' : 'chart/bar')]; ch.appendChild(bar);
    const vl = await T(null, String(v), 'Label/Small', 'text/secondary', { name: 'Valor ' + nm });
    ch.appendChild(vl); vl.textAutoResize = 'HEIGHT'; vl.resize(80, vl.height); vl.textAlignHorizontal = 'CENTER'; vl.x = cx - 40; vl.y = base - h - 22;
    const xl = await T(null, nm, 'Label/Default', nm === 'Platina' ? 'text/primary' : 'text/secondary', { name: 'Divisão ' + nm });
    ch.appendChild(xl); xl.textAutoResize = 'HEIGHT'; xl.resize(110, xl.height); xl.textAlignHorizontal = 'CENTER'; xl.x = cx - 55; xl.y = base + 10;
    const rl = await T(null, range, 'Label/Small', 'text/muted', { name: 'Faixa ' + nm });
    ch.appendChild(rl); rl.textAutoResize = 'HEIGHT'; rl.resize(110, rl.height); rl.textAlignHorizontal = 'CENTER'; rl.x = cx - 55; rl.y = base + 32;
  }

  // Lendas mais escolhidas (barras horizontais)
  const leg = await card(r2, null, { w: 440 });
  await chartHeader(leg, 'Lendas mais escolhidas', '% de jogadores que têm a Lenda entre as favoritas', 'Suas Lendas');
  const lrows = box('V', { name: 'Barras', gap: 16, parent: leg });
  lrows.layoutSizingHorizontal = 'FILL';
  const mine = ['Hattori', 'Orion', 'Kor'];
  const ldata = [['Hattori', 18], ['Orion', 14], ['Kor', 11], ['Val', 9], ['Ember', 8], ['Jhala', 7]];
  for (let i = 0; i < ldata.length; i++) {
    const [nm, pct] = ldata[i];
    const it = box('V', { name: nm, gap: 6, parent: lrows });
    it.layoutSizingHorizontal = 'FILL';
    const lh = box('H', { name: 'Rótulo', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: it });
    lh.layoutSizingHorizontal = 'FILL';
    const ln = box('H', { name: 'Nome', gap: 8, align: 'CENTER', parent: lh });
    softSquare(ln, 22, i, nm[0], 11);
    await T(ln, nm, 'Label/Default', 'text/primary');
    await T(lh, pct + '%', 'Label/Default', 'text/secondary');
    hbar(it, 384, 8, pct / 20, mine.includes(nm) ? 'brand/accent' : 'chart/bar');
  }

  // Jogadores por região + mais compatíveis
  const r3 = row(ct);
  const reg = await card(r3, null);
  await chartHeader(reg, 'Jogadores por região', 'Total de 1.248 jogadores cadastrados', 'Sua região');
  const rrows = box('V', { name: 'Barras', gap: 14, parent: reg });
  rrows.layoutSizingHorizontal = 'FILL';
  const rdata = [['BRZ', 802, '64%'], ['US-E', 171, '14%'], ['EU', 118, '9%'], ['US-W', 79, '6%'], ['Outras', 78, '6%']];
  for (const [nm, n, pct] of rdata) {
    const it = box('H', { name: nm, gap: 16, align: 'CENTER', parent: rrows });
    it.layoutSizingHorizontal = 'FILL';
    await T(it, nm, 'Label/Default', 'text/primary', { w: 64 });
    hbar(it, 618, 10, n / 802, nm === 'BRZ' ? 'brand/accent' : 'chart/bar');
    await T(it, `${n} · ${pct}`, 'Label/Default', 'text/secondary', { w: 98, align: 'RIGHT' });
  }

  const top4 = await card(r3, null, { w: 440 });
  const th = box('H', { name: 'Topo', justify: 'SPACE_BETWEEN', align: 'CENTER', parent: top4 });
  th.layoutSizingHorizontal = 'FILL';
  await T(th, 'Mais compatíveis agora', 'Heading/H3');
  await T(th, 'Ver todos', 'Label/Default', 'brand/primary', { name: 'Link Ver todos' });
  const list = box('V', { name: 'Lista', gap: 0, parent: top4 });
  list.layoutSizingHorizontal = 'FILL';
  for (let i = 0; i < 4; i++) {
    const p = PLAYERS[i];
    const it = box('H', { name: p.nick, gap: 12, pad: [12, 0], align: 'CENTER', stroke: i < 3 ? 'border/default' : null, parent: list });
    it.layoutSizingHorizontal = 'FILL';
    if (i < 3) { it.strokeTopWeight = 0; it.strokeLeftWeight = 0; it.strokeRightWeight = 0; it.strokeBottomWeight = 1; }
    avatar(it, 'P', p.ini);
    const tx = box('V', { name: 'Texto', gap: 0, parent: it });
    tx.layoutSizingHorizontal = 'FILL';
    await T(tx, p.nick, 'Label/Default', 'text/primary');
    await T(tx, `${p.tierTxt} · ${p.elo}`, 'Label/Small', 'text/muted');
    raw(it, p.compat, 'Chakra Petch', 'Bold', 16, 'status/success', 20);
    button(it, 'Secundário', 'M', 'Ver');
  }
  return scr;
}

async function chartHeader(parent, title, sub, key) {
  const h = box('H', { name: 'Cabeçalho', justify: 'SPACE_BETWEEN', align: 'MIN', parent });
  h.layoutSizingHorizontal = 'FILL';
  const t = box('V', { name: 'Título', gap: 4, parent: h });
  await T(t, title, 'Heading/H3');
  await T(t, sub, 'Body/Small', 'text/muted');
  const k = box('H', { name: 'Legenda', gap: 8, align: 'CENTER', parent: h });
  const sw = figma.createRectangle(); sw.name = 'Amostra'; sw.resize(10, 10); sw.cornerRadius = 2; sw.fills = [paint('brand/accent')]; k.appendChild(sw);
  await T(k, key, 'Label/Small', 'text/secondary');
}

function hbar(parent, w, h, frac, color) {
  const tr = figma.createFrame();
  tr.name = 'Trilho'; tr.resize(w, h); tr.cornerRadius = h / 2; tr.fills = [paint('bg/elevated')]; tr.clipsContent = true;
  parent.appendChild(tr);
  const b = figma.createRectangle();
  b.name = 'Barra'; b.resize(Math.max(h, Math.round(w * Math.min(frac, 1))), h); b.cornerRadius = h / 2; b.fills = [paint(color)];
  tr.appendChild(b);
  return tr;
}

// ---------- 08 · Modal — Contato Discord ----------
async function buildModal() {
  const ov = figma.createFrame();
  ov.name = '08 · Modal — Contato Discord';
  ov.resize(1440, 1024);
  ov.x = SCREEN_X.s8; ov.y = 0;
  ov.fills = [paint('overlay/scrim')];
  ov.layoutMode = 'VERTICAL';
  ov.primaryAxisSizingMode = 'FIXED'; ov.counterAxisSizingMode = 'FIXED';
  ov.primaryAxisAlignItems = 'CENTER'; ov.counterAxisAlignItems = 'CENTER';

  const dlg = box('V', { name: 'Diálogo', fill: 'bg/surface', stroke: 'border/strong', radius: 24, pad: 28, gap: 20, w: 480, parent: ov });
  dlg.effects = shadow;
  const hd = box('H', { name: 'Topo', gap: 12, align: 'MIN', parent: dlg });
  hd.layoutSizingHorizontal = 'FILL';
  const ib = box('H', { name: 'Ícone', fill: 'discord/brand', radius: 12, w: 44, h: 44, align: 'CENTER', justify: 'CENTER', parent: hd });
  icon(ib, 'message', 22, 'text/primary');
  const ht = box('V', { name: 'Título', gap: 2, parent: hd });
  ht.layoutSizingHorizontal = 'FILL';
  await T(ht, 'Chamar Zyphr no Discord', 'Heading/H3');
  await T(ht, 'Adicione como amigo e combinem a dupla.', 'Body/Small', 'text/muted');
  const x = box('H', { name: 'Fechar (X)', fill: 'bg/elevated', radius: 8, w: 32, h: 32, align: 'CENTER', justify: 'CENTER', parent: hd });
  icon(x, 'x', 18, 'text/secondary');

  const hb = box('H', { name: 'Usuário', fill: 'bg/input', stroke: 'border/default', radius: 12, pad: [14, 16], gap: 12, align: 'CENTER', parent: dlg });
  hb.layoutSizingHorizontal = 'FILL';
  const hv = box('V', { name: 'Texto', gap: 2, parent: hb });
  hv.layoutSizingHorizontal = 'FILL';
  await T(hv, 'Usuário do Discord', 'Label/Small', 'text/muted');
  raw(hv, 'zyphr.bh', 'Chakra Petch', 'Bold', 22, 'text/primary', 28);
  button(hb, 'Secundário', 'M', 'Copiar', 'copy');

  const steps = box('V', { name: 'Passos', gap: 10, parent: dlg });
  steps.layoutSizingHorizontal = 'FILL';
  const lines = ['Abra o Discord e vá em “Adicionar amigo”', 'Cole o usuário e envie o pedido de amizade', 'Combinem o horário e partam para o 2v2 ranqueado'];
  for (let i = 0; i < lines.length; i++) {
    const l = box('H', { name: 'Passo ' + (i + 1), gap: 10, align: 'CENTER', parent: steps });
    l.layoutSizingHorizontal = 'FILL';
    const n = box('H', { name: 'Número', fill: 'bg/elevated', radius: 12, w: 24, h: 24, align: 'CENTER', justify: 'CENTER', parent: l });
    raw(n, String(i + 1), 'Chakra Petch', 'Bold', 12, 'text/secondary');
    await T(l, lines[i], 'Body/Small', 'text/secondary', { fill: true });
  }
  const note = box('H', { name: 'Aviso', fill: 'brand/accent-soft', radius: 12, gap: 10, pad: 12, parent: dlg });
  note.layoutSizingHorizontal = 'FILL';
  icon(note, 'info', 18, 'brand/accent');
  await T(note, 'O DuoFinder não tem chat próprio: a conversa acontece no Discord.', 'Body/Small', 'text/secondary', { fill: true });
  const ac = row(dlg, 12);
  button(ac, 'Fantasma', 'G', 'Fechar', null, true);
  button(ac, 'Discord', 'G', 'Abrir Discord', 'message', true);
  return ov;
}

// ---------- Capa ----------
async function buildCapa() {
  const c = box('V', { name: 'Capa', fill: 'bg/surface', stroke: 'border/default', radius: 24, pad: [40, 48], gap: 12, w: 1440 });
  c.x = 0; c.y = -420;
  await T(c, 'Projeto Individual · SPTech · Análise e Desenvolvimento de Sistemas', 'Overline', 'brand/primary');
  await T(c, 'Brawlhalla DuoFinder — Protótipo', 'Display/XL');
  await T(c, 'Plataforma web para encontrar parceiros de 2v2 ranqueado com Elo parecido. Fluxo principal: Início → Cadastro → Buscar dupla → Perfil do jogador → Contato via Discord. Use “Apresentar” (▶) para navegar pelo protótipo.', 'Body/Large', 'text/secondary', { w: 1100 });
  return c;
}

// ---------- Interações ----------
async function wireAll(page) {
  const F = (name) => page.children.find((n) => n.type === 'FRAME' && n.name === name);
  const s1 = F('01 · Início'), s2 = F('02 · Login'), s3 = F('03 · Cadastro'), s4 = F('04 · Buscar dupla');
  const s5 = F('05 · Perfil do jogador'), s6 = F('06 · Meu perfil'), s7 = F('07 · Dashboard'), s8 = F('08 · Modal — Contato Discord');
  const stats = { wired: 0, missing: [], errors: [] };
  const go = (dest, kind) => ({
    trigger: { type: 'ON_CLICK' },
    actions: [{ type: 'NODE', destinationId: dest.id, navigation: kind || 'NAVIGATE', transition: { type: 'DISSOLVE', easing: { type: 'EASE_OUT' }, duration: 0.25 }, preserveScrollPosition: false }],
  });
  const close = () => ({ trigger: { type: 'ON_CLICK' }, actions: [{ type: 'CLOSE' }] });
  async function wire(nodes, dest, kind, label) {
    const list = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);
    if (!list.length || (dest !== 'close' && !dest)) { stats.missing.push(label); return; }
    for (const n of list) {
      try { await n.setReactionsAsync([dest === 'close' ? close() : go(dest, kind)]); stats.wired++; }
      catch (e) { stats.errors.push(label + ': ' + e.message); }
    }
  }
  const byName = (root, name, type) => root ? root.findAll((n) => n.name === name && (!type || n.type === type)) : [];

  // Navbar (no componente principal: vale para todas as telas)
  const navV = C.nav.children.find((c) => c.name === 'Estado=Visitante');
  const navL = C.nav.children.find((c) => c.name === 'Estado=Logado');
  await wire(byName(navV, 'Botão Entrar'), s2, null, 'navbar Entrar');
  await wire(byName(navV, 'Botão Criar conta'), s3, null, 'navbar Criar conta');
  await wire(byName(navV, 'Link/Início'), s1, null, 'navbar Início');
  await wire(byName(navV, 'Logo', 'INSTANCE'), s1, null, 'navbar logo (visitante)');
  await wire(byName(navL, 'Logo', 'INSTANCE'), s4, null, 'navbar logo (logado)');
  await wire(byName(navL, 'Link/Buscar dupla'), s4, null, 'navbar Buscar dupla');
  await wire(byName(navL, 'Link/Dashboard'), s7, null, 'navbar Dashboard');
  await wire(byName(navL, 'Link/Meu perfil'), s6, null, 'navbar Meu perfil');
  await wire(byName(navL, 'Usuário'), s6, null, 'navbar usuário');

  // Card de jogador (componente principal: vale para todos os cards)
  await wire(byName(C.pc, 'Botão Ver perfil'), s5, null, 'card Ver perfil');
  await wire(byName(C.pc, 'Botão Discord'), s8, 'OVERLAY', 'card Discord');

  // Telas
  await wire(byName(s1, 'Botão Criar conta grátis'), s3, null, 'início Criar conta grátis');
  await wire(byName(s1, 'Botão Já tenho conta'), s2, null, 'início Já tenho conta');
  await wire(byName(s1, 'Botão Chamar no Discord'), s3, null, 'início Chamar no Discord');
  await wire(byName(s2, 'Link Criar conta'), s3, null, 'login Criar conta');
  await wire(byName(s2, 'Botão Entrar'), s4, null, 'login Entrar');
  await wire(byName(s2, 'Logo', 'INSTANCE'), s1, null, 'login logo');
  await wire(byName(s3, 'Botão Entrar'), s2, null, 'cadastro Entrar');
  await wire(byName(s3, 'Botão Criar conta'), s4, null, 'cadastro Criar conta');
  await wire(byName(s3, 'Logo', 'INSTANCE'), s1, null, 'cadastro logo');
  await wire(byName(s5, 'Voltar'), s4, null, 'perfil Voltar');
  await wire(byName(s5, 'Botão Chamar no Discord'), s8, 'OVERLAY', 'perfil Discord');
  await wire(byName(s6, 'Botão Cancelar'), s4, null, 'meu perfil Cancelar');
  await wire(byName(s6, 'Botão Salvar alterações'), s4, null, 'meu perfil Salvar');
  await wire(byName(s6, 'Botão Sair da conta'), s1, null, 'meu perfil Sair');
  await wire(byName(s7, 'Botão Ver'), s5, null, 'dashboard Ver');
  await wire(byName(s7, 'Link Ver todos'), s4, null, 'dashboard Ver todos');
  await wire(byName(s8, 'Fechar (X)'), 'close', null, 'modal X');
  await wire(byName(s8, 'Botão Fechar'), 'close', null, 'modal Fechar');
  await wire(byName(s8, 'Botão Abrir Discord'), 'close', null, 'modal Abrir Discord');

  if (s1) page.flowStartingPoints = [{ nodeId: s1.id, name: 'Fluxo principal' }];
  return stats;
}

// ---------- main ----------
async function main() {
  const page = figma.root.children.find((p) => p.name === '🎮 Protótipo') || figma.currentPage;
  await figma.setCurrentPageAsync(page);
  await Promise.all(FONTS.map(([family, style]) => figma.loadFontAsync({ family, style })));
  V = Object.fromEntries((await figma.variables.getLocalVariablesAsync('COLOR')).map((v) => [v.name, v]));
  S = Object.fromEntries((await figma.getLocalTextStylesAsync()).map((s) => [s.name, s]));
  for (const [k, id] of Object.entries(COMP_IDS)) {
    C[k] = await figma.getNodeByIdAsync(id);
    if (!C[k]) throw new Error('Componente não encontrado (' + k + '). Rode o plugin no arquivo "Brawlhalla DuoFinder — Protótipo".');
  }
  for (const [k, id] of Object.entries(ICON_IDS)) I[k] = await figma.getNodeByIdAsync(id);
  K.chip = Object.keys(C.chip.componentPropertyDefinitions).find((k) => k.startsWith('Texto'));
  K.av = Object.keys(C.av.componentPropertyDefinitions).find((k) => k.startsWith('Iniciais'));

  const exists = (name) => page.children.some((n) => n.name === name);
  const built = [], skipped = [], failed = [];
  const steps = [
    ['04 · Buscar dupla', buildBusca],
    ['05 · Perfil do jogador', buildPerfil],
    ['06 · Meu perfil', buildMeuPerfil],
    ['07 · Dashboard', buildDashboard],
    ['08 · Modal — Contato Discord', buildModal],
    ['Capa', buildCapa],
  ];
  for (const [name, fn] of steps) {
    if (exists(name)) { skipped.push(name); continue; }
    try { await fn(); built.push(name); }
    catch (e) { failed.push(name + ': ' + e.message); console.error(name, e); }
  }

  // Ajuste da tela 01: degradês sobre variáveis escureciam o banner final
  const s1 = page.children.find((n) => n.name === '01 · Início');
  if (s1) {
    const banner = s1.findOne((n) => n.name === 'Banner');
    if (banner) banner.fills = [paint('bg/elevated')];
    const hero = s1.findOne((n) => n.name === 'Hero');
    if (hero) hero.fills = [paint('bg/base')];
  }
  page.backgrounds = [{ type: 'SOLID', color: { r: 0.03, g: 0.04, b: 0.07 } }];

  const w = await wireAll(page);
  console.log({ built, skipped, failed, wiring: w });
  const parts = [`${built.length} tela(s) criada(s)`, `${w.wired} interações ligadas`];
  if (skipped.length) parts.push(`${skipped.length} já existiam`);
  if (failed.length || w.errors.length || w.missing.length) parts.push(`avisos: ${failed.length + w.errors.length + w.missing.length} (veja o console)`);
  return parts.join(' · ');
}

main()
  .then((msg) => figma.closePlugin('✅ DuoFinder: ' + msg))
  .catch((e) => { console.error(e); figma.closePlugin('❌ Erro: ' + e.message); });
