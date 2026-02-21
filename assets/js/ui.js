/**
 * UI Rendering Module
 * Handles rendering of all page sections
 */

/**
 * Render Hero Section
 * @param {Object} data - Hero section data
 */
export function renderHero(data) {
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');

  if (!heroContent) return;

  const statsHTML = data.stats ? data.stats.map(stat => `
    <div class="stat-item">
      <i class="fas ${stat.icon}"></i>
      <h3 class="stat-value">${stat.value}</h3>
      <p class="stat-label">${stat.label}</p>
    </div>
  `).join('') : '';

  heroContent.innerHTML = `
    ${data.tag ? `<div class="hero-tag"><i class="fas fa-circle"></i> ${data.tag}</div>` : ''}
    <h1 class="hero-title">
      ${data.title} <span class="highlight">${data.highlight || ''}</span>
    </h1>
    <p class="hero-subtitle">${data.subtitle || ''}</p>
    <div class="hero-cta">
      <button class="btn-primary" aria-label="${data.primaryCta}">${data.primaryCta}</button>
      <button class="btn-secondary" aria-label="${data.secondaryCta}">${data.secondaryCta}</button>
    </div>
    <div class="hero-stats">
      ${statsHTML}
    </div>
  `;

  if (heroImage) {
    heroImage.innerHTML = `
      <div class="hero-image-placeholder">
        <i class="fas fa-palette"></i>
        <p>${data.heroImage || 'Creative Design'}</p>
      </div>
    `;
  }
}

/**
 * Render Services Section
 * @param {Array} services - Array of service objects
 */
export function renderServices(services) {
  const servicesGrid = document.querySelector('.services-grid');
  if (!servicesGrid) return;

  servicesGrid.innerHTML = services.map(service => `
    <div class="service-card" data-aos="fade-up">
      <div class="service-icon" style="background-color: ${service.color || '#1C3664'}20">
        <i class="fas ${service.icon}" style="color: ${service.color || '#1C3664'}"></i>
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <a href="#" class="service-link">
        ${service.link} <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `).join('');
}

/**
 * Render Portfolio Section
 * @param {Array} portfolio - Array of portfolio items
 */
export function renderPortfolio(portfolio) {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = portfolio.map(item => `
    <div class="portfolio-card" data-aos="zoom-in">
      <div class="portfolio-image" style="background: linear-gradient(135deg, ${item.color || '#1C3664'} 0%, ${item.color || '#1C3664'}88 100%)">
        <div class="portfolio-placeholder">
          <i class="fas fa-image"></i>
        </div>
      </div>
      <div class="portfolio-info">
        <h3 class="portfolio-title">${item.title}</h3>
        <p class="portfolio-category">${item.category}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Render Clients Section
 * @param {Array} clients - Array of client objects
 */
export function renderClients(clients) {
  const clientsSlider = document.querySelector('.clients-slider');
  if (!clientsSlider) return;

  clientsSlider.innerHTML = `
    <div class="clients-track">
      ${clients.concat(clients).map(client => `
        <div class="client-logo">
          <img src="assets/images/clients/${client.logo}" alt="${client.logoAlt || client.name}" loading="lazy">
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render Testimonials Section
 * @param {Array} testimonials - Array of testimonial objects
 */
export function renderTestimonials(testimonials) {
  const testimonialsWrapper = document.querySelector('.swiper-wrapper');
  if (!testimonialsWrapper) return;

  testimonialsWrapper.innerHTML = testimonials.map(testimonial => {
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    return `
      <div class="swiper-slide">
        <div class="testimonial-card">
          <div class="testimonial-quote">
            <i class="fas fa-quote-left"></i>
          </div>
          <p class="testimonial-text">"${testimonial.text}"</p>
          <div class="testimonial-rating">${stars}</div>
          <div class="testimonial-author">
            <div class="author-avatar">
              <i class="fas fa-user"></i>
            </div>
            <div class="author-info">
              <h4 class="author-name">${testimonial.name}</h4>
              <p class="author-company">${testimonial.position || testimonial.company}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Why Choose Section
 * @param {Object} data - Why choose section data
 */
export function renderWhyChoose(data) {
  const whySection = document.querySelector('.why-section .container');
  if (!whySection) return;

  whySection.innerHTML = `
    <div class="section-header">
      <span class="section-tag">${data.tag || 'Our Advantages'}</span>
      <h2 class="section-title">${data.title}</h2>
      <p class="section-subtitle">${data.subtitle}</p>
    </div>
    <div class="features-grid">
      ${data.features.map(feature => `
        <div class="feature-card" data-aos="fade-up">
          <div class="feature-icon" style="background-color: ${feature.color}20">
            <i class="fas ${feature.icon}" style="color: ${feature.color}"></i>
          </div>
          <h3 class="feature-title">${feature.title}</h3>
          <p class="feature-description">${feature.description}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render CTA Section
 * @param {Object} data - CTA section data
 */
export function renderCTA(data) {
  const ctaSection = document.querySelector('.cta-section .container');
  if (!ctaSection) return;

  ctaSection.innerHTML = `
    <div class="cta-content">
      <span class="section-tag">${data.tag || 'Get in Touch'}</span>
      <h2 class="cta-title">${data.title}</h2>
      <p class="cta-subtitle">${data.subtitle}</p>
      <button class="btn-primary btn-large" aria-label="${data.buttonText}">
        ${data.buttonText} <i class="fas ${data.buttonIcon || 'fa-arrow-right'}"></i>
      </button>
    </div>
  `;
}

/**
 * Render Footer Text
 * @param {string} text - Footer description text
 */
export function renderFooter(text) {
  const footerDescription = document.querySelector('.footer-description');
  if (!footerDescription) return;

  footerDescription.textContent = text;
}

/**
 * Show loading state
 */
export function showLoading() {
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('loading');
  }
}

/**
 * Hide loading state
 */
export function hideLoading() {
  const main = document.querySelector('main');
  if (main) {
    main.classList.remove('loading');
  }
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
export function showError(message) {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `
      <div class="error-container">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>Oops! Something went wrong</h2>
        <p>${message}</p>
        <button class="btn-primary" onclick="location.reload()">Reload Page</button>
      </div>
    `;
  }
}
