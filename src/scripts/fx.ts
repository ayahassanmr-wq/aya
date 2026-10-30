/* Site-wide motion: scroll reveal, parallax, counters, cursor + pattern spotlight, hover image preview.
   Everything degrades to a static, fully visible page without JS, on touch devices and with reduced motion. */
import Lenis from 'lenis';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ---------- reveal (only things below the first screen start hidden) */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.remove('pre'); e.target.classList.add('shown'); io.unobserve(e.target);
}), { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll<HTMLElement>('.stagger').forEach((g) => [...g.children].forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i % 6))));
document.querySelectorAll<HTMLElement>('.reveal, .lines, .wipe').forEach((el) => {
  if (reduce) { el.classList.add('shown'); return; }
  if (el.getBoundingClientRect().top > innerHeight * 0.92) { el.classList.add('pre'); io.observe(el); }
  else requestAnimationFrame(() => el.classList.add('shown'));
});

/* ---------- smooth scroll (desktop, motion allowed) */
if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
  const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!; if (id.length < 2) return; const t = document.querySelector<HTMLElement>(id); if (!t) return;
    e.preventDefault(); lenis.scrollTo(t, { offset: -80 }); t.setAttribute('tabindex', '-1'); t.focus({ preventScroll: true });
  }));
  (window as any).__lenis = lenis;
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

/* ---------- parallax: [data-parallax="0.12"] moves against scroll while in view */
const px = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
if (!reduce && px.length) {
  const tick = () => {
    const vh = innerHeight;
    for (const el of px) {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1 around centre
      el.style.transform = `translate3d(0, ${(-p * +el.dataset.parallax! * 100).toFixed(2)}px, 0) scale(${el.dataset.scale || 1.12})`;
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
  document.querySelectorAll<HTMLElement>('.btn, .magnet').forEach((b) => {
    b.addEventListener('mousemove', (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`; });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });

  // tilt on project images
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((c) => {
    c.addEventListener('mousemove', (e) => { const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5; c.style.setProperty('--rx', `${(-y * 3).toFixed(2)}deg`); c.style.setProperty('--ry', `${(x * 4).toFixed(2)}deg`); c.style.setProperty('--gx', `${(x + 0.5) * 100}%`); c.style.setProperty('--gy', `${(y + 0.5) * 100}%`); });
    c.addEventListener('mouseleave', () => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
  });
}
