"""Find where each render's building starts (first row below open sky) -> src/data/skyline.json.
Used by PrintBook to line up building tops in side-by-side render grids. Rerun after changing renders."""
import glob, json, re, numpy as np
from PIL import Image
out = {}
for f in sorted(glob.glob('src/assets/projects/*/[0-9][0-9].jpg')):
    im = Image.open(f).convert('RGB'); w, h = im.size
    a = np.asarray(im.resize((200, int(200 * h / w))), float) / 255
    r, g, b = a[..., 0], a[..., 1], a[..., 2]; L = a.mean(2)
    sky = ((b > r + .03) & (L > .45)) | (L > .9)
    frac = sky.mean(1); top = 0.0
    if frac[:max(3, len(frac) // 12)].mean() > .6:
        rows = np.where(frac < .85)[0]; top = float(rows[0] / len(frac)) if len(rows) else 0.0
    k = re.search(r'projects/([^/]+)/(\d+)\.jpg', f); out[f'{k[1]}/{k[2]}'] = [round(w / h, 4), round(top, 4)]
# hand-set where the sky test is fooled by trees at the top edge
for k, v in {'travco-west-island/03': .1, 'staff-housing/03': .27, 'staff-housing/02': .29}.items():
    if k in out: out[k][1] = v
json.dump(out, open('src/data/skyline.json', 'w'), indent=0)
print(len(out), 'renders,', sum(1 for v in out.values() if v[1] > 0), 'with sky')
