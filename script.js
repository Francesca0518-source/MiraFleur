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

document.querySelectorAll('.about-text, .about-visual, .service-card, .portfolio-item, .contact-wechat, .social-link-card, .quote, .section-label, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

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
        nav.style.background = 'rgba(245, 240, 235, 0.98)';
    } else {
        nav.style.background = 'rgba(245, 240, 235, 0.92)';
    }
});
