/* ---------- Icons ---------- */
const I = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  doc:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="m9 15 2 2 4-4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6 6 0 0 1 3.5 6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  scan:'<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/>',
  logout:'<path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  upload:'<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  check:'<path d="m5 12 5 5 9-10"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  truck:'<path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
  sound:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>',
  mute:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="m17 9 4 6M21 9l-4 6"/>',
  reset:'<path d="M4 4v5h5"/><path d="M5.5 15a7.5 7.5 0 1 0 .5-7L4 9"/>',
  back:'<path d="m9 6 6 6-6 6"/>',
  chev:'<path d="m15 6-6 6 6 6"/>',
  bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  pin:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  height:'<path d="M12 3v18"/><path d="m8 7 4-4 4 4"/><path d="m8 17 4 4 4-4"/>',
  flame:'<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1.5 1 3 2.5 3-3z"/>',
};
const icon = (n, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;

/* ---------- Helpers ---------- */
const DAY = 86400000;
const today = new Date(); today.setHours(0,0,0,0);
const iso = x => x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
const d = n => iso(new Date(today.getTime()+n*DAY));
const fmt = s => { const [y,m,dd] = s.split('-'); return `${dd}/${m}/${y}`; };
const daysTo = s => Math.round((new Date(s+'T00:00:00') - today)/DAY);
const time = t => new Date(t).toLocaleTimeString('he-IL',{hour:'2-digit',minute:'2-digit'});
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = id => document.getElementById(id);
const initials = name => name.split(' ').map(w => w[0]).slice(0,2).join('');

const CERTS = { security:'אישור ביטחוני', height:'עבודה בגובה', hazmat:'הובלת חומ"ס' };
const CERT_ICON = { security:'shield', height:'height', hazmat:'flame' };
const UPLOADABLE = ['height','hazmat'];
const COLOR_WORD = { white:'לבן', yellow:'צהוב', red:'אדום' };
/* ---------- Branding: the only place to change when adapting to a real company ---------- */
const BRAND = {
  name: ['Fuel', 'Gate'],           // wordmark: first part in brand color, second in accent
  tagline: 'שער דיגיטלי למסופי דלק',
  terminal: 'מסוף 1',               // terminal of this gate station; drivers can pass through several terminals a day
};
const TERMINAL = BRAND.terminal;
const brandWord = () => `${esc(BRAND.name[0])}<span>${esc(BRAND.name[1])}</span>`;
const brandMark = (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5c3.2 4.2 6.5 7.8 6.5 11.5a6.5 6.5 0 0 1-13 0c0-3.7 3.3-7.3 6.5-11.5z" fill="#fff"/><path d="m9 14.2 2.2 2.2 4-4.4" stroke="#16A34A" stroke-width="2.4"/></svg>`;

/* ---------- Demo data ---------- */
function seed(){
  const V = (n,num) => ({status:'valid', expiry:d(n), number:num, img:null, pending:null});
  const M = () => ({status:'missing', expiry:null, number:null, img:null, pending:null});
  const ago = m => new Date(Date.now() - m*60000);
  const drivers = [
    {id:1,name:'יוסי כהן',tz:'300000011',company:'הובלות הצפון',phone:'050-1111111',user:'yossi',approved:true,inside:false,last:null,notes:[],
     certs:{security:V(210,'SEC-4471'),height:V(95,'H-2290'),hazmat:V(160,'HZ-8812')}},
    {id:2,name:'דני לוי',tz:'300000029',company:'דלק-טרנס',phone:'050-2222222',user:'dani',approved:true,inside:false,last:ago(48),notes:[],
     certs:{security:V(300,'SEC-1180'),height:V(-10,'H-1022'),hazmat:V(120,'HZ-3301')}},
    {id:3,name:'מוחמד חטיב',tz:'300000037',company:'הובלות הגליל',phone:'050-3333333',user:'mohamad',approved:true,inside:false,last:null,notes:[],
     certs:{security:V(250,'SEC-7781'),height:V(200,'H-5521'),hazmat:V(12,'HZ-7720')}},
    {id:4,name:'אבי מזרחי',tz:'300000045',company:'מכליות המרכז',phone:'050-4444444',user:'avi',approved:true,inside:false,last:null,notes:[],
     certs:{security:M(),height:V(180,'H-6610'),hazmat:V(90,'HZ-1209')}},
    {id:5,name:'רונן פרץ',tz:'300000052',company:'הובלות הדרום',phone:'050-5555555',user:'ronen',approved:false,inside:false,last:null,notes:[],
     certs:{security:M(),height:M(),hazmat:M()}},
    {id:6,name:'שלומי ביטון',tz:'300000060',company:'הובלות הצפון',phone:'050-6666666',user:'shlomi',approved:true,inside:true,last:ago(95),notes:[],
     certs:{security:V(330,'SEC-3320'),height:V(240,'H-8890'),hazmat:V(280,'HZ-4456')}},
    {id:7,name:'איגור פטרוב',tz:'300000078',company:'דלק-טרנס',phone:'050-7777777',user:'igor',approved:true,inside:false,last:null,notes:[],
     certs:{security:V(150,'SEC-9902'),height:V(140,'H-3378'),
            hazmat:{...M(), pending:{expiry:d(365),number:'HZ-9051',img:null,at:ago(30)}}}},
    {id:8,name:'משה אוחיון',tz:'300000086',company:'מכליות המרכז',phone:'050-8888888',user:'moshe',approved:true,inside:false,last:null,notes:[],
     certs:{security:V(190,'SEC-5567'),height:V(25,'H-4401'),hazmat:V(220,'HZ-6634')}},
  ];
  const log = [
    {t:ago(48),id:2,name:'דני לוי',color:'red',ok:false,action:'נדחה',method:'QR',terminal:TERMINAL,reason:'עבודה בגובה — פג תוקף ('+fmt(d(-10))+')'},
    {t:ago(95),id:6,name:'שלומי ביטון',color:'white',ok:true,action:'כניסה',method:'QR',terminal:TERMINAL},
  ];
  return {drivers, log, lastScan:null, nextId:9};
}

let state = seed();
let ui;
function resetUi(){ ui = {tab:'driver', dview:'login', currentId:null, filter:'all', q:'', sound: ui ? ui.sound : true, qr:null, result:null, uploadKey:'height', uploadImg:null}; }
resetUi();

const byId = id => state.drivers.find(x => x.id === id);
const cur = () => byId(ui.currentId);

/* ---------- Status engine ---------- */
function evalD(dr){
  const issues = [], warnings = [];
  for (const k of Object.keys(CERTS)){
    const c = dr.certs[k];
    if (c.status !== 'valid'){
      issues.push({k, label:CERTS[k], text: c.pending ? 'ממתין לאישור מנהל המסוף' : 'חסר'});
    } else {
      const n = daysTo(c.expiry);
      if (n < 0) issues.push({k, label:CERTS[k], text:'פג תוקף ('+fmt(c.expiry)+')' + (c.pending ? ' — חידוש ממתין לאישור' : '')});
      else if (n <= 30) warnings.push({k, label:CERTS[k], days:n, expiry:c.expiry});
    }
  }
  const color = !dr.approved ? 'yellow' : issues.length ? 'red' : 'white';
  return {color, issues, warnings};
}
function certPill(c){
  if (c.status !== 'valid') return c.pending ? '<span class="pill wait">ממתין לאישור</span>' : '<span class="pill bad">חסר</span>';
  const n = daysTo(c.expiry);
  if (c.pending) return '<span class="pill wait">חידוש ממתין</span>';
  if (n < 0) return '<span class="pill bad">פג תוקף</span>';
  if (n <= 30) return '<span class="pill soon">פוקע בקרוב</span>';
  return '<span class="pill ok">תקין</span>';
}
function expText(c){
  if (c.status !== 'valid') return c.pending ? 'הועלה מסמך — ממתין לבדיקה' : 'אין אישור במערכת';
  const n = daysTo(c.expiry);
  if (n < 0) return 'פג ב-' + fmt(c.expiry);
  return 'בתוקף עד ' + fmt(c.expiry) + (n <= 30 ? ` · עוד ${n} ימים` : '');
}

/* ---------- Sound (white = continuous beep, else 3 short beeps) ---------- */
let ac;
function tone(t, dur, f){
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = 'square'; o.frequency.value = f;
  g.gain.setValueAtTime(0.06, t); g.gain.setValueAtTime(0, t + dur);
  o.connect(g).connect(ac.destination); o.start(t); o.stop(t + dur + 0.02);
}
function beep(ok){
  if (!ui.sound) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const t = ac.currentTime + 0.02;
    if (ok) tone(t, 0.9, 1000);
    else [0, 0.22, 0.44].forEach(o => tone(t + o, 0.12, 1400));
  } catch(e){}
}

/* ---------- Gate actions ---------- */
function scan(id, method){
  const dr = byId(id), ev = evalD(dr);
  let e;
  if (ev.color === 'white'){
    dr.inside = !dr.inside;
    e = {ok:true, color:'white', action: dr.inside ? 'כניסה' : 'יציאה'};
  } else {
    e = {ok:false, color:ev.color, action:'נדחה',
         reason: ev.color === 'yellow' ? 'הנהג לא רשום / ממתין לאישור רישום' : ev.issues.map(i => i.label + ' — ' + i.text).join(' · ')};
  }
  Object.assign(e, {t:new Date(), id:dr.id, name:dr.name, method, terminal:TERMINAL});
  dr.last = e.t;
  state.log.unshift(e); state.lastScan = e;
  beep(e.ok);
  return e;
}
function scanUnknown(){
  const e = {t:new Date(), id:null, name:'קוד לא מזוהה', color:'yellow', ok:false, action:'נדחה', method:'QR', terminal:TERMINAL, reason:'הקוד לא קיים במערכת — יש לבדוק ת"ז ידנית'};
  state.log.unshift(e); state.lastScan = e; beep(false);
}

/* ---------- Placeholder certificate image ---------- */
function certImg(dr, k, c){
  if (c && c.img) return c.img;
  const num = esc((c && c.number) || '—'), exp = c && c.expiry ? fmt(c.expiry) : '—';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="210" viewBox="0 0 320 210">
  <rect width="320" height="210" rx="12" fill="#FCFCFE" stroke="#D6DBE6"/>
  <rect x="0" y="0" width="320" height="8" rx="4" fill="#1B2C7E"/>
  <text x="22" y="34" font-family="Arial" font-size="13" font-weight="700" fill="#1B2C7E">${esc(BRAND.name[0].toUpperCase())}<tspan fill="#16A34A">${esc(BRAND.name[1].toUpperCase())}</tspan></text>
  <text x="298" y="46" font-family="Arial" font-size="19" font-weight="700" text-anchor="end" fill="#0E1633">תעודת ${esc(CERTS[k])}</text>
  <text x="298" y="82" font-family="Arial" font-size="14" text-anchor="end" fill="#344054">שם: ${esc(dr.name)}</text>
  <text x="298" y="106" font-family="Arial" font-size="14" text-anchor="end" fill="#344054">ת.ז: ${esc(dr.tz)}</text>
  <text x="298" y="130" font-family="Arial" font-size="14" text-anchor="end" fill="#344054">מס׳ אישור: ${num}</text>
  <text x="298" y="154" font-family="Arial" font-size="14" text-anchor="end" fill="#344054">בתוקף עד: ${exp}</text>
  <circle cx="64" cy="140" r="34" fill="none" stroke="#16A34A" stroke-width="3" opacity=".8"/>
  <text x="64" y="145" font-family="Arial" font-size="13" text-anchor="middle" fill="#16A34A">חותמת</text>
  <text x="160" y="198" font-family="Arial" font-size="10" text-anchor="middle" fill="#98A2B3">מסמך דוגמה פיקטיבי</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* ---------- Pseudo QR (visual only) ---------- */
function newQr(){
  const token = Math.random().toString(16).slice(2,10).toUpperCase();
  ui.qr = {token, seed: Math.floor(Math.random()*1e9), exp: Date.now() + 30000};
}
function drawQr(){
  const cv = $('qr'); if (!cv || !ui.qr) return;
  const n = 25, s = cv.width / n, ctx = cv.getContext('2d');
  let x = ui.qr.seed;
  const rnd = () => (x = (x * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, cv.width, cv.width);
  const inFinder = (r,c) => (r < 8 && c < 8) || (r < 8 && c >= n-8) || (r >= n-8 && c < 8);
  ctx.fillStyle = '#0E1633';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++)
    if (!inFinder(r,c) && rnd() < 0.47) ctx.fillRect(c*s, r*s, s, s);
  [[0,0],[0,n-7],[n-7,0]].forEach(([r,c]) => {
    ctx.fillStyle = '#1B2C7E'; ctx.fillRect(c*s, r*s, 7*s, 7*s);
    ctx.fillStyle = '#fff';    ctx.fillRect((c+1)*s, (r+1)*s, 5*s, 5*s);
    ctx.fillStyle = '#16A34A'; ctx.fillRect((c+2)*s, (r+2)*s, 3*s, 3*s);
  });
}
setInterval(() => {
  if (ui.tab !== 'driver' || ui.dview !== 'qr' || !ui.qr) return;
  let left = Math.ceil((ui.qr.exp - Date.now()) / 1000);
  if (left <= 0){
    newQr(); left = 30;
    const cv = $('qr');
    if (cv){ cv.style.opacity = 0; setTimeout(() => { drawQr(); cv.style.opacity = 1; }, 220); }
    const tk = $('qrToken'); if (tk) tk.textContent = ui.qr.token;
  }
  const el = $('qrCount'); if (el) el.textContent = left;
}, 250);

/* ---------- Shared pieces ---------- */
function bannerHtml(e){
  if (!e) return `<div class="banner idle">${icon('scan',22)}<div style="margin-top:6px">ממתין לסריקה בשער…</div></div>`;
  const title = e.ok ? `${e.action} מאושרת` : (e.color === 'yellow' ? 'לא רשום במערכת' : 'כניסה נחסמה');
  const fresh = Date.now() - new Date(e.t).getTime() < 1500 ? 'fresh' : '';
  return `<div class="banner ${e.color} ${fresh}">
    <div class="b-top"><span class="dot ${e.color}"></span><b>${esc(e.name)}</b><span class="muted">${time(e.t)} · ${esc(e.method)}</span></div>
    <div class="b-where">${icon('pin',14)}${esc(e.terminal)}</div>
    <div class="b-title">${title}</div>
    ${e.reason ? `<div class="b-reason">${esc(e.reason)}</div>` : ''}
    <div class="b-beep">${icon('sound',14)}${e.ok ? 'ביפ רצוף' : '3 ביפים קצרים'}</div>
  </div>`;
}
function logHtml(limit){
  const items = state.log.slice(0, limit);
  if (!items.length) return '<p class="muted small">אין אירועים עדיין.</p>';
  return '<ul class="log">' + items.map(e => `<li><span class="dot ${e.color}"></span><span><b>${esc(e.name)}</b> · ${esc(e.action)}<span class="tag">${esc(e.method)}</span><div class="small muted">${icon('pin',12)} ${esc(e.terminal)}</div></span><span class="t">${time(e.t)}</span></li>`).join('') + '</ul>';
}
function toast(msg){
  const t = $('toast'); t.innerHTML = icon('check',18) + '<span>' + esc(msg) + '</span>';
  t.classList.remove('hidden'); t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
  clearTimeout(toast._h); toast._h = setTimeout(() => t.classList.add('hidden'), 2600);
}
function openModal(html){ $('modalBox').innerHTML = html; $('modal').classList.remove('hidden'); }
function closeModal(){ $('modal').classList.add('hidden'); $('modalBox').innerHTML = ''; }

/* ---------- Tabs ---------- */
function pendingDocs(){
  const items = [];
  state.drivers.forEach(dr => Object.keys(CERTS).forEach(k => { const p = dr.certs[k].pending; if (p) items.push({dr, k, p}); }));
  return items;
}
function renderTabs(){
  const docs = pendingDocs().length, regs = state.drivers.filter(x => !x.approved).length;
  const TABS = [['driver','אפליקציית נהג','phone',0],['guard','עמדת מאבטח','shield',0],['manager','מנהל מסוף','doc',docs],['admin','מנהל מערכת','users',regs]];
  $('tabs').innerHTML = TABS.map(([k,l,ic,b]) => `<button class="tab ${ui.tab===k?'active':''}" data-act="tab" data-k="${k}">${icon(ic,16)}${l}${b?`<span class="badge">${b}</span>`:''}</button>`).join('');
}

/* ---------- Driver app ---------- */
const head = (title, backTo) => `<div class="app-head">${backTo ? `<button class="link" data-act="${backTo}">${icon('back',18)}חזרה</button>` : '<span style="width:60px"></span>'}<b>${title}</b><span style="width:60px"></span></div>`;
const bnav = active => `<nav class="bnav">${[['home','בית','home'],['certs','אישורים','doc'],['profile','פרופיל','user']].map(([k,l,ic]) => `<button class="${active===k?'active':''}" data-act="nav" data-k="${k}">${icon(ic,20)}${l}</button>`).join('')}</nav>`;

function phoneScreen(){
  if (ui.dview !== 'login' && ui.dview !== 'register' && !cur()) ui.dview = 'login';
  const dr = cur();
  switch (ui.dview){
    case 'login': {
      const opts = state.drivers.map(x => `<option value="${x.id}">${esc(x.user)} — ${esc(x.name)} (${COLOR_WORD[evalD(x).color]})</option>`).join('');
      return `<div class="screen-body">
        <div class="login-hero"><div class="logo">${brandMark(34)}</div><div class="wordtext lg">${brandWord()}</div><div class="small muted" style="margin-bottom:18px">${esc(BRAND.tagline)}</div><h2 style="font-size:24px">ברוך הבא</h2><p class="muted" style="margin:0">התחבר כדי להיכנס למסוף</p></div>
        <label for="loginUser">שם משתמש</label>
        <select id="loginUser" class="field">${opts}</select>
        <label for="loginPass">סיסמה</label>
        <input id="loginPass" class="field" type="password" value="demo-demo" autocomplete="off">
        <div style="margin-top:20px"><button class="btn wide" data-act="login">התחבר</button></div>
        <p class="center muted" style="margin-top:18px">נהג חדש? <a data-act="go-register">הרשמה למערכת</a></p>
        <div class="hint" style="margin-top:12px">בהדגמה: בחר נהג מהרשימה כדי לראות מצבים שונים: לבן, צהוב ואדום.</div>
      </div>`;
    }
    case 'register':
      return head('הרשמה','go-login') + `<div class="screen-body">
        <p class="muted small" style="margin-top:0">אחרי ההרשמה הבקשה עוברת לאישור מנהל מערכת. עד האישור הסטטוס בשער יהיה צהוב.</p>
        <label for="rName">שם מלא</label><input id="rName" class="field">
        <label for="rTz">תעודת זהות</label><input id="rTz" class="field" inputmode="numeric" maxlength="9">
        <label for="rCompany">חברת הובלה</label><input id="rCompany" class="field">
        <label for="rPhone">טלפון</label><input id="rPhone" class="field" inputmode="tel">
        <label for="rUser">שם משתמש</label><input id="rUser" class="field" autocomplete="off">
        <div style="margin-top:20px"><button class="btn wide" data-act="register">שלח בקשת הרשמה</button></div>
      </div>`;
    case 'qr':
      return head(dr.inside ? 'יציאה' : 'כניסה','home') + `<div class="screen-body center">
        <p style="margin:4px 0 0;font-weight:600">הצג את הקוד לסורק בשער</p>
        <div class="qr-box"><canvas id="qr" width="225" height="225"></canvas></div>
        <div><span class="ring">${icon('clock',15)}מתחלף בעוד <b id="qrCount">30</b> שניות</span></div>
        <div class="mono small muted" id="qrToken" style="margin-top:10px">${ui.qr.token}</div>
        <p class="small muted">קוד שמתחלף = אי אפשר לצלם ולהעביר לנהג אחר</p>
        <button class="btn wide" data-act="sim-scan" style="margin-top:8px">${icon('scan',18)}סימולציה: הסורק בשער קרא את הקוד</button>
      </div>`;
    case 'result': {
      const e = ui.result;
      const cls = e.ok ? 'ok' : e.color === 'yellow' ? 'warn' : 'bad';
      const title = e.ok ? `${e.action} אושרה` : 'הכניסה לא אושרה';
      const sub = e.ok ? (e.action === 'כניסה' ? 'השער נפתח. נסיעה בטוחה.' : 'יציאה נרשמה. להתראות.') : 'יש לגשת לעמדת הביטחון';
      const ev = evalD(dr);
      const fixKey = ev.issues.find(i => UPLOADABLE.includes(i.k))?.k;
      return head('שער דיגיטלי') + `<div class="screen-body"><div class="result">
        <div class="icon ${cls}">${icon(e.ok ? 'check' : 'x', 56)}</div>
        <h2 style="margin-top:14px">${title}</h2><p class="muted" style="margin:0">${sub}</p>
        ${!e.ok && e.reason ? `<div class="alert bad" style="margin-top:14px;width:100%;text-align:right">${icon('alert',18)}<span class="grow">${esc(e.reason)}</span></div>` : ''}
        ${!e.ok && ev.color === 'red' && fixKey ? `<button class="btn wide" data-act="go-upload" data-k="${fixKey}">${icon('upload',18)}העלאת אישור מעודכן</button>` : ''}
        <button class="btn sec wide" data-act="home" style="margin-top:4px">חזרה למסך הבית</button>
      </div></div>`;
    }
    case 'upload': {
      const opts = UPLOADABLE.map(k => `<option value="${k}" ${ui.uploadKey===k?'selected':''}>${CERTS[k]}</option>`).join('');
      return head('העלאת אישור','certs') + `<div class="screen-body">
        <p class="muted small" style="margin-top:0">אחרי ההדרכה במסוף, צלם את האישור שהודפס לך. האישור ייכנס לתוקף רק אחרי שמנהל המסוף יבדוק אותו.</p>
        <label for="uType">סוג אישור</label><select id="uType" class="field">${opts}</select>
        <label for="uNum">מספר אישור</label><input id="uNum" class="field" placeholder="לדוגמה H-1234">
        <label for="uExp">בתוקף עד</label><input id="uExp" class="field" type="date" min="${d(1)}" value="${d(365)}">
        <label for="uFile">צילום האישור</label><input id="uFile" class="field" type="file" accept="image/*">
        <img id="uPrev" class="preview ${ui.uploadImg ? '' : 'hidden'}" src="${ui.uploadImg || ''}" alt="תצוגה מקדימה של האישור">
        <p class="small muted">אישור ביטחוני לא מועלה ע״י הנהג. הוא מונפק ע״י הביטחון בלבד.</p>
        <div style="margin-top:14px"><button class="btn wide" data-act="upload">${icon('upload',18)}שלח לאישור</button></div>
      </div>`;
    }
    case 'certs': {
      const certs = Object.keys(CERTS).map(k => {
        const c = dr.certs[k];
        const action = UPLOADABLE.includes(k)
          ? `<button class="btn sm ${c.status==='valid' && daysTo(c.expiry) > 30 && !c.pending ? 'sec' : ''}" data-act="go-upload" data-k="${k}" ${c.pending ? 'disabled' : ''}>${c.status==='valid' ? 'חידוש' : 'העלאה'}</button>`
          : '';
        return `<div class="cert-item"><div class="ci">${icon(CERT_ICON[k],20)}</div><div class="grow"><b>${CERTS[k]} ${certPill(c)}</b><span class="small muted">${expText(c)}</span>${k==='security'?'<div class="small muted">מונפק ע״י הביטחון</div>':''}</div>${action}</div>`;
      }).join('');
      return head('האישורים שלי') + `<div class="screen-body">${certs}<p class="small muted">תקבל תזכורת 30 יום לפני שאישור פוקע.</p></div>` + bnav('certs');
    }
    case 'profile':
      return head('פרופיל') + `<div class="screen-body">
        <div class="center" style="padding:10px 0 18px"><div class="avatar" style="width:72px;height:72px;font-size:24px;margin:0 auto 10px">${esc(initials(dr.name))}</div><h2 style="margin:0">${esc(dr.name)}</h2><div class="muted">${esc(dr.company)}</div></div>
        <div class="profile">
          <div><span class="muted">שם משתמש</span><b>${esc(dr.user)}</b></div>
          <div><span class="muted">תעודת זהות</span><b class="mono">${esc(dr.tz)}</b></div>
          <div><span class="muted">טלפון</span><b>${esc(dr.phone)}</b></div>
          <div><span class="muted">סטטוס בשער</span><b><span class="dot ${evalD(dr).color}"></span>${COLOR_WORD[evalD(dr).color]}</b></div>
        </div>
        <button class="btn sec wide" data-act="logout" style="margin-top:18px">${icon('logout',18)}התנתק</button>
      </div>` + bnav('profile');
    default: { // home
      const ev = evalD(dr);
      const titles = {white:'מאושר לכניסה', yellow:'הרישום ממתין לאישור', red:'הכניסה חסומה'};
      const subs = {white:'כל האישורים בתוקף', yellow:'מנהל המערכת עדיין לא אישר את הרישום שלך', red:'חסרים אישורים:'};
      const notes = dr.notes.map((n,i) => `<div class="alert bad">${icon('bell',18)}<span class="grow">${esc(n)}</span><a data-act="dismiss-note" data-i="${i}">סגור</a></div>`).join('');
      const warns = ev.warnings.map(w => `<div class="alert soon">${icon('clock',18)}<span class="grow">${esc(w.label)} פוקע בעוד ${w.days} ימים (${fmt(w.expiry)}). כדאי לקבוע הדרכה.</span></div>`).join('');
      const okCount = Object.values(dr.certs).filter(c => c.status === 'valid' && daysTo(c.expiry) >= 0).length;
      return `<div class="app-head"><div class="hello"><div class="avatar">${esc(initials(dr.name))}</div><div><b>שלום, ${esc(dr.name.split(' ')[0])}</b><div class="small muted">${esc(dr.company)}</div></div></div><span class="dot ${ev.color}"></span></div>
      <div class="screen-body">
        ${notes}
        <div class="status-card ${ev.color}">
          <div class="st"><span class="dot ${ev.color}"></span>${titles[ev.color]}</div>
          <div class="small">${subs[ev.color]}</div>
          ${ev.color === 'red' ? '<ul>' + ev.issues.map(i => `<li>${esc(i.label)} — ${esc(i.text)}</li>`).join('') + '</ul>' : ''}
        </div>
        ${warns}
        <div class="big-wrap"><button class="big-btn" data-act="go-qr"><span>${dr.inside ? 'יציאה' : 'כניסה'}<small>לחץ להצגת קוד</small></span></button></div>
        <div class="where"><span>${icon('pin',14)}${dr.inside ? 'אתה בתוך המתקן' : 'אתה מחוץ למתקן'}</span></div>
        <div class="summary" data-act="nav" data-k="certs"><div><b>האישורים שלי</b><div class="small muted">${okCount} מתוך 3 בתוקף${ev.warnings.length ? ` · ${ev.warnings.length} פוקע בקרוב` : ''}</div></div>${icon('chev',20)}</div>
      </div>` + bnav('home');
    }
  }
}
function renderDriver(){
  return `<div class="driver-wrap">
    <div class="phone"><div class="screen">${phoneScreen()}</div></div>
    <section class="card monitor">
      <h3><span class="live"></span>מה המאבטח רואה בשער, בזמן אמת</h3>
      ${bannerHtml(state.lastScan)}
      <h3 style="margin-top:18px">${icon('clock',16)}יומן אחרון</h3>
      ${logHtml(6)}
      <div class="hint"><b>תרחישי הדגמה מומלצים:</b>
        <ol>
          <li><b>yossi</b>: הכל תקין, כניסה עם ביפ רצוף.</li>
          <li><b>dani</b>: עבודה בגובה פג, אדום ו-3 ביפים. מעלה אישור חדש, מאשרים בלשונית "מנהל מסוף", והוא הופך ללבן.</li>
          <li><b>ronen</b>: הרישום לא אושר, צהוב. מאשרים בלשונית "מנהל מערכת".</li>
          <li><b>mohamad</b>: תקין, אבל מקבל תזכורת על אישור שפוקע בעוד 12 ימים.</li>
        </ol>
      </div>
    </section>
  </div>`;
}

/* ---------- Guard station ---------- */
function filteredDrivers(){
  const q = ui.q.trim().toLowerCase();
  return state.drivers.filter(dr => {
    const c = evalD(dr).color;
    if (ui.filter === 'inside' && !dr.inside) return false;
    if (['white','yellow','red'].includes(ui.filter) && c !== ui.filter) return false;
    if (!q) return true;
    return [dr.name, dr.tz, dr.company, dr.user].some(v => String(v).toLowerCase().includes(q));
  });
}
function guardRows(){
  const list = filteredDrivers();
  if (!list.length) return `<tr><td colspan="8" class="empty">לא נמצא נהג. אפשר להוסיף נהג חדש מהכפתור למעלה.</td></tr>`;
  const order = {red:0, yellow:1, white:2};
  return list.slice().sort((a,b) => order[evalD(a).color] - order[evalD(b).color]).map(dr => {
    const ev = evalD(dr);
    const missing = ev.color === 'yellow' ? '<span class="missing">לא רשום / ממתין לאישור רישום</span>'
      : ev.issues.length ? '<span class="missing">' + ev.issues.map(i => esc(i.label) + ': ' + esc(i.text)).join('<br>') + '</span>' : '<span class="muted">—</span>';
    const valid = Object.values(dr.certs).filter(c => c.status === 'valid' && daysTo(c.expiry) >= 0);
    let nearest = '<span class="muted">—</span>';
    if (valid.length && dr.approved){
      const c = valid.reduce((a,b) => daysTo(a.expiry) <= daysTo(b.expiry) ? a : b);
      nearest = fmt(c.expiry) + (daysTo(c.expiry) <= 30 ? ' <span class="pill soon">פוקע בקרוב</span>' : '');
    }
    return `<tr class="row ${ev.color}" data-act="open-driver" data-id="${dr.id}">
      <td><span class="st-cell"><span class="dot ${ev.color}"></span>${{white:'תקין',yellow:'לא רשום',red:'חסר'}[ev.color]}</span></td>
      <td class="name"><b>${esc(dr.name)}</b><span class="small muted">${esc(dr.phone)}</span></td>
      <td class="mono">${esc(dr.tz)}</td>
      <td>${esc(dr.company)}</td>
      <td>${missing}</td>
      <td>${nearest}</td>
      <td>${dr.inside ? '<span class="pill ok">בפנים</span>' : '<span class="muted">בחוץ</span>'}</td>
      <td>${dr.last ? time(dr.last) : '<span class="muted">—</span>'}</td>
    </tr>`;
  }).join('');
}
function renderGuard(){
  const all = state.drivers.map(evalD);
  const cnt = c => all.filter(e => e.color === c).length;
  const chips = [['all','הכל'],['white','לבן'],['yellow','צהוב'],['red','אדום'],['inside','בתוך המתקן']]
    .map(([k,l]) => `<button class="chip ${ui.filter===k?'active':''}" data-act="filter" data-k="${k}">${['white','yellow','red'].includes(k)?`<span class="dot ${k}"></span>`:''}${l}</button>`).join('');
  return `
  <div class="stats">
    <div class="stat"><div class="ic">${icon('truck',22)}</div><div><div class="n">${state.drivers.filter(x=>x.inside).length}</div><div class="l">בתוך המתקן</div></div></div>
    <div class="stat"><div class="ic ok">${icon('check',22)}</div><div><div class="n">${cnt('white')}</div><div class="l">תקינים</div></div></div>
    <div class="stat"><div class="ic warn">${icon('user',22)}</div><div><div class="n">${cnt('yellow')}</div><div class="l">לא רשומים</div></div></div>
    <div class="stat"><div class="ic bad">${icon('alert',22)}</div><div><div class="n">${cnt('red')}</div><div class="l">חסר אישור</div></div></div>
  </div>
  <div class="guard-bar">
    <div class="search-wrap">${icon('search',20)}<input id="guardSearch" class="search" type="search" placeholder="חיפוש לפי שם, ת״ז או חברה (גם לנהג בלי טלפון)" value="${esc(ui.q)}"></div>
    <button class="btn" data-act="add-driver">${icon('plus',18)}הוספת נהג</button>
    <button class="btn sec" data-act="scan-unknown">${icon('scan',18)}סימולציה: קוד לא מזוהה</button>
  </div>
  <div class="chips">${chips}</div>
  <div class="guard-grid">
    <div class="table-wrap"><table>
      <thead><tr><th>סטטוס</th><th>שם</th><th>ת״ז</th><th>חברה</th><th>מה חסר</th><th>תוקף קרוב</th><th>מיקום</th><th>סריקה אחרונה</th></tr></thead>
      <tbody id="guardRows">${guardRows()}</tbody>
    </table></div>
    <aside class="card monitor">
      <h3><span class="live"></span>סריקה אחרונה</h3>
      ${bannerHtml(state.lastScan)}
      <h3 style="margin-top:16px">${icon('clock',16)}יומן כניסות</h3>
      ${logHtml(10)}
    </aside>
  </div>
  <p class="note">לחיצה על שורה פותחת כרטיס נהג: מה בדיוק חסר, תאריכים, צילום האישור ורישום כניסה ידני.</p>`;
}
function driverModal(id){
  const dr = byId(id), ev = evalD(dr);
  const tag = {white:'תקין · מאושר לכניסה', yellow:'לא רשום', red:'חסר אישור'}[ev.color];
  const issues = ev.color === 'yellow'
    ? `<div class="issue-box yellow">${icon('alert',20)}<div><b>הנהג לא אושר במערכת.</b> יש להפנות למנהל מערכת לאישור רישום.</div></div>`
    : ev.issues.length ? `<div class="issue-box">${icon('alert',20)}<div><b>סיבת החסימה:</b><ul>` + ev.issues.map(i => `<li>${esc(i.label)} — ${esc(i.text)}</li>`).join('') + '</ul></div></div>' : '';
  const certs = Object.keys(CERTS).map(k => {
    const c = dr.certs[k];
    const img = c.status === 'valid' ? `<img src="${certImg(dr,k,c)}" alt="${esc(CERTS[k])}" data-act="zoom">` : '<div class="noimg small">אין אישור</div>';
    const pend = c.pending ? `<div class="small" style="margin-top:6px;color:#92400E">הועלה מסמך חדש, ממתין למנהל המסוף</div>` : '';
    return `<div class="cert-card"><b>${CERTS[k]}</b> ${certPill(c)}<div class="muted">${expText(c)}</div>${c.number ? `<div class="mono small">מס׳ ${esc(c.number)}</div>` : ''}${pend}${img}</div>`;
  }).join('');
  const canPass = ev.color === 'white';
  openModal(`
    <div class="modal-head">
      <div class="hello"><div class="avatar">${esc(initials(dr.name))}</div><div><h3 style="margin:0">${esc(dr.name)}</h3><div class="muted small">ת״ז ${esc(dr.tz)} · ${esc(dr.company)} · ${esc(dr.phone)}</div></div></div>
      <span class="status-tag ${ev.color}"><span class="dot ${ev.color}"></span>${tag}</span>
      <button class="x" data-act="close" aria-label="סגור">${icon('x',18)}</button>
    </div>
    ${issues}
    <div class="cert-grid">${certs}</div>
    <div class="row-actions">
      <button class="btn ${canPass ? 'ok' : ''}" data-act="manual" data-id="${dr.id}" ${canPass ? '' : 'disabled'}>${icon(canPass ? 'check' : 'lock',18)}רישום ${dr.inside ? 'יציאה' : 'כניסה'} ידני</button>
      <button class="btn sec" data-act="close">סגור</button>
    </div>
    <p class="note">${canPass ? 'רישום ידני מיועד לנהג בלי טלפון או בלי סוללה. נרשם ביומן עם סימון "ידני".' : 'לא ניתן לאשר כניסה ידנית לנהג שאינו תקין.'}</p>`);
}
function addDriverModal(){
  openModal(`
    <div class="modal-head"><div><h3 style="margin:0">הוספת נהג חדש</h3><div class="muted small">הנהג ייכנס לתור אישור של מנהל המערכת ויופיע בצהוב עד האישור</div></div><button class="x" data-act="close" aria-label="סגור">${icon('x',18)}</button></div>
    <label for="aName">שם מלא</label><input id="aName" class="field">
    <label for="aTz">תעודת זהות</label><input id="aTz" class="field" inputmode="numeric" maxlength="9">
    <label for="aCompany">חברת הובלה</label><input id="aCompany" class="field">
    <label for="aPhone">טלפון</label><input id="aPhone" class="field" inputmode="tel">
    <div class="row-actions"><button class="btn" data-act="add-driver-save">שמור</button><button class="btn sec" data-act="close">ביטול</button></div>`);
}

/* ---------- Terminal manager ---------- */
function renderManager(){
  const items = pendingDocs();
  const queue = items.length ? items.map(({dr,k,p}) => `
    <div class="q-item">
      <img src="${certImg(dr,k,p)}" alt="אישור שהועלה" data-act="zoom">
      <div>
        <div class="kv">
          <span>נהג</span><b>${esc(dr.name)}</b>
          <span>חברה</span><span>${esc(dr.company)}</span>
          <span>סוג אישור</span><b>${CERTS[k]}</b>
          <span>מספר</span><span class="mono">${esc(p.number || '—')}</span>
          <span>הועלה</span><span>${time(p.at)}</span>
        </div>
        <label for="exp-${dr.id}-${k}">תוקף (לאמת מול המסמך)</label>
        <input id="exp-${dr.id}-${k}" class="field" type="date" value="${p.expiry}" style="max-width:220px">
        <label for="rsn-${dr.id}-${k}">סיבת דחייה (אם רלוונטי)</label>
        <input id="rsn-${dr.id}-${k}" class="field" placeholder="לדוגמה: המסמך לא קריא">
        <div class="row-actions">
          <button class="btn ok" data-act="approve-doc" data-id="${dr.id}" data-k="${k}">${icon('check',18)}אשר</button>
          <button class="btn bad" data-act="reject-doc" data-id="${dr.id}" data-k="${k}">${icon('x',18)}דחה</button>
        </div>
      </div>
    </div>`).join('') : `<div class="card empty">${icon('inbox',28)}<div style="margin-top:8px">אין מסמכים שממתינים לאישור.</div></div>`;

  const soon = [];
  state.drivers.forEach(dr => Object.keys(CERTS).forEach(k => {
    const c = dr.certs[k];
    if (c.status === 'valid' && daysTo(c.expiry) <= 30) soon.push({dr, k, c, n: daysTo(c.expiry)});
  }));
  soon.sort((a,b) => a.n - b.n);
  const soonRows = soon.length ? soon.map(s => `<tr><td><b>${esc(s.dr.name)}</b></td><td>${CERTS[s.k]}</td><td>${fmt(s.c.expiry)}</td><td>${s.n < 0 ? '<span class="pill bad">פג</span>' : `<span class="pill soon">${s.n} ימים</span>`}</td></tr>`).join('')
    : '<tr><td colspan="4" class="empty">אין אישורים שפוקעים בקרוב.</td></tr>';

  return `<div class="two-col">
    <section>
      <div class="section-title"><h2>${icon('doc',22)}מסמכים לאישור</h2><span class="count">${items.length} ממתינים</span></div>
      <div class="queue">${queue}</div>
    </section>
    <section>
      <div class="section-title"><h2>${icon('clock',22)}פוקעים / פגו ב-30 יום</h2></div>
      <div class="table-wrap"><table class="simple-table"><thead><tr><th>נהג</th><th>אישור</th><th>תאריך</th><th>מצב</th></tr></thead><tbody>${soonRows}</tbody></table></div>
      <p class="note">הנהג מקבל תזכורת אוטומטית באפליקציה 30 יום לפני פקיעה, כדי לקבוע הדרכה לפני שהוא נחסם בשער.</p>
    </section>
  </div>`;
}

/* ---------- System admin ---------- */
function renderAdmin(){
  const regs = state.drivers.filter(x => !x.approved);
  const regHtml = regs.length ? regs.map(dr => `
    <div class="card reg-card">
      <div class="hello"><div class="avatar">${esc(initials(dr.name))}</div><div><b>${esc(dr.name)}</b><div class="small muted">${esc(dr.company)}</div></div></div>
      <div class="kv"><span>ת״ז</span><span class="mono">${esc(dr.tz)}</span><span>טלפון</span><span>${esc(dr.phone)}</span></div>
      <div class="row-actions"><button class="btn ok sm" data-act="approve-reg" data-id="${dr.id}">${icon('check',16)}אשר רישום</button><button class="btn bad sm" data-act="reject-reg" data-id="${dr.id}">${icon('x',16)}דחה</button></div>
    </div>`).join('') : `<div class="card empty">${icon('inbox',28)}<div style="margin-top:8px">אין בקשות רישום ממתינות.</div></div>`;
  const secRows = state.drivers.filter(x => x.approved).map(dr => {
    const c = dr.certs.security;
    return `<tr><td><b>${esc(dr.name)}</b><div class="small muted">${esc(dr.company)}</div></td><td>${certPill(c)}</td><td>${c.status==='valid' ? fmt(c.expiry) : '<span class="muted">—</span>'}</td>
      <td><div style="display:flex;gap:6px;flex-wrap:wrap"><input id="sec-${dr.id}" class="field" type="date" value="${d(365)}" style="width:155px;padding:7px 10px"><button class="btn sm" data-act="grant-sec" data-id="${dr.id}">${c.status==='valid' ? 'חדש' : 'הענק'}</button></div></td></tr>`;
  }).join('');
  return `<div class="two-col">
    <section>
      <div class="section-title"><h2>${icon('users',22)}בקשות רישום</h2><span class="count">${regs.length} ממתינות</span></div>
      ${regHtml}
      <p class="note">היום רק אדם אחד יכול לרשום נהג. כאן כל מי שמוגדר כמנהל מערכת יכול לאשר, וזה מבטל את צוואר הבקבוק.</p>
    </section>
    <section>
      <div class="section-title"><h2>${icon('shield',22)}אישורים ביטחוניים</h2></div>
      <div class="table-wrap"><table class="simple-table" style="min-width:540px"><thead><tr><th>נהג</th><th>מצב</th><th>תוקף</th><th>פעולה</th></tr></thead><tbody>${secRows}</tbody></table></div>
      <p class="note">בגרסה אמיתית רק גורם ביטחון מורשה (קב״ט) יראה את הפעולה הזו.</p>
    </section>
  </div>`;
}

/* ---------- Render ---------- */
function render(){
  renderTabs();
  const views = {driver:renderDriver, guard:renderGuard, manager:renderManager, admin:renderAdmin};
  $('app').innerHTML = views[ui.tab]();
  if (ui.tab === 'driver' && ui.dview === 'qr') drawQr();
  $('soundBtn').innerHTML = icon(ui.sound ? 'sound' : 'mute',16) + `<span class="lbl">${ui.sound ? 'צליל פועל' : 'צליל כבוי'}</span>`;
}

/* ---------- Events ---------- */
const val = id => ($(id)?.value || '').trim();
document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-act]');
  if (!el) { if (ev.target.id === 'modal') closeModal(); return; }
  const act = el.dataset.act, id = Number(el.dataset.id), k = el.dataset.k;
  switch (act){
    case 'tab': ui.tab = k; closeModal(); break;
    case 'nav': ui.dview = k; break;
    case 'login': ui.currentId = Number(val('loginUser')); ui.dview = 'home'; break;
    case 'logout': ui.currentId = null; ui.dview = 'login'; break;
    case 'go-register': ui.dview = 'register'; break;
    case 'go-login': ui.dview = 'login'; break;
    case 'home': ui.dview = 'home'; break;
    case 'certs': ui.dview = 'certs'; break;
    case 'register': {
      const name = val('rName'), tz = val('rTz'), company = val('rCompany'), phone = val('rPhone'), user = val('rUser');
      if (!name || !company || !user) return toast('נא למלא שם, חברה ושם משתמש');
      if (!/^\d{9}$/.test(tz)) return toast('תעודת זהות חייבת להכיל 9 ספרות');
      if (state.drivers.some(x => x.tz === tz)) return toast('תעודת הזהות כבר קיימת במערכת');
      const M = () => ({status:'missing',expiry:null,number:null,img:null,pending:null});
      const dr = {id:state.nextId++, name, tz, company, phone:phone||'—', user, approved:false, inside:false, last:null, notes:[], certs:{security:M(),height:M(),hazmat:M()}};
      state.drivers.push(dr); ui.currentId = dr.id; ui.dview = 'home';
      toast('הבקשה נשלחה למנהל המערכת');
      break;
    }
    case 'go-qr': newQr(); ui.dview = 'qr'; break;
    case 'sim-scan': ui.result = scan(ui.currentId, 'QR'); ui.dview = 'result'; break;
    case 'go-upload': ui.uploadKey = UPLOADABLE.includes(k) ? k : 'height'; ui.uploadImg = null; ui.dview = 'upload'; break;
    case 'upload': {
      const dr = cur(), key = val('uType'), number = val('uNum'), expiry = val('uExp');
      if (!number) return toast('נא להזין מספר אישור');
      if (!expiry || daysTo(expiry) < 1) return toast('תאריך התוקף חייב להיות עתידי');
      dr.certs[key].pending = {expiry, number, img:ui.uploadImg, at:new Date()};
      ui.uploadImg = null; ui.dview = 'certs';
      toast('האישור נשלח לבדיקת מנהל המסוף');
      break;
    }
    case 'dismiss-note': cur().notes.splice(Number(el.dataset.i), 1); break;
    case 'filter': ui.filter = k; break;
    case 'open-driver': driverModal(id); return;
    case 'add-driver': addDriverModal(); return;
    case 'add-driver-save': {
      const name = val('aName'), tz = val('aTz'), company = val('aCompany'), phone = val('aPhone');
      if (!name || !company) return toast('נא למלא שם וחברה');
      if (!/^\d{9}$/.test(tz)) return toast('תעודת זהות חייבת להכיל 9 ספרות');
      if (state.drivers.some(x => x.tz === tz)) return toast('תעודת הזהות כבר קיימת במערכת');
      const M = () => ({status:'missing',expiry:null,number:null,img:null,pending:null});
      state.drivers.push({id:state.nextId++, name, tz, company, phone:phone||'—', user:'driver'+tz.slice(-4), approved:false, inside:false, last:null, notes:[], certs:{security:M(),height:M(),hazmat:M()}});
      closeModal(); toast('הנהג נוסף ומחכה לאישור מנהל מערכת');
      break;
    }
    case 'scan-unknown': scanUnknown(); break;
    case 'manual': scan(id, 'ידני'); closeModal(); toast('נרשם ביומן'); break;
    case 'close': closeModal(); return;
    case 'zoom': window.open('about:blank').document.write(`<img src="${el.src}" style="max-width:100%">`); return;
    case 'approve-doc': {
      const dr = byId(id), c = dr.certs[k], p = c.pending, expiry = val(`exp-${id}-${k}`);
      if (!expiry || daysTo(expiry) < 0) return toast('תאריך תוקף לא תקין');
      dr.certs[k] = {status:'valid', expiry, number:p.number, img:p.img, pending:null};
      toast(`${CERTS[k]} של ${dr.name} אושר`);
      break;
    }
    case 'reject-doc': {
      const dr = byId(id), reason = val(`rsn-${id}-${k}`) || 'המסמך לא תקין';
      dr.certs[k].pending = null;
      dr.notes.push(`${CERTS[k]} נדחה ע״י מנהל המסוף: ${reason}`);
      toast('המסמך נדחה והנהג קיבל הודעה');
      break;
    }
    case 'approve-reg': byId(id).approved = true; toast('הרישום אושר'); break;
    case 'reject-reg': state.drivers = state.drivers.filter(x => x.id !== id); toast('הבקשה נדחתה'); break;
    case 'grant-sec': {
      const expiry = val(`sec-${id}`);
      if (!expiry || daysTo(expiry) < 1) return toast('תאריך התוקף חייב להיות עתידי');
      byId(id).certs.security = {status:'valid', expiry, number:'SEC-'+String(Math.floor(1000+Math.random()*9000)), img:null, pending:null};
      toast('האישור הביטחוני עודכן');
      break;
    }
    default: return;
  }
  render();
});
document.addEventListener('input', ev => {
  if (ev.target.id === 'guardSearch'){ ui.q = ev.target.value; $('guardRows').innerHTML = guardRows(); }
});
document.addEventListener('change', ev => {
  if (ev.target.id === 'uType') ui.uploadKey = ev.target.value;
  if (ev.target.id === 'uFile'){
    const f = ev.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { ui.uploadImg = r.result; const p = $('uPrev'); p.src = r.result; p.classList.remove('hidden'); };
    r.readAsDataURL(f);
  }
});
document.addEventListener('keydown', ev => { if (ev.key === 'Escape') closeModal(); });
$('brandMark').innerHTML = brandMark(22);
$('brandName').innerHTML = brandWord();
$('brandTag').textContent = BRAND.tagline;
document.title = BRAND.name.join('') + ' · ' + BRAND.tagline;
$('resetBtn').innerHTML = icon('reset',16) + '<span class="lbl">איפוס הדגמה</span>';
$('soundBtn').addEventListener('click', () => { ui.sound = !ui.sound; render(); });
$('resetBtn').addEventListener('click', () => { state = seed(); resetUi(); closeModal(); render(); toast('ההדגמה אופסה'); });

render();
