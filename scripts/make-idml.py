"""Turn the JSON from idml-extract.mjs into an InDesign package (IDML + Links folder), zipped.
Usage: python3 scripts/make-idml.py in.json OutName  -> public/OutName_InDesign.zip
Text = live Archivo text frames; images = linked JPG/PNG in Links/; fills/rules = rectangles."""
import json, os, re, sys, zipfile, urllib.request, hashlib
from xml.sax.saxutils import escape as esc

src, name = sys.argv[1], sys.argv[2]
pages = json.load(open(src))
K = 0.75  # CSS px -> pt
W, H = pages[0]['w'] * K, pages[0]['h'] * K
work = f'/tmp/idml_{name}'; os.makedirs(work + '/Links', exist_ok=True)

colors = {}
def color(c):
    key = 'c%02x%02x%02x' % (round(c['r']), round(c['g']), round(c['b']))
    colors[key] = (round(c['r']), round(c['g']), round(c['b'])); return 'Color/' + key

links = {}
def link(url):
    if url in links: return links[url]
    ext = os.path.splitext(url.split('?')[0])[1].lower() or '.jpg'
    fn = hashlib.md5(url.encode()).hexdigest()[:10] + ext
    p = f'{work}/Links/{fn}'
    if not os.path.exists(p): urllib.request.urlretrieve(url, p)
    links[url] = fn; return fn

WEIGHTS = [(150, 'Thin'), (250, 'ExtraLight'), (350, 'Light'), (450, 'Regular'), (550, 'Medium'), (650, 'SemiBold'), (750, 'Bold'), (850, 'ExtraBold'), (999, 'Black')]
def font(r):
    fam = 'Archivo'
    st = r.get('st', '100%')
    if st.endswith('%'):
        v = float(st[:-1]); fam = 'Archivo Expanded' if v >= 118 else 'Archivo SemiExpanded' if v >= 106 else 'Archivo'
    style = next(n for lim, n in WEIGHTS if r['w'] < lim)
    if r['i']: style = 'Italic' if style == 'Regular' else style + ' Italic'
    return fam, style

uid = [0]
def U(p='u'): uid[0] += 1; return f'{p}{uid[0]:x}'

def rect_path(L, T, R, B):
    pts = [(L, T), (L, B), (R, B), (R, T)]
    return ('<Properties><PathGeometry><GeometryPathType PathOpen="false"><PathPointArray>' +
            ''.join(f'<PathPointType Anchor="{x:.3f} {y:.3f}" LeftDirection="{x:.3f} {y:.3f}" RightDirection="{x:.3f} {y:.3f}"/>' for x, y in pts) +
            '</PathPointArray></GeometryPathType></PathGeometry></Properties>')

def opacity(op):
    return '' if op >= 0.999 else f'<TransparencySetting><BlendingSetting Opacity="{op*100:.0f}"/></TransparencySetting>'

stories = []; spreads = []
for pi, pg in enumerate(pages):
    oy = -H / 2  # spread origin is page centre vertically
    tx = lambda x: x * K - W / 2
    ty = lambda y: y * K + oy
    xml = []
    L, T, R, B = tx(0), ty(0), tx(pg['w']), ty(pg['h'])
    xml.append(f'<Rectangle Self="{U()}" ContentType="Unassigned" FillColor="{color(pg["bg"])}" StrokeWeight="0" ItemTransform="1 0 0 1 0 0">{rect_path(L, T, R, B)}</Rectangle>')
    for it in pg['items']:
        b = it['box']
        if b[2] - b[0] < 0.2 or b[3] - b[1] < 0.2: continue
        bl, bt, br, bb = tx(b[0]), ty(b[1]), tx(b[2]), ty(b[3])
        if it['t'] == 'fill':
            op = it['c'].get('a', 1) * it.get('op', 1)
            xml.append(f'<Rectangle Self="{U()}" ContentType="Unassigned" FillColor="{color(it["c"])}" StrokeWeight="0" ItemTransform="1 0 0 1 0 0">{rect_path(bl, bt, br, bb)}{opacity(op)}</Rectangle>')
        elif it['t'] == 'img':
            try: fn = link(it['src'])
            except Exception as e: print('skip img', it['src'], e); continue
            il, it_, ir, ib = it['img']; sx = (ir - il) * K / it['nw']; sy = (ib - it_) * K / it['nh']
            xml.append(f'<Rectangle Self="{U()}" ContentType="GraphicType" StrokeWeight="0" ItemTransform="1 0 0 1 0 0">{rect_path(bl, bt, br, bb)}{opacity(it.get("op", 1))}'
                       f'<FrameFittingOption AutoFit="false"/>'
                       f'<Image Self="{U()}" ItemTransform="{sx:.6f} 0 0 {sy:.6f} {tx(il):.3f} {ty(it_):.3f}"><Properties><Profile type="string">$ID/Embedded</Profile><GraphicBounds Left="0" Top="0" Right="{it["nw"]}" Bottom="{it["nh"]}"/></Properties>'
                       f'<Link Self="{U()}" LinkResourceURI="file:Links/{fn}" StoredState="Normal"/></Image></Rectangle>')
        elif it['t'] == 'text':
            sid = U('st'); pad = (b[2] - b[0]) * 0.06 + 4
            just = {'center': 'CenterAlign', 'right': 'RightAlign', 'end': 'RightAlign'}.get(it['align'], 'LeftAlign')
            if just == 'RightAlign': bl -= pad * K
            elif just == 'CenterAlign': bl -= pad * K / 2; br += pad * K / 2
            else: br += pad * K
            runs = []
            for r in it['runs']:
                if r.get('br'): runs.append('<Br/>'); continue
                fam, style = font(r); sz = r['s'] * K
                trk = (r['ls'] / r['s'] * 1000) if r['s'] else 0
                runs.append(f'<CharacterStyleRange AppliedCharacterStyle="CharacterStyle/$ID/[No character style]" FontStyle="{style}" PointSize="{sz:.2f}" FillColor="{color(r["c"])}" Tracking="{trk:.0f}">'
                            f'<Properties><AppliedFont type="string">{fam}</AppliedFont><Leading type="unit">{it["lh"]*K:.2f}</Leading></Properties><Content>{esc(r["t"])}</Content></CharacterStyleRange>')
            stories.append((sid, f'<Story Self="{sid}" TrackChanges="false" StoryTitle="" AppliedTOCStyle="n" AppliedNamedGrid="n"><StoryPreference OpticalMarginAlignment="false"/>'
                                 f'<ParagraphStyleRange AppliedParagraphStyle="ParagraphStyle/$ID/NormalParagraphStyle" Justification="{just}" Hyphenation="false" FirstLineIndent="0" LeftIndent="0" SpaceBefore="0" SpaceAfter="0">{"".join(runs)}</ParagraphStyleRange></Story>'))
            xml.append(f'<TextFrame Self="{U()}" ParentStory="{sid}" ContentType="TextType" ItemTransform="1 0 0 1 0 0" FillColor="Swatch/None" StrokeWeight="0">{rect_path(bl, bt - 1, br, bb + 2)}{opacity(it.get("op", 1))}'
                       f'<TextFramePreference TextColumnCount="1" VerticalJustification="TopAlign" FirstBaselineOffset="LeadingOffset"><Properties><InsetSpacing type="list"><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem><ListItem type="unit">0</ListItem></InsetSpacing></Properties></TextFramePreference></TextFrame>')
    sp = U('sp')
    spreads.append((sp, f'<Spread Self="{sp}" PageCount="1" BindingLocation="0" AllowPageShuffle="true" ItemTransform="1 0 0 1 0 0" ShowMasterItems="true">'
                        f'<Page Self="{U("pg")}" Name="{pi+1}" AppliedMaster="n" GeometricBounds="0 0 {H:.3f} {W:.3f}" ItemTransform="1 0 0 1 {-W/2:.3f} {-H/2:.3f}" OverrideList=""/>' + ''.join(xml) + '</Spread>'))

NS = 'xmlns:idPkg="http://ns.adobe.com/AdobeInDesign/idml/1.0/packaging"'
def pkg(tag, body): return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<idPkg:{tag} {NS} DOMVersion="18.0">{body}</idPkg:{tag}>'
graphic = pkg('Graphic', '<Color Self="Color/Black" Model="Process" Space="CMYK" ColorValue="0 0 0 100" Name="Black"/><Color Self="Color/Paper" Model="Process" Space="CMYK" ColorValue="0 0 0 0" Name="Paper"/><Swatch Self="Swatch/None" Name="None"/>' +
              ''.join(f'<Color Self="Color/{k}" Model="Process" Space="RGB" ColorValue="{r} {g} {b}" Name="{k}"/>' for k, (r, g, b) in colors.items()))
styles = pkg('Styles', '<RootCharacterStyleGroup Self="u_cs"><CharacterStyle Self="CharacterStyle/$ID/[No character style]" Name="$ID/[No character style]"/></RootCharacterStyleGroup>'
             '<RootParagraphStyleGroup Self="u_ps"><ParagraphStyle Self="ParagraphStyle/$ID/[No paragraph style]" Name="$ID/[No paragraph style]"/><ParagraphStyle Self="ParagraphStyle/$ID/NormalParagraphStyle" Name="$ID/NormalParagraphStyle" PointSize="10"><Properties><AppliedFont type="string">Archivo</AppliedFont></Properties></ParagraphStyle></RootParagraphStyleGroup>'
             '<RootObjectStyleGroup Self="u_os"><ObjectStyle Self="ObjectStyle/$ID/[None]" Name="$ID/[None]"/></RootObjectStyleGroup>')
prefs = pkg('Preferences', f'<DocumentPreference PageHeight="{H:.3f}" PageWidth="{W:.3f}" PagesPerDocument="1" FacingPages="false" PageBinding="LeftToRight"/>'
            '<ViewPreference HorizontalMeasurementUnits="Millimeters" VerticalMeasurementUnits="Millimeters"/>')
design = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<?aid style="50" type="document" readerVersion="6.0" featureSet="257" product="18.0(0)" ?>\n'
          f'<Document {NS} DOMVersion="18.0" Self="d" StoryList="{" ".join(s for s, _ in stories)}" ZeroPoint="0 0" ActiveLayer="ulayer" CMYKProfile="Coated FOGRA39 (ISO 12647-2:2004)" RGBProfile="sRGB IEC61966-2.1">'
          '<Language Self="Language/$ID/English%3a USA" Name="$ID/English: USA" SingleQuotes="‘’" DoubleQuotes="“”" PrimaryLanguageName="$ID/English" SublanguageName="$ID/USA" Id="269" HyphenationVendor="Hunspell" SpellingVendor="Hunspell"/>'
          '<idPkg:Graphic src="Resources/Graphic.xml"/><idPkg:Styles src="Resources/Styles.xml"/><idPkg:Preferences src="Resources/Preferences.xml"/>'
          '<Layer Self="ulayer" Name="Layer 1" Visible="true" Locked="false" Printable="true"/>' +
          ''.join(f'<idPkg:Spread src="Spreads/Spread_{s}.xml"/>' for s, _ in spreads) +
          ''.join(f'<idPkg:Story src="Stories/Story_{s}.xml"/>' for s, _ in stories) + '</Document>')

idml = f'{work}/{name}.idml'
with zipfile.ZipFile(idml, 'w') as z:
    z.writestr(zipfile.ZipInfo('mimetype'), 'application/vnd.adobe.indesign-idml-package', compress_type=zipfile.ZIP_STORED)
    z.writestr('META-INF/container.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="designmap.xml" media-type="text/xml"/></rootfiles></container>', compress_type=zipfile.ZIP_DEFLATED)
    z.writestr('designmap.xml', design, compress_type=zipfile.ZIP_DEFLATED)
    for fn, body in [('Resources/Graphic.xml', graphic), ('Resources/Styles.xml', styles), ('Resources/Preferences.xml', prefs)]: z.writestr(fn, body, compress_type=zipfile.ZIP_DEFLATED)
    for s, body in spreads: z.writestr(f'Spreads/Spread_{s}.xml', pkg('Spread', body), compress_type=zipfile.ZIP_DEFLATED)
    for s, body in stories: z.writestr(f'Stories/Story_{s}.xml', pkg('Story', body), compress_type=zipfile.ZIP_DEFLATED)
out = f'/tmp/claude-0/{name}_InDesign.zip'
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    z.write(idml, f'{name}/{name}.idml')
    for fn in sorted(os.listdir(work + '/Links')): z.write(f'{work}/Links/{fn}', f'{name}/Links/{fn}', compress_type=zipfile.ZIP_STORED)
print(out, len(pages), 'pages', len(stories), 'text frames', len(links), 'images', len(colors), 'colours')
