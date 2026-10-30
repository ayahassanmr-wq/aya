/* Site-wide motion: scroll reveal, parallax, counters, cursor + pattern spotlight, hover image preview.
   Everything degrades to a static, fully visible page without JS, on touch devices and with reduced motion. */
import Lenis from 'lenis';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ---------- word rise: headings and statements below the fold rise word by word as they enter */
if (!reduce) {
  document.querySelectorAll<HTMLElement>('main h2.display-l:not(.lines), main h2.display-m, main .svc .display-m, main .statement, main .pill h3, main .tl h2, main .more .display-m').forEach((el) => {
    if (el.closest('.hl, [data-no-split]') || el.getBoundingClientRect().top < innerHeight * 0.92) return;
    let wi = 0;
    const walk = (node: Node) => [...node.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const t = c.textContent || ''; if (!t.trim()) return;
        const frag = document.createDocumentFragment();
        t.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.append(w); return; }
          const m = document.createElement('span'); m.className = 'rw';
          const i = document.createElement('span'); i.textContent = w; i.style.setProperty('--wi', String(Math.min(wi++, 24)));
          m.append(i); frag.append(m);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) walk(c);
    });
    walk(el);
    el.classList.add('words', 'reveal');
  });
}

/* ---------- reveal (only things below the first screen start hidden) */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.remove('pre'); e.target.classList.add('shown'); io.unobserve(e.target);
}), { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll<HTMLElement>('.stagger').forEach((g) => [...g.children].forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i % 6))));
document.querySelectorAll<HTMLElement>('.reveal, .lines, .wipe, .clip, .sheet-head').forEach((el) => {
  if (reduce) { el.classList.add('shown'); return; }
  if (el.getBoundingClientRect().top > innerHeight * 0.92) { el.classList.add('pre'); io.observe(el); }
  else requestAnimationFrame(() => el.classList.add('shown'));
});

/* ---------- smooth scroll (desktop, motion allowed) */
if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95, touchMultiplier: 1 });
  const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!; if (id.length < 2) return; const t = document.querySelector<HTMLElement>(id); if (!t) return;
    e.preventDefault(); lenis.scrollTo(t, { offset: -80 }); t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true });
  }));
  (window as any).__lenis = lenis;
  if ((window as any).__top) lenis.scrollTo(0, { immediate: true, force: true });
}

/* ---------- reading progress */
const bar = document.querySelector<HTMLElement>('.progress');
if (bar) { const up = () => { const h = document.documentElement.scrollHeight - innerHeight; bar.style.setProperty('--p', String(h > 0 ? scrollY / h : 0)); }; addEventListener('scroll', up, { passive: true }); up(); }

/* ---------- counters */
const co = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return; co.unobserve(e.target);
  const el = e.target as HTMLElement; const to = +(el.dataset.count || 0); const t0 = performance.now();
  if (reduce) { el.textContent = String(to); return; }
  const step = (t: number) => { const k = Math.min(1, (t - t0) / 1400); el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), { threshold: 0.6 });
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => co.observe(el));

/* ---------- one scroll ticker for parallax, scroll progress and marquee speed.
   All layout reads happen first, then all writes, and nothing is measured when the page hasn't moved:
   no layout thrashing, so scrolling stays smooth.
   [data-parallax="0.12"] moves against scroll while in view.
   [data-sp] gets --sp 0→1 while its top travels from the bottom to the top of the viewport;
   [data-sp="out"] gets 0→1 while it scrolls out past the top. */
const px = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
const sp = [...document.querySelectorAll<HTMLElement>('[data-sp]')];
const marqs = [...document.querySelectorAll<HTMLElement>('.marquee .track')];
if (!reduce && (px.length || sp.length || marqs.length)) {
  let lastY = NaN, lastH = 0, prevY = scrollY, v = 0, rate = 1;
  let anims: Animation[] = [];
  const dirty = () => { lastY = NaN; };
  addEventListener('resize', dirty, { passive: true });
  addEventListener('load', dirty);
  const tick = () => {
    const y = scrollY, vh = innerHeight;
    if (marqs.length) {
      if (!anims.length) anims = marqs.flatMap((m) => m.getAnimations());
      v = lerp(v, Math.min(Math.abs(y - prevY), 80) / 8, 0.08);
      const r = 1 + v;
      if (Math.abs(r - rate) > 0.01) { rate = r; anims.forEach((a) => (a.playbackRate = r)); }
    }
    prevY = y;
    if (y !== lastY || vh !== lastH) {
      lastY = y; lastH = vh;
      const pr = px.map((el) => el.parentElement!.getBoundingClientRect());
      const sr = sp.map((el) => el.getBoundingClientRect());
      px.forEach((el, i) => {
        const r = pr[i];
        if (r.bottom < -100 || r.top > vh + 100) return;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-p * +el.dataset.parallax! * 100).toFixed(2)}px, 0) scale(${el.dataset.scale || 1.12})`;
      });
      sp.forEach((el, i) => {
        const r = sr[i];
        if (r.bottom < -40 || r.top > vh + 40) return;
        const val = el.dataset.sp === 'out' ? -r.top / Math.max(1, r.height) : (vh - r.top) / vh;
        el.style.setProperty('--sp', Math.max(0, Math.min(1, val)).toFixed(4));
      });
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- cursor, pattern spotlight, hover preview (desktop only) */
if (fine && !reduce) {
  document.documentElement.classList.add('fx');
  const dot = Object.assign(document.createElement('div'), { className: 'cur-dot' });
  const ring = Object.assign(document.createElement('div'), { className: 'cur-ring' });
  ring.innerHTML = '<span></span>';
  const spot = Object.assign(document.createElement('div'), { className: 'spot', ariaHidden: 'true' });
  const prev = Object.assign(document.createElement('div'), { className: 'hover-prev' });
  prev.innerHTML = '<img alt="" />';
  document.body.append(spot, prev, ring, dot);
  const label = ring.querySelector('span')!;
  const pimg = prev.querySelector('img')!;

  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, sx = mx, sy = my, px2 = mx, py2 = my, moved = false;
  addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; if (!moved) { moved = true; rx = sx = px2 = mx; ry = sy = py2 = my; document.documentElement.classList.add('fx-on'); } }, { passive: true });
  document.addEventListener('mouseleave', () => document.documentElement.classList.remove('fx-on'));
  document.addEventListener('mouseenter', () => moved && document.documentElement.classList.add('fx-on'));

  // dark sections flip the spotlight colour
  const darkAt = (x: number, y: number) => !!document.elementFromPoint(x, y)?.closest('.dark, .hero, footer, .next');
  let darkCheck = 0;

  const loop = () => {
    rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18);
    sx = lerp(sx, mx, 0.08); sy = lerp(sy, my, 0.08);
    px2 = lerp(px2, mx, 0.12); py2 = lerp(py2, my, 0.12);
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    spot.style.setProperty('--x', `${sx}px`); spot.style.setProperty('--y', `${sy}px`);
    prev.style.transform = `translate3d(${px2}px, ${py2}px, 0)`;
    if (++darkCheck % 6 === 0) spot.classList.toggle('on-dark', darkAt(mx, my));
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  addEventListener('keydown', (e) => { if (e.key === 'Tab') document.documentElement.classList.remove('fx-on'); });
  // cursor states
  document.addEventListener('mouseover', (e) => {
    const t = e.target as HTMLElement;
    const view = t.closest<HTMLElement>('[data-cursor]');
    const link = t.closest('a, button, [role="button"], input, label');
    ring.classList.toggle('is-view', !!view);
    label.textContent = view?.dataset.cursor || '';
    ring.classList.toggle('is-link', !view && !!link);
    const pv = t.closest<HTMLElement>('[data-preview]');
    if (pv) { pimg.src = pv.dataset.preview!; prev.classList.add('show'); } else prev.classList.remove('show');
  });
  document.addEventListener('mousedown', () => ring.classList.add('down'));
  document.addEventListener('mouseup', () => ring.classList.remove('down'));

  // magnetic buttons
  document.querySelectorAll<HTMLElement>('.btn, .magnet, .social a').forEach((b) => {
    b.addEventListener('mousemove', (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`; });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });

  // tilt on project images
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((c) => {
    c.addEventListener('mousemove', (e) => { const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; c.style.setProperty('--rx', `${(-y * 3).toFixed(2)}deg`); c.style.setProperty('--ry', `${(x * 4).toFixed(2)}deg`); c.style.setProperty('--gx', `${(x + 0.5) * 100}%`); c.style.setProperty('--gy', `${(y + 0.5) * 100}%`); });
    c.addEventListener('mouseleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });
}

/* ======================================================================
   Pointer field + text/image hovers (desktop, motion allowed)
   ====================================================================== */
if (fine && !reduce) {
  /* ---- 1. drafting-dot field: a dot grid over every page that wakes up around the pointer */
  const cv = Object.assign(document.createElement('canvas'), { className: 'field', ariaHidden: 'true' });
  document.body.append(cv);
  const ctx = cv.getContext('2d')!;
  const GAP = 26, R = 170;
  let W = 0, H = 0, dpr = 1, px = -999, py = -999, tx = -999, ty = -999, energy = 0, dark = false;
  const size = () => { dpr = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  size(); addEventListener('resize', size);
  addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; energy = 1; }, { passive: true });
  document.addEventListener('mouseleave', () => { energy = 0; });
  let n = 0;
  const draw = () => {
    px += (tx - px) * 0.16; py += (ty - py) * 0.16;
    energy *= 0.985;
    if (++n % 8 === 0) { const el = document.elementFromPoint(tx, ty); dark = !!el?.closest('.dark, .hero, footer, .next, img, video, .para, .mnav, .intro'); }
    ctx.clearRect(0, 0, W, H);
    if (energy > 0.02) {
      const col = dark ? '243, 237, 227' : '94, 26, 36';
      const ox = (scrollY % GAP);
      const x0 = Math.max(0, Math.floor((px - R) / GAP) * GAP), x1 = Math.min(W, px + R);
      const y0 = Math.floor((py - R + ox) / GAP) * GAP - ox, y1 = Math.min(H, py + R);
      for (let y = y0; y <= y1; y += GAP) for (let x = x0; x <= x1; x += GAP) {
        const dx = x - px, dy = y - py, d = Math.hypot(dx, dy);
        if (d > R) continue;
        const k = 1 - d / R, e = k * k * energy;
        const pull = e * 10; // dots lean toward the pointer
        const X = x - (dx / (d || 1)) * pull, Y = y - (dy / (d || 1)) * pull;
        ctx.fillStyle = `rgba(${col}, ${(0.08 + e * 0.6).toFixed(3)})`;
        if (k > 0.82) { // the cross-hair at the centre, like a drafting mark
          ctx.fillRect(X - 3 * e, Y - 0.5, 6 * e, 1); ctx.fillRect(X - 0.5, Y - 3 * e, 1, 6 * e);
        } else { ctx.beginPath(); ctx.arc(X, Y, 0.6 + e * 1.8, 0, Math.PI * 2); ctx.fill(); }
      }
    }
    requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);

  /* ---- 2. headline letters: lift + tint near the pointer */
  document.querySelectorAll<HTMLElement>('h1, h2.display-l, h2.display-m, .display-xl, .display-l, .display-m, .card h3 .u, .statement').forEach((el) => {
    if (el.closest('[data-intro], .hl, [data-no-split]') || el.querySelector('img, svg, a, button')) return;
    const words = el.matches('.statement');
    if (!words) { const host = el.closest<HTMLElement>('h1, h2, h3') || el; if (!host.hasAttribute('aria-label')) host.setAttribute('aria-label', (host.textContent || '').replace(/\s+/g, ' ').trim()); }
    const walk = (node: Node) => {
      [...node.childNodes].forEach((c) => {
        if (c.nodeType === 3) {
          const t = c.textContent || ''; if (!t.trim()) return;
          const frag = document.createDocumentFragment();
          t.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.append(w); return; }
            if (words) { const s = document.createElement('span'); s.className = 'hw'; s.textContent = w; frag.append(s); return; }
            // letters are grouped per word so a line never breaks inside a word
            const wd = document.createElement('span'); wd.style.whiteSpace = 'nowrap';
            [...w].forEach((ch) => { const s = document.createElement('span'); s.className = 'hc'; s.textContent = ch; wd.append(s); });
            frag.append(wd);
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1 && !(c as HTMLElement).matches('.ln')) walk(c);
        else if (c.nodeType === 1) walk(c);
      });
    };
    walk(el);
    el.classList.add('split');
  });
  let active: HTMLElement | null = null;
  document.addEventListener('mousemove', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('.split');
    if (active && active !== t) { active.querySelectorAll<HTMLElement>('.hc').forEach((s) => s.style.removeProperty('--p')); }
    active = t;
    if (!t || t.matches('.statement')) return;
    t.querySelectorAll<HTMLElement>('.hc').forEach((s) => {
      const r = s.getBoundingClientRect(); const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
      s.style.setProperty('--p', Math.max(0, 1 - d / 90).toFixed(2));
    });
  }, { passive: true });

  /* ---- 3. images everywhere: tilt + sheen following the pointer */
  document.querySelectorAll<HTMLElement>('main figure, .lb, .paper, .chip, .about figure, .svc figure').forEach((f) => {
    if (f.closest('.hero') || f.hasAttribute('data-tilt')) return;
    f.setAttribute('data-tilt', ''); f.classList.add('img-hover');
    f.addEventListener('mousemove', (e) => { const r = f.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      f.style.setProperty('--rx', `${(-y * 2.2).toFixed(2)}deg`); f.style.setProperty('--ry', `${(x * 3).toFixed(2)}deg`); f.style.setProperty('--gx', `${(x + 0.5) * 100}%`); f.style.setProperty('--gy', `${(y + 0.5) * 100}%`); });
    f.addEventListener('mouseleave', () => { f.style.setProperty('--rx', '0deg'); f.style.setProperty('--ry', '0deg'); });
  });
}
