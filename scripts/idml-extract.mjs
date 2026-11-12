// Reads a /print/* page in Chrome and dumps every page's boxes (fills, rules, images, text runs) to JSON for make-idml.py.
// Usage (preview running on :4321): node scripts/idml-extract.mjs print/selected/ out.json
import p from 'puppeteer-core';
const [, , url, out] = process.argv;
const b = await p.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const g = await b.newPage();
await g.emulateMediaType('print');
await g.setViewport({ width: 1123, height: 794 });
await g.goto('http://localhost:4321/' + url, { waitUntil: 'networkidle0', timeout: 180000 });
await g.evaluate(() => document.fonts.ready);
const data = await g.evaluate(() => {
  const pages = [...document.querySelectorAll('section.pg, section.page')];
  const res = [];
  const col = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const v = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
  const clipOf = (el, page) => { let r = el.getBoundingClientRect(); let L = r.left, T = r.top, R = r.right, B = r.bottom; let e = el.parentElement; while (e && e !== page.parentElement) { const cs = getComputedStyle(e); if (cs.overflow !== 'visible') { const q = e.getBoundingClientRect(); L = Math.max(L, q.left); T = Math.max(T, q.top); R = Math.min(R, q.right); B = Math.min(B, q.bottom); } if (e === page) break; e = e.parentElement; } return [L, T, R, B]; };
  for (const page of pages) {
    const P = page.getBoundingClientRect(); const items = [];
    const rel = (L, T, R, B) => [L - P.left, T - P.top, R - P.left, B - P.top];
    const walk = (el) => {
      const cs = getComputedStyle(el); if (cs.display === 'none' || cs.visibility === 'hidden') return;
      const r = el.getBoundingClientRect(); const op = Number(cs.opacity);
      if (r.width > 0 && r.height > 0) {
        const bg = col(cs.backgroundColor); if (bg && bg.a > 0.02) items.push({ t: 'fill', box: rel(...clipOf(el, page)), c: bg, op });
        if (cs.backgroundImage.includes('gradient')) { const cs2 = [...cs.backgroundImage.matchAll(/rgba?\([^)]+\)/g)].map((m) => col(m[0])); if (cs2.length) { const a = cs2.reduce((s, c) => s + c.a, 0) / cs2.length; items.push({ t: 'fill', box: rel(...clipOf(el, page)), c: { ...cs2[cs2.length - 1], a }, op, grad: true }); } }
        for (const [side, w, c] of [['top', cs.borderTopWidth, cs.borderTopColor], ['bottom', cs.borderBottomWidth, cs.borderBottomColor], ['left', cs.borderLeftWidth, cs.borderLeftColor]]) {
          const ww = parseFloat(w); const cc = col(c); if (ww > 0 && cc && cc.a > 0.02) { const bx = side === 'top' ? [r.left, r.top, r.right, r.top + ww] : side === 'bottom' ? [r.left, r.bottom - ww, r.right, r.bottom] : [r.left, r.top, r.left + ww, r.bottom]; items.push({ t: 'fill', box: rel(...bx), c: cc, op }); }
        }
        if (el.tagName === 'IMG' && el.naturalWidth) {
          const clip = clipOf(el, page); const nw = el.naturalWidth, nh = el.naturalHeight; const bw = r.width, bh = r.height;
          const fit = cs.objectFit; const s = fit === 'cover' ? Math.max(bw / nw, bh / nh) : fit === 'contain' ? Math.min(bw / nw, bh / nh) : fit === 'fill' ? null : Math.min(1e9, bw / nw);
          const [px, py] = cs.objectPosition.split(' ').map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : 0.5));
          let ix, iy, iw, ih; if (s === null) { ix = r.left; iy = r.top; iw = bw; ih = bh; } else { iw = nw * s; ih = nh * s; ix = r.left + (bw - iw) * px; iy = r.top + (bh - ih) * py; }
          items.push({ t: 'img', src: el.currentSrc || el.src, nw, nh, box: rel(...clip), img: rel(ix, iy, ix + iw, iy + ih), op, filter: cs.filter });
        }
      }
      // text: one frame per block that holds its own text
      const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      const inlineOnly = [...el.children].every((c) => /inline/.test(getComputedStyle(c).display) && !c.matches('img'));
      if (own && inlineOnly && el.tagName !== 'IMG') {
        const runs = []; const tw = (n, st) => { for (const c of n.childNodes) { if (c.nodeType === 3) { const t = c.textContent.replace(/\s+/g, ' '); if (t) { const s2 = getComputedStyle(c.parentElement); const tt = s2.textTransform === 'uppercase' ? t.toUpperCase() : t; runs.push({ t: tt, f: s2.fontFamily, w: Number(s2.fontWeight), i: s2.fontStyle === 'italic', s: parseFloat(s2.fontSize), c: col(s2.color), ls: s2.letterSpacing === 'normal' ? 0 : parseFloat(s2.letterSpacing), st: s2.fontStretch }); } } else if (c.nodeType === 1 && c.tagName === 'BR') runs.push({ br: 1 }); else if (c.nodeType === 1) tw(c); } };
        tw(el);
        const rg = document.createRange(); rg.selectNodeContents(el); const q = rg.getBoundingClientRect();
        const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
        if (runs.length && q.width > 0) items.push({ t: 'text', box: rel(q.left, q.top, q.right, q.bottom), runs, align: cs.textAlign, lh, op });
        return;
      }
      for (const c of el.children) walk(c);
    };
    const pcs = getComputedStyle(page); const pb = col(pcs.backgroundColor);
    res.push({ w: P.width, h: P.height, bg: pb && pb.a > 0 ? pb : { r: 243, g: 237, b: 227, a: 1 }, items: (walk(page), items) });
  }
  return res;
});
(await import('fs')).writeFileSync(out, JSON.stringify(data));
console.log('pages', data.length, 'items', data.reduce((a, p) => a + p.items.length, 0));
await b.close();
