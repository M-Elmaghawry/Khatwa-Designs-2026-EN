/**
 * Animations Module
 * Handles scroll animations and interactions using Intersection Observer
 */

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Initialize scroll animations for elements
 */
export function initScrollAnimations() {
  // Skip animations if user prefers reduced motion
  if (prefersReducedMotion) {
    // Add 'visible' class to all animated elements immediately
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.classList.add('aos-animate');
    });
    return;
  }

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add('aos-animate');
          // Optionally unobserve after animation (one-time animation)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all elements with data-aos attribute
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize smooth scrolling for navigation links
 */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip empty hash or just #
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize header scroll effect
 */
export function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 500) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });
}

/**
 * Initialize mobile menu toggle
 */
export function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Update aria-expanded
    const isExpanded = navMenu.classList.contains('active');
    mobileToggle.setAttribute('aria-expanded', isExpanded);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isExpanded ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Initialize clients slider auto-scroll
 */
export function initClientsSlider() {
  const track = document.querySelector('.clients-track');
  if (!track) return;

  let scrollPosition = 0;
  const scrollSpeed = 0.5;
  let isPaused = false;

  // Clone items for infinite scroll
  const items = track.querySelectorAll('.client-logo');
  const itemWidth = items[0]?.offsetWidth || 200;
  const totalWidth = itemWidth * (items.length / 2); // Half because we duplicated

  function animate() {
    if (!isPaused) {
      scrollPosition += scrollSpeed;
      
      // Reset position for infinite loop
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      track.style.transform = `translateX(-${scrollPosition}px)`;
    }
    
    requestAnimationFrame(animate);
  }

  // Pause on hover
  track.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  track.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  animate();
}

/**
 * Initialize testimonials Swiper slider
 */
export function initTestimonialsSlider() {
  // Wait for Swiper to be available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded');
    return;
  }

  const swiperContainer = document.querySelector('.testimonials-slider');
  if (!swiperContainer) return;

  new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}

/**
 * Initialize card hover effects
 */
export function initCardHoverEffects() {
  const cards = document.querySelectorAll('.service-card, .portfolio-card, .feature-card');
  
  if (prefersReducedMotion) return;

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

/**
 * Initialize all animations
 */
export function initAllAnimations() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupAnimations();
    });
  } else {
    setupAnimations();
  }
}

function setupAnimations() {
  initScrollAnimations();
  initSmoothScroll();
  initHeaderScroll();
  initMobileMenu();
  initClientsSlider();
  initTestimonialsSlider();
  initCardHoverEffects();
}
