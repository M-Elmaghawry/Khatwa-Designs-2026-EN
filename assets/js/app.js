/**
 * Main Application Entry Point
 * Initializes the application by loading data and rendering UI
 */

import { loadAllData } from './data-loader.js';
import { 
  renderHero, 
  renderServices, 
  renderPortfolio, 
  renderClients, 
  renderTestimonials,
  renderWhyChoose,
  renderCTA,
  renderFooter,
  showLoading,
  hideLoading,
  showError
} from './ui.js';
import { initAllAnimations } from './animations.js';

function updateFooterYear() {
  const yearElement = document.getElementById('current-year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Initialize the application
 */
async function init() {
  try {
    // Show loading state
    showLoading();

    // Load all data from JSON files
    const data = await loadAllData();

    // Render all sections
    renderHero(data.site.hero);
    renderServices(data.services);
    renderPortfolio(data.portfolio);
    renderClients(data.clients);
    renderTestimonials(data.testimonials);
    renderWhyChoose(data.site.whyChoose);
    renderCTA(data.site.cta, data.services);
    renderFooter(data.site.footerText, data.services);
    updateFooterYear();

    // Hide loading state
    hideLoading();

    // Initialize animations and interactions
    initAllAnimations();

    console.log('✅ Application initialized successfully');
  } catch (error) {
    console.error('❌ Application initialization failed:', error);
    hideLoading();
    showError('Failed to load page content. Please try refreshing the page.');
  }
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
