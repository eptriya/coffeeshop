
    (function() {
        // Smooth scrolling for all anchor links that start with "#"
        const allLinks = document.querySelectorAll('a[href^="#"]');
        allLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === "#" || targetId === "") return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Additional interactive safety for product cards (CSS already does transform, but js ensures consistency)
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // optional: inline style backup but we keep class
                this.style.transform = 'translateY(-12px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Responsive mobile menu simple: already flex wrap. ensure header no overlaps
        const fixMobileNav = () => {
            if (window.innerWidth < 850) {
                document.querySelector('header').style.padding = '10px 0';
            } else {
                document.querySelector('header').style.padding = '12px 0';
            }
        };
        window.addEventListener('resize', fixMobileNav);
        fixMobileNav();
    })();
