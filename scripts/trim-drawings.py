"""Trim the bone/white margin around every drawing so print layouts can place plans at a common scale.
Writes src/assets/print/<slug>/dNN.jpg (trimmed, long side <= 2000 px). Pixel scale is kept, so plans
exported at the same scale stay proportional to each other. Run after adding or changing drawings."""
import glob, os, numpy as np
from PIL import Image
for f in sorted(glob.glob('src/assets/projects/*/d*.jpg')):
    slug, name = f.split('/')[-2], os.path.basename(f)
    im = Image.open(f).convert('RGB'); a = np.asarray(im).astype(int)
    bg = np.median(np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]]), axis=0)
    diff = np.abs(a - bg).sum(axis=2) > 60
    b = max(2, int(0.01 * min(im.size))); diff[:b] = diff[-b:] = False; diff[:, :b] = diff[:, -b:] = False  # ignore frame edges
    rows = np.where(diff.sum(axis=1) > max(4, 0.006 * im.width))[0]
    cols = np.where(diff.sum(axis=0) > max(4, 0.006 * im.height))[0]
    if len(rows) and len(cols):
        pad = int(0.02 * max(im.size))
        box = (max(0, cols.min() - pad), max(0, rows.min() - pad), min(im.width, cols.max() + pad), min(im.height, rows.max() + pad))
        im = im.crop(box)
    os.makedirs(f'src/assets/print/{slug}', exist_ok=True)
    s = min(1, 2000 / max(im.size))
    if s < 1: im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    # keep the scale factor in the name-independent sidecar so layouts can undo the resize
    im.save(f'src/assets/print/{slug}/{name}', quality=88)
    open(f'src/assets/print/{slug}/{name[:-4]}.scale', 'w').write(str(s))
# study boards: one house palette — ink linework on bone paper, colour accents in oxblood
STUDIES = {'travco-west-island': [4], 'staff-housing': [1, 2, 3], 'sallan-creek': [1, 2], 'sodic-east-vale': [1], 'sodic-ogami': [1], 'fifth-square': [1], 'neom-oxagon': [1], 'chery-showroom': [1], 'linah-farms': [1], 'dry-port': [3]}
ink, bone, ox = np.array([43, 40, 38.]), np.array([243, 237, 227.]), np.array([94, 26, 36.])
for slug, nos in STUDIES.items():
    for n in nos:
        f = f'src/assets/print/{slug}/d{n:02d}.jpg'
        if not os.path.exists(f): continue
        a = np.asarray(Image.open(f).convert('RGB')).astype(float) / 255
        L = (a @ [.299, .587, .114])[..., None]
        L = np.clip((L - .08) / .86, 0, 1) ** 1.1
        S = (a.max(2) - a.min(2))[..., None]
        base = ink + (bone - ink) * L
        w = np.clip((S - .18) * 2.2, 0, .75) * (1 - L * .6)
        out = base * (1 - w) + ox * w
        Image.fromarray(out.clip(0, 255).astype('uint8')).save(f, quality=90)
print('trimmed')
