// Mobile nav toggle
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

// Scroll fade-in animation
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

// Add fade-in class to elements
document.querySelectorAll('.about-text, .about-visual, .service-card, .contact-wechat, .social-link-card, .quote, .section-label, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Copy WeChat ID
function copyWechat() {
    const wechatId = 'maisonmirafleur';
    navigator.clipboard.writeText(wechatId).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '已复制 ✓';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = '复制微信号';
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const input = document.createElement('input');
        input.value = wechatId;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '已复制 ✓';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = '复制微信号';
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.style.background = 'rgba(245, 240, 235, 0.98)';
    } else {
        nav.style.background = 'rgba(245, 240, 235, 0.92)';
    }
});
