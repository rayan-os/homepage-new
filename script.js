/**
 * PASSAGE - Julian Capital Style
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Intro Animation
    // ============================================
    const intro = document.getElementById('intro');
    
    setTimeout(() => {
        intro.classList.add('hidden');
    }, 2000);

    // ============================================
    // Theme Toggle
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ============================================
    // Navbar Scroll
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // Case Studies Accordion
    // ============================================
    const caseItems = document.querySelectorAll('.case-item');
    
    caseItems.forEach(item => {
        const header = item.querySelector('.case-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            caseItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ============================================
    // Value Props Hover
    // ============================================
    document.querySelectorAll('.value-prop').forEach(prop => {
        prop.addEventListener('mouseenter', () => {
            prop.style.paddingLeft = '12px';
        });
        prop.addEventListener('mouseleave', () => {
            prop.style.paddingLeft = '0';
        });
    });

    // ============================================
    // Smooth Scroll
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // CTA Lines Animation
    // ============================================
    const ctaSection = document.querySelector('.cta-section');
    const ctaLines = document.querySelectorAll('.cta-lines span');
    
    if (ctaSection && ctaLines.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ctaLines.forEach((line, index) => {
                        line.style.transition = `transform 0.5s ease ${index * 0.1}s`;
                        line.style.transform = 'scaleX(1)';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(ctaSection);
    }

    // ============================================
    // Capability Cards Hover
    // ============================================
    document.querySelectorAll('.capability-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    console.log('Passage loaded');
});
