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
      <button type="button" class="btn-primary hero-consultation-btn" aria-label="${data.primaryCta}">${data.primaryCta}</button>
      <button type="button" class="btn-secondary hero-portfolio-btn" aria-label="${data.secondaryCta}">${data.secondaryCta}</button>
    </div>
    <div class="hero-stats">
      ${statsHTML}
    </div>
  `;

  const consultationButton = heroContent.querySelector('.hero-consultation-btn');
  const portfolioButton = heroContent.querySelector('.hero-portfolio-btn');

  consultationButton?.addEventListener('click', () => {
    const contactSection = document.getElementById('cta');

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.hash = 'cta';
  });

  portfolioButton?.addEventListener('click', () => {
    window.open('https://www.behance.net/khatwadesigns2', '_blank', 'noopener,noreferrer');
  });

  if (heroImage) {
    if (data.heroImage) {
      heroImage.innerHTML = `
        <div class="hero-image-card">
          <img src="${data.heroImage}" alt="${data.heroImageAlt || 'Creative Design'}" class="hero-image-asset" loading="lazy">
          <div class="hero-rating-badge" aria-label="Client rating">
            <span class="hero-badge-icon"><i class="fas fa-star"></i></span>
            <div class="hero-badge-text">
              <strong>5.0</strong>
              <span>Client Rating</span>
            </div>
          </div>
          <div class="hero-creative-badge" aria-label="Creative design identity">
            <span class="hero-badge-icon"><i class="fas fa-palette"></i></span>
            <div class="hero-badge-text">
              <strong>Creative Design</strong>
              <span>Unique Identity</span>
            </div>
          </div>
        </div>
      `;
    } else {
      heroImage.innerHTML = `
        <div class="hero-image-placeholder">
          <i class="fas fa-palette"></i>
          <p>Creative Design</p>
        </div>
      `;
    }
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
 * @param {Array} services - Array of service objects
 */
export function renderCTA(data, services = []) {
  const ctaSection = document.querySelector('.cta-section .container');
  if (!ctaSection) return;

  const serviceOptionsHTML = services.map(service => `
            <option value="${service.id}">${service.title}</option>
          `).join('');

  ctaSection.innerHTML = `
    <div class="contact-section-header">
      <h2 class="cta-title">${data.tag || 'Get In Touch'}</h2>
      <p class="cta-subtitle">${data.formSubtitle || 'Let\'s start a conversation'}</p>
    </div>

    <div class="contact-layout">
      <div class="contact-info-list" data-aos="fade-up">
        <article class="contact-info-card">
          <div class="contact-icon"><i class="fas fa-envelope"></i></div>
          <div>
            <h3 class="contact-card-title">Email</h3>
            <p class="contact-card-text">khatwadesigns@gmail.com</p>
          </div>
        </article>

        <article class="contact-info-card">
          <div class="contact-icon"><i class="fas fa-phone"></i></div>
          <div>
            <h3 class="contact-card-title">Phone</h3>
            <p class="contact-card-text">(+966)531175199</p>
            <p class="contact-card-text">(+20)1096189832</p>
          </div>
        </article>

        <article class="contact-info-card">
          <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
          <div>
            <h3 class="contact-card-title">Location</h3>
            <p class="contact-card-text">Riyadh, Saudi Arabia</p>
            <p class="contact-card-text">Mansoura, Egypt</p>
          </div>
        </article>

        <article class="contact-info-card">
          <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
          <div>
            <h3 class="contact-card-title">WhatsApp</h3>
            <p class="contact-card-text">(+966)531175199</p>
            <p class="contact-card-text">(+20)1096189832</p>
          </div>
        </article>
      </div>

      <div class="contact-form-card" data-aos="fade-up">
        <form class="contact-form" novalidate>
          <input type="text" name="name" placeholder="Your Name" aria-label="Your Name">
          <input type="email" name="email" placeholder="Your Email" aria-label="Your Email">
          <select name="country" class="country-select" aria-label="Select Country">
            <option value="Egypt" data-code="+20" data-flag="🇪🇬" selected>Egypt</option>
            <option value="Saudi Arabia" data-code="+966" data-flag="🇸🇦">Saudi Arabia</option>
            <option value="UAE" data-code="+971" data-flag="🇦🇪">UAE</option>
            <option value="Kuwait" data-code="+965" data-flag="🇰🇼">Kuwait</option>
            <option value="Bahrain" data-code="+973" data-flag="🇧🇭">Bahrain</option>
            <option value="Qatar" data-code="+974" data-flag="🇶🇦">Qatar</option>
            <option value="Iraq" data-code="+964" data-flag="🇮🇶">Iraq</option>
            <option value="Turkey" data-code="+90" data-flag="🇹🇷">Turkey</option>
            <option value="Spain" data-code="+34" data-flag="🇪🇸">Spain</option>
            <option value="Other" data-code="+000" data-flag="🌐">Other</option>
          </select>
          <div class="phone-input-group">
            <div class="phone-prefix-display" aria-hidden="true">
              <span class="phone-flag" id="phone-flag">🇸🇦</span>
              <span class="phone-code" id="phone-code">+966</span>
            </div>
            <input type="hidden" name="phonePrefix" id="phone-prefix-input" value="+966">
            <input type="tel" name="phone" class="phone-number-input" placeholder="Your Phone" aria-label="Your Phone Number">
          </div>
          <select name="service" aria-label="Select Service">
            <option value="" selected disabled>Select Service</option>
            ${serviceOptionsHTML}
          </select>
          <textarea name="message" rows="5" placeholder="Your Message" aria-label="Your Message"></textarea>
          <button type="submit" class="btn-primary" aria-label="Send Message">Send Message</button>
        </form>
      </div>
    </div>
  `;

  const contactForm = ctaSection.querySelector('.contact-form');
  const countrySelect = ctaSection.querySelector('.country-select');
  const phoneFlagElement = ctaSection.querySelector('#phone-flag');
  const phoneCodeElement = ctaSection.querySelector('#phone-code');
  const phonePrefixInput = ctaSection.querySelector('#phone-prefix-input');
  const submitButton = ctaSection.querySelector('.contact-form button[type="submit"]');
  const defaultSubmitButtonLabel = submitButton?.textContent || 'Send Message';
  const emailJsConfig = data.emailjs || {};

  const setSubmittingState = (isSubmitting) => {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? 'Sending...' : defaultSubmitButtonLabel;
  };

  const isEmailJsConfigured = ['publicKey', 'serviceId', 'templateId'].every((key) => {
    const value = String(emailJsConfig[key] || '').trim();
    return value && !value.startsWith('YOUR_EMAILJS_');
  });

  const updatePhonePrefix = () => {
    if (!countrySelect || !phoneFlagElement || !phoneCodeElement || !phonePrefixInput) return;

    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const phoneCode = selectedOption.dataset.code || '+000';
    const phoneFlag = selectedOption.dataset.flag || '🌐';

    phoneCodeElement.textContent = phoneCode;
    phoneFlagElement.textContent = phoneFlag;
    phonePrefixInput.value = phoneCode;
  };

  countrySelect?.addEventListener('change', updatePhonePrefix);
  updatePhonePrefix();

  contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const fullPhone = `${formData.get('phonePrefix')}${(formData.get('phone') || '').toString().trim()}`;
    formData.set('phone', fullPhone);
    const submissionData = Object.fromEntries(formData.entries());

    const requiredFields = [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'country', label: 'Country' },
      { key: 'phone', label: 'Phone' },
      { key: 'message', label: 'Message' }
    ];

    const missingFields = requiredFields
      .filter((field) => !String(submissionData[field.key] || '').trim())
      .map((field) => field.label);

    if (missingFields.length) {
      alert(`Please fill in the required fields: ${missingFields.join(', ')}`);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(String(submissionData.email).trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!window.emailjs || !isEmailJsConfigured) {
      alert('Email service is not configured yet. Please update EmailJS settings in data/site.json.');
      return;
    }

    const templateParams = {
      from_name: String(submissionData.name || '').trim(),
      from_email: String(submissionData.email || '').trim(),
      country: String(submissionData.country || '').trim(),
      phone: String(submissionData.phone || '').trim(),
      service: String(submissionData.service || 'General').trim(),
      message: String(submissionData.message || '').trim(),
      reply_to: String(submissionData.email || '').trim(),
      to_email: String(emailJsConfig.toEmail || 'khatwadesigns@gmail.com').trim()
    };

    try {
      setSubmittingState(true);

      await window.emailjs.send(
        String(emailJsConfig.serviceId).trim(),
        String(emailJsConfig.templateId).trim(),
        templateParams,
        {
          publicKey: String(emailJsConfig.publicKey).trim()
        }
      );

      alert(emailJsConfig.successMessage || 'Thank you! Your message has been sent successfully.');
      contactForm.reset();
      updatePhonePrefix();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      alert(emailJsConfig.errorMessage || 'Sorry, your message could not be sent right now. Please try again.');
    } finally {
      setSubmittingState(false);
    }
  });
}

/**
 * Render Footer Text and Services Links
 * @param {string} text - Footer description text
 * @param {Array} services - Array of service objects
 */
export function renderFooter(text, services = []) {
  const footerDescription = document.querySelector('.footer-description');
  const footerLinks = document.querySelector('.footer-links');

  if (!footerDescription) return;

  footerDescription.textContent = text;

  if (footerLinks) {
    footerLinks.innerHTML = services.map(service => `
      <li><a href="#services">${service.title}</a></li>
    `).join('');
  }
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
