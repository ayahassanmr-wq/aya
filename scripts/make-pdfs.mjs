// Renders public/Aya_Hassan_Portfolio.pdf and public/Aya_Hassan_CV.pdf from /print/* pages.
// Usage: npx astro build && python3 scripts/grade-print.py && (npx astro preview --port 4321 &) && node scripts/make-pdfs.mjs
// Needs puppeteer-core (npm i -D puppeteer-core) and a local Chrome (CHROME env or /usr/bin/google-chrome).
import p from 'puppeteer-core';
const b = await p.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [u, f] of [['print/cv/', 'Aya_Hassan_CV'], ['print/portfolio/', 'Aya_Hassan_Portfolio'], ['print/selected/', 'Aya_Hassan_Selected_Works']]) {
  const g = await b.newPage();
  await g.goto('http://localhost:4321/' + u, { waitUntil: 'networkidle0', timeout: 180000 });
  await g.evaluate(() => document.fonts.ready);
  await g.pdf({ path: `public/${f}.pdf`, preferCSSPageSize: true, printBackground: true });
  console.log('wrote', f);
}
await b.close();
