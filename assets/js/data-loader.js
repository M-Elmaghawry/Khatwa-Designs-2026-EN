/**
 * Data Loader Module
 * Handles fetching and caching JSON data files
 */

// Cache object to store loaded data
const dataCache = {};

/**
 * Load JSON data from a file path
 * @param {string} path - Path to JSON file
 * @returns {Promise<Object>} Parsed JSON data
 */
export async function loadJSON(path) {
  // Return cached data if available
  if (dataCache[path]) {
    return dataCache[path];
  }

  try {
    const response = await fetch(path);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Cache the data
    dataCache[path] = data;
    
    return data;
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    throw error;
  }
}

/**
 * Load all data files at once
 * @returns {Promise<Object>} Object containing all data
 */
export async function loadAllData() {
  try {
    const [site, services, portfolio, clients, testimonials] = await Promise.all([
      loadJSON('data/site.json'),
      loadJSON('data/services.json'),
      loadJSON('data/portfolio.json'),
      loadJSON('data/clients.json'),
      loadJSON('data/testimonials.json')
    ]);

    return {
      site,
      services,
      portfolio,
      clients,
      testimonials
    };
  } catch (error) {
    console.error('Error loading data:', error);
    // Return fallback data structure
    return {
      site: { hero: {}, about: {}, whyChoose: {}, cta: {}, footerText: '' },
      services: [],
      portfolio: [],
      clients: [],
      testimonials: []
    };
  }
}

/**
 * Clear data cache
 */
export function clearCache() {
  Object.keys(dataCache).forEach(key => delete dataCache[key]);
}
