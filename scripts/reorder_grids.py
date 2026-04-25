#!/usr/bin/env python3
"""
Re-generate the line-page grids from images/{line}/order.txt.

Two grids per line:
  - /{line}/index.html       — showcase: top 6 images + "View all" CTA
  - /{line}/all/index.html   — full archive: every image, in same sort order

Workflow:
  1. Edit images/{line}/order.txt — list filenames in desired order at top.
  2. Claude Code runs: python3 scripts/reorder_grids.py [line ...]
  3. Both pages regenerate. Showcase shows first SHOWCASE_LIMIT, all/ shows
     everything.

Identifying filenames:
  - Open /{line}/?dev=1, hover image → tooltip; Cmd+click → copy filename.
"""
import os
import re
import html
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SHOWCASE_LIMIT = 6  # images shown on the line's main page

ALT_TEMPLATE = {
    "events":    "Mira Fleur event floral — tablescape, mira palette",
    "corporate": "Mira Fleur corporate floral — installation, mira palette",
    "gifts":     "Mira Fleur signature gift floral — bouquet, mira palette",
}

LINE_LABEL = {
    "events":    {"en": "Event Florals",      "cn": "活动定制"},
    "corporate": {"en": "Corporate Florals",  "cn": "企业服务"},
    "gifts":     {"en": "Signature Gifts",    "cn": "单次花礼"},
}


# ----- order.txt + file listing -----

def read_order(line):
    path = os.path.join(ROOT, "images", line, "order.txt")
    if not os.path.isfile(path):
        return []
    out = []
    with open(path) as fh:
        for raw in fh:
            t = raw.strip()
            if not t or t.startswith('#'):
                continue
            out.append(t)
    return out


def list_source_files(line):
    src = os.path.join(ROOT, "images", line, "_source")
    if not os.path.isdir(src):
        return []
    return [f for f in os.listdir(src)
            if not f.startswith('.') and not f.startswith('order.')]


def build_ordered(line):
    src = os.path.join(ROOT, "images", line, "_source")
    pinned_raw = read_order(line)
    all_files = list_source_files(line)

    missing = [f for f in pinned_raw if f not in all_files]
    for m in missing:
        print(f"  ⚠ {line}/order.txt lists {m} but file missing in _source/")

    pinned = [f for f in pinned_raw if f in all_files]
    rest = [f for f in all_files if f not in pinned]
    rest.sort(key=lambda f: -os.path.getsize(os.path.join(src, f)))
    return pinned + rest, len(pinned)


# ----- HTML emission -----

def figure_html(line, fname, alt, src_prefix="../"):
    safe_alt = html.escape(alt, quote=True)
    return (
        f'                <figure class="line-card" data-line="{line}" '
        f'data-filename="{fname}" data-tags="" data-en="" data-zh="">\n'
        f'                    <img src="{src_prefix}images/{line}/_source/{fname}" '
        f'alt="{safe_alt}" loading="lazy">\n'
        f'                </figure>'
    )


def regen_main(line, ordered):
    """Regenerate the showcase grid on /{line}/index.html (top SHOWCASE_LIMIT)."""
    showcase = ordered[:SHOWCASE_LIMIT]
    figures = "\n".join(figure_html(line, f, ALT_TEMPLATE[line], src_prefix="../")
                        for f in showcase)

    html_path = os.path.join(ROOT, line, "index.html")
    if not os.path.isfile(html_path):
        print(f"  ⚠ {html_path} not found; skipping showcase")
        return

    with open(html_path) as fh:
        t = fh.read()

    # Match grid block — accept either the original (line-grid-count) or the
    # already-rewritten (line-view-all) trailing paragraph.
    pattern = re.compile(
        r'(<div class="line-grid" id="lineGrid">\s*\n)(.*?)'
        r'(\n            </div>\s*\n            <p class="line-(?:grid-count|view-all)">)',
        re.DOTALL,
    )
    new_t, n = pattern.subn(r'\1' + figures + r'\3', t)
    if n != 1:
        print(f"  ⚠ {line}/index.html grid pattern not matched ({n}); skipping")
        return

    # Replace the count + works line with a "View all" link
    total = len(ordered)
    view_all = (
        f'<p class="line-view-all">'
        f'<a href="all/" '
        f'data-en="View the full archive — {total} works →" '
        f'data-cn="查看完整作品 — {total} 件 →">'
        f'View the full archive — {total} works →'
        f'</a></p>'
    )
    new_t = re.sub(
        r'<p class="line-(?:grid-count|view-all)">.*?</p>',
        view_all,
        new_t,
    )
    with open(html_path, 'w') as fh:
        fh.write(new_t)
    print(f"✓ {line}/index.html        showcase {len(showcase)} of {total}")


def regen_all(line, ordered):
    """Regenerate /{line}/all/index.html with the full grid."""
    all_dir = os.path.join(ROOT, line, "all")
    os.makedirs(all_dir, exist_ok=True)
    html_path = os.path.join(all_dir, "index.html")

    figures = "\n".join(figure_html(line, f, ALT_TEMPLATE[line], src_prefix="../../")
                        for f in ordered)

    label = LINE_LABEL[line]
    nav_links = "\n".join([
        f'                <a href="../../weekly/" data-en="Weekly" data-cn="周更">Weekly</a>',
        f'                <a href="../../gifts/" data-en="Gifts" data-cn="单次花礼">Gifts</a>',
        f'                <a href="../../corporate/" data-en="Corporate" data-cn="企业服务">Corporate</a>',
        f'                <a href="../../events/" data-en="Events" data-cn="活动定制">Events</a>',
        f'                <a href="../../about/" data-en="About" data-cn="关于">About</a>',
        f'                <a href="../../inquire/" data-en="Inquire" data-cn="咨询">Inquire</a>',
    ])

    page = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{label["en"]} · Full Archive | Mira Fleur</title>
    <meta name="description" content="The full archive of Mira Fleur {label["en"].lower()} work — every piece, every palette.">
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="https://maisonmirafleur.com/{line}/all/">
    <meta name="theme-color" content="#F5F1E8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../style.css">
</head>
<body class="line-page line-page-{line} line-page-all">
    <nav class="nav">
        <div class="nav-inner">
            <a href="../../" class="nav-logo">MIRA FLEUR</a>
            <div class="nav-links">
{nav_links}
            </div>
            <div class="nav-right">
                <button class="lang-toggle" onclick="toggleLang()" aria-label="Switch language">
                    <span class="lang-option lang-en">EN</span>
                    <span class="lang-divider">|</span>
                    <span class="lang-option lang-cn">中文</span>
                </button>
                <button class="nav-toggle" aria-label="Menu"><span></span><span></span></button>
            </div>
        </div>
    </nav>

    <section class="all-hero">
        <div class="container">
            <a href="../" class="all-back" data-en="← Back to {label["en"]}" data-cn="← 返回{label["cn"]}">← Back to {label["en"]}</a>
            <h1 class="all-title" data-en="{label["en"]} · Full Archive" data-cn="{label["cn"]} · 完整作品">{label["en"]} · Full Archive</h1>
            <p class="all-sub" data-en="{len(ordered)} pieces — every {label["en"].lower()} work in the studio archive." data-cn="{len(ordered)} 件 · 工作室完整{label["cn"]}作品档案。">{len(ordered)} pieces — every {label["en"].lower()} work in the studio archive.</p>
        </div>
    </section>

    <section class="line-grid-section">
        <div class="container">
            <div class="line-grid" id="lineGrid">
{figures}
            </div>
        </div>
    </section>

    <section class="line-cta-band">
        <div class="container">
            <h2 class="line-cta-title" data-en="Begin a consultation" data-cn="开始一次正式的咨询">Begin a consultation</h2>
            <a href="../../inquire/?ref={line}" class="line-cta-primary" data-en="Request a Proposal" data-cn="申请方案">Request a Proposal</a>
            <a href="../" class="line-cta-secondary" data-en="← Back to {label["en"]}" data-cn="← 返回{label["cn"]}">← Back to {label["en"]}</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">MIRA FLEUR</div>
                    <p class="footer-tagline" data-en="Made to order, from Irvine." data-cn="定制花艺,源自尔湾。">Made to order, from Irvine.</p>
                    <div class="footer-social"><a href="https://www.instagram.com/maisonmirafleur" target="_blank" rel="noopener noreferrer">Instagram</a></div>
                </div>
                <div class="footer-col">
                    <h5 data-en="Explore" data-cn="探索">Explore</h5>
                    <ul>
                        <li><a href="../../weekly/" data-en="Weekly Bloom" data-cn="周更花礼">Weekly Bloom</a></li>
                        <li><a href="../../gifts/" data-en="Signature Gifts" data-cn="单次花礼">Signature Gifts</a></li>
                        <li><a href="../../corporate/" data-en="Corporate Florals" data-cn="企业服务">Corporate Florals</a></li>
                        <li><a href="../../events/" data-en="Event Florals" data-cn="活动定制">Event Florals</a></li>
                        <li><a href="../../about/" data-en="About" data-cn="关于">About</a></li>
                        <li><a href="../../process/" data-en="Process" data-cn="流程">Process</a></li>
                        <li><a href="../../faq/" data-en="FAQ" data-cn="常见问题">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5 data-en="Service Area" data-cn="服务区域">Service Area</h5>
                    <p data-en="Based in Irvine" data-cn="基地：尔湾">Based in Irvine</p>
                    <p data-en="Newport Coast & surrounding OC" data-cn="服务范围：Newport Coast 与橙县周边">Newport Coast & surrounding OC</p>
                </div>
                <div class="footer-col">
                    <h5 data-en="Contact" data-cn="联系">Contact</h5>
                    <p><a href="../../inquire/" data-en="Inquire" data-cn="咨询">Inquire</a></p>
                    <p>Email: <a href="mailto:hello@mirafleur.com">hello@mirafleur.com</a></p>
                    <p>Text: <a href="sms:9498994022">949-899-4022</a></p>
                </div>
            </div>
            <div class="footer-legal">&copy; 2026 Mira Fleur. All rights reserved.</div>
        </div>
    </footer>
    <script src="../../script.js"></script>
</body>
</html>
'''
    with open(html_path, 'w') as fh:
        fh.write(page)
    print(f"✓ {line}/all/index.html    archive of {len(ordered)}")


def regen(line):
    ordered, pinned_count = build_ordered(line)
    print(f"\n[{line}] {pinned_count} pinned + {len(ordered) - pinned_count} auto-sorted = {len(ordered)} total")
    regen_main(line, ordered)
    regen_all(line, ordered)


if __name__ == "__main__":
    targets = sys.argv[1:] if len(sys.argv) > 1 else ["events", "corporate", "gifts"]
    for ln in targets:
        regen(ln)
