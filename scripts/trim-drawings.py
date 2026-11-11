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
print('trimmed')
