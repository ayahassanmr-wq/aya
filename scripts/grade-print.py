"""Bake the house grade into render JPGs used by the print pages (Chrome would otherwise rasterise CSS filters
into huge PDFs). Only <img> tags with class "grade" are graded; drawings, studies and logos are left as they are.
Selected Works images are re-saved lighter (≈14 MB PDF). Run after `npx astro build`."""
import re, numpy as np
from PIL import Image
graded, plain, sel = set(), set(), set()
for f in ['dist/print/portfolio/index.html', 'dist/print/cv/index.html', 'dist/print/selected/index.html']:
    h = open(f).read()
    for tag in re.findall(r'<img[^>]*>', h):
        m = re.search(r'src="(/_astro/[^"]+\.jpg)"', tag)
        if not m: continue
        (graded if re.search(r'class="[^"]*\bgrade\b', tag) else plain).add(m.group(1))
        if 'selected' in f: sel.add(m.group(1))
s = .14; S = np.array([[.393+.607*(1-s), .769-.769*(1-s), .189-.189*(1-s)], [.349-.349*(1-s), .686+.314*(1-s), .168-.168*(1-s)], [.272-.272*(1-s), .534-.534*(1-s), .131+.869*(1-s)]])
k = .86; r, g, b = .2126, .7152, .0722
SAT = np.array([[r+(1-r)*k, g-g*k, b-b*k], [r-r*k, g+(1-g)*k, b-b*k], [r-r*k, g-g*k, b+(1-b)*k]])
M = SAT @ S
for u in graded - plain:
    p = 'dist' + u; a = np.asarray(Image.open(p).convert('RGB'), float) / 255
    a = ((a @ M.T) - .5) * 1.05 + .5; a *= 1.01
    Image.fromarray((a.clip(0, 1) * 255).astype(np.uint8)).save(p, quality=(55 if u in sel else 84), optimize=True, progressive=True)
for u in (plain - graded) & sel:
    p = 'dist' + u; Image.open(p).convert('RGB').save(p, quality=55, optimize=True, progressive=True)
print('graded', len(graded - plain), 'plain', len(plain))
