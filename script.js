// ===== Language Toggle =====
let currentLang = localStorage.getItem('mirafleur-lang') || 'en';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('mirafleur-lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    // Update all translatable elements
    document.querySelectorAll('[data-en][data-cn]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) {
            // Preserve innerHTML for elements with <br> tags
            if (text.includes('<br>') || text.includes('&')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update toggle button active state
    document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('active', lang === 'en');
    });
    document.querySelectorAll('.lang-cn').forEach(el => {
        el.classList.toggle('active', lang === 'cn');
    });

}

function toggleLang() {
    setLang(currentLang === 'en' ? 'cn' : 'en');
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLang(currentLang);
});

// ===== Mobile Nav Toggle =====
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
    });
});

// ===== Scroll Fade-in Animation =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.about-text, .about-visual, .service-card, .portfolio-item, .occasion-card, .process-step, .testimonial-card, .contact-wechat, .social-link-card, .section-label, .section-title, .section-subtitle, .closing-title, .closing-sub, .closing-btn, .intro-text').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Hide floating Text Us on /inquire =====
if (window.location.pathname.includes('/inquire')) {
    document.body.classList.add('no-floating');
}

// ===== Copy WeChat ID =====
function copyWechat() {
    const wechatId = 'maisonmirafleur';
    const btn = document.querySelector('.copy-btn');
    const successText = currentLang === 'en' ? 'Copied!' : '已复制 ✓';
    const defaultText = btn.getAttribute('data-' + currentLang) || btn.textContent;

    navigator.clipboard.writeText(wechatId).then(() => {
        btn.textContent = successText;
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = defaultText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        const input = document.createElement('input');
        input.value = wechatId;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        btn.textContent = successText;
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = defaultText;
            btn.classList.remove('copied');
        }, 2000);
    });
}

// ===== Nav Background on Scroll =====
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.style.background = 'rgba(253, 251, 247, 0.98)';
    } else {
        nav.style.background = 'rgba(253, 251, 247, 0.92)';
    }
});

/* ============================================================
   Dev Mode (?dev=1)
   Hover any image → tooltip shows filename
   Hover any [data-en] → tooltip shows data-en + data-cn
   Click anywhere on tooltip → copy current text to clipboard
   Sitewide. Off by default. Add ?dev=1 to any URL.
   ============================================================ */
(function() {
    if (new URLSearchParams(location.search).get('dev') !== '1') return;
    document.body.classList.add('dev-mode');

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
        .dev-tooltip {
            position: fixed;
            z-index: 99999;
            background: rgba(15, 27, 40, 0.96);
            color: #F5F1E8;
            padding: 10px 14px;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 12px;
            line-height: 1.6;
            border-radius: 4px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.12s;
            max-width: 480px;
            word-break: break-all;
            white-space: pre-wrap;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .dev-tooltip.show { opacity: 1; }
        .dev-tooltip .k { color: #C99560; }
        .dev-tooltip .h { color: #A8B8D0; }
        body.dev-mode [data-en],
        body.dev-mode img {
            outline-offset: 2px;
            transition: outline 0.1s;
        }
        body.dev-mode [data-en]:hover {
            outline: 1px dashed rgba(168, 184, 208, 0.6);
            cursor: help;
        }
        body.dev-mode img:hover {
            outline: 2px solid rgba(242, 201, 164, 0.9);
            cursor: help;
        }
        .dev-badge {
            position: fixed;
            top: 12px;
            left: 12px;
            z-index: 99998;
            background: rgba(242, 201, 164, 0.95);
            color: #2A3558;
            padding: 6px 12px;
            font-family: ui-monospace, monospace;
            font-size: 11px;
            letter-spacing: 0.1em;
            border-radius: 999px;
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);

    // Tooltip element
    const tip = document.createElement('div');
    tip.className = 'dev-tooltip';
    document.body.appendChild(tip);

    // Badge
    const badge = document.createElement('div');
    badge.className = 'dev-badge';
    badge.textContent = '🔧 DEV MODE · hover any image or text';
    document.body.appendChild(badge);

    function show(content, e) {
        tip.innerHTML = content;
        tip.classList.add('show');
        const pad = 14;
        const tw = tip.offsetWidth || 280;
        const th = tip.offsetHeight || 60;
        let x = e.clientX + pad;
        let y = e.clientY + pad;
        if (x + tw > window.innerWidth - pad) x = e.clientX - tw - pad;
        if (y + th > window.innerHeight - pad) y = e.clientY - th - pad;
        tip.style.left = Math.max(pad, x) + 'px';
        tip.style.top  = Math.max(pad, y) + 'px';
    }
    function hide() { tip.classList.remove('show'); }

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }

    // Handler for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mousemove', e => {
            const src = img.getAttribute('src') || '';
            const filename = src.split('/').pop();
            const folder = src.substring(0, src.lastIndexOf('/'));
            const alt = img.getAttribute('alt') || '';
            show(
                `<span class="k">image</span> ${escapeHtml(filename)}\n` +
                `<span class="k">path </span> <span class="h">${escapeHtml(folder)}/</span>\n` +
                `<span class="k">alt  </span> ${escapeHtml(alt)}`,
                e
            );
        });
        img.addEventListener('mouseleave', hide);
        img.addEventListener('click', e => {
            if (!e.metaKey && !e.ctrlKey && !e.altKey) return; // don't break normal links/lightbox
            const src = img.getAttribute('src') || '';
            const filename = src.split('/').pop();
            navigator.clipboard.writeText(filename);
            badge.textContent = '✓ Copied: ' + filename;
            setTimeout(() => badge.textContent = '🔧 DEV MODE · hover any image or text', 1500);
            e.preventDefault();
        });
    });

    // Handler for text with data-en
    document.querySelectorAll('[data-en]').forEach(el => {
        el.addEventListener('mousemove', e => {
            const en = el.getAttribute('data-en') || '';
            const cn = el.getAttribute('data-cn') || '';
            const tag = el.tagName.toLowerCase();
            const cls = el.className ? '.' + el.className.split(' ').slice(0,2).join('.') : '';
            show(
                `<span class="k">tag  </span> ${escapeHtml(tag + cls)}\n` +
                `<span class="k">EN   </span> ${escapeHtml(en)}\n` +
                `<span class="k">中文 </span> ${escapeHtml(cn)}`,
                e
            );
            e.stopPropagation();
        });
        el.addEventListener('mouseleave', hide);
    });

    console.log('%c🔧 Mira Fleur DEV MODE active', 'color:#C99560;font-weight:bold;font-size:14px');
    console.log('Hover images/text for path & content. Cmd+click image to copy filename.');
})();

