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
document.querySelectorAll('.about-text, .about-visual, .service-card, .contact-item, .quote, .section-label, .section-title').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.style.background = 'rgba(245, 240, 235, 0.98)';
    } else {
        nav.style.background = 'rgba(245, 240, 235, 0.92)';
    }
});
