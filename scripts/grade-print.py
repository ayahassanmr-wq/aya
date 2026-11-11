"""Bake the house grade into the JPGs used by the print pages (Chrome would otherwise rasterise CSS filters
into huge PDFs). Run after `npx astro build`, before rendering the PDFs. Drawings are left untouched."""
import re, numpy as np
from PIL import Image
used, draw, sel = set(), set(), set()
for f in ['dist/print/portfolio/index.html', 'dist/print/cv/index.html', 'dist/print/selected/index.html']:
    h = open(f).read(); used |= set(re.findall(r'/_astro/[^"\s)]+\.jpg', h))
    draw |= set(re.findall(r'<figure><img src="(/_astro/[^"]+\.jpg)"', h))
    if 'selected' in f: sel |= set(re.findall(r'/_astro/[^"\s)]+\.jpg', h))
s = .14; S = np.array([[.393+.607*(1-s), .769-.769*(1-s), .189-.189*(1-s)], [.349-.349*(1-s), .686+.314*(1-s), .168-.168*(1-s)], [.272-.272*(1-s), .534-.534*(1-s), .131+.869*(1-s)]])
k = .86; r, g, b = .2126, .7152, .0722
SAT = np.array([[r+(1-r)*k, g-g*k, b-b*k], [r-r*k, g+(1-g)*k, b-b*k], [r-r*k, g-g*k, b+(1-b)*k]])
M = SAT @ S
for u in used - draw:
    p = 'dist' + u; a = np.asarray(Image.open(p).convert('RGB'), float) / 255
    a = ((a @ M.T) - .5) * 1.05 + .5; a *= 1.01
    Image.fromarray((a.clip(0, 1) * 255).astype(np.uint8)).save(p, quality=(56 if u in sel else 76), optimize=True, progressive=True)
print('graded', len(used - draw))
# Selected Works must stay under 10 MB: re-save its drawings lighter too (no grade on drawings).
for u in sel & draw:
    p = 'dist' + u; Image.open(p).convert('RGB').save(p, quality=60, optimize=True, progressive=True)
