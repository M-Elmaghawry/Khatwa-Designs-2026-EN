# Khatwa - Creative Design Agency Landing Page

A modern, single-page static landing page built with vanilla HTML, CSS, and JavaScript. All content is dynamically loaded from JSON files using the Fetch API, making it easy to update and maintain.

## 🎯 Project Overview

This project is a professional landing page for a creative design agency called "Khatwa". It showcases services, portfolio projects, client testimonials, and includes a call-to-action section. The entire site is built using vanilla web technologies with no frameworks or build tools required.

## ✨ Features

- **📱 Fully Responsive** - Works seamlessly on mobile, tablet, and desktop devices
- **🎨 Modern Design** - Clean, professional interface with smooth animations
- **📊 JSON-Driven Content** - All content loaded dynamically from JSON files
- **♿ Accessible** - Semantic HTML, ARIA labels, and keyboard navigation support
- **⚡ Performance Optimized** - Fast loading with minimal dependencies
- **🎭 Smooth Animations** - Scroll-triggered animations using Intersection Observer
- **🔄 Auto-scrolling Clients Slider** - Infinite loop client showcase
- **💬 Interactive Testimonials** - Swiper.js powered testimonial carousel
- **📨 EmailJS Contact Form** - Contact form submissions are sent with EmailJS (no custom backend required)
- **🌐 GitHub Pages Ready** - Deploy directly to GitHub Pages

## 🛠️ Tech Stack

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Custom properties (variables), Flexbox, Grid
- **JavaScript (ES6+)** - Modules, Fetch API, Async/Await

### External Libraries
- **[Swiper.js](https://swiperjs.com/)** (v11) - Testimonials slider
- **[Font Awesome](https://fontawesome.com/)** (v6.4.0) - Icons
- **[Google Fonts](https://fonts.google.com/)** - Cairo font family

### Requirements
- ✅ No backend required
- ✅ No build tools needed
- ✅ No React, Vue, or other frameworks
- ✅ Static files only

## 📁 Project Structure

```
/
├── index.html                 # Main HTML file
│
├── assets/
│   ├── css/
│   │   └── main.css          # All styles (variables, components, responsive)
│   │
│   ├── js/
│   │   ├── app.js            # Application entry point
│   │   ├── data-loader.js    # JSON fetching and caching
│   │   ├── ui.js             # UI rendering functions
│   │   └── animations.js     # Scroll animations and interactions
│   │
│   └── images/               # (Optional) Image assets
│
├── data/
│   ├── site.json            # Hero, about, CTA, footer content
│   ├── services.json        # Service offerings
│   ├── portfolio.json       # Portfolio projects
│   ├── clients.json         # Client logos/names
│   └── testimonials.json    # Customer testimonials
│
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

To view the site locally, you need a local web server because the Fetch API doesn't work with the `file://` protocol. Choose one of these methods:

#### Option 1: Python (Recommended)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js (http-server)
```bash
# Install globally
npm install -g http-server

# Run server
http-server -p 8000
```

#### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 4: PHP
```bash
php -S localhost:8000
```

### Running the Project

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd Khatwa-Designs-2026-EN
   ```

2. **Start a local server** (use one of the methods above)
   ```bash
   python -m http.server 8000
   ```

3. **Open your browser**
   ```
   http://localhost:8000
   ```

## 📝 Content Management

All content is stored in JSON files in the `data/` directory. To update the website content:

### 1. Hero Section (`data/site.json`)
```json
{
  "hero": {
    "title": "We Design Your Identity",
    "highlight": "in One Step",
    "subtitle": "Your tagline here...",
    "primaryCta": "Start Your Project",
    "secondaryCta": "View Our Work",
    "stats": [...]
  }
}
```

### 2. Services (`data/services.json`)
```json
[
  {
    "id": "logo-design",
    "title": "Logo Design",
    "description": "Professional logo designs...",
    "icon": "fa-pen-nib",
    "color": "#FF8C42"
  }
]
```

### 3. Portfolio (`data/portfolio.json`)
```json
[
  {
    "id": 1,
    "title": "Moving Call Brand",
    "category": "Branding",
    "description": "Complete brand identity...",
    "color": "#E1306C"
  }
]
```

### 4. Clients (`data/clients.json`)
```json
[
  {
    "id": 1,
    "name": "Tech Innovators",
    "logo": "client-logo-1"
  }
]
```

### 5. Testimonials (`data/testimonials.json`)
```json
[
  {
    "id": 1,
    "name": "Khalid Al-Ahmad",
    "company": "Technology Startup",
    "text": "Outstanding work...",
    "rating": 5
  }
]
```

### 6. Contact Form Email Delivery (`data/site.json`)
```json
{
  "cta": {
    "emailjs": {
      "publicKey": "YOUR_EMAILJS_PUBLIC_KEY",
      "serviceId": "YOUR_EMAILJS_SERVICE_ID",
      "templateId": "YOUR_EMAILJS_TEMPLATE_ID",
      "toEmail": "khatwadesigns@gmail.com",
      "successMessage": "Thank you! Your message has been sent successfully.",
      "errorMessage": "Sorry, your message could not be sent right now. Please try again."
    }
  }
}
```

## 📬 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Add an email service (Gmail, Outlook, etc.) and copy the `Service ID`.
3. Create an email template and copy the `Template ID`.
4. Copy your `Public Key` from EmailJS account settings.
5. Update `data/site.json` under `cta.emailjs` with your real values.
6. In your EmailJS template, map these template variables:
   - `from_name`
   - `from_email`
   - `country`
   - `phone`
   - `service`
   - `message`
   - `reply_to`
   - `to_email`

## 🎨 Customization

### Colors
Edit CSS custom properties in `assets/css/main.css`:

```css
:root {
  --primary-blue: #1C3664;
  --secondary-yellow: #FFCD05;
  --light-gray: #CCCCCB;
  /* ... more variables */
}
```

### Typography
Change the font family in `index.html` (Google Fonts link) and update the CSS variable:

```css
:root {
  --font-family: 'Cairo', sans-serif;
}
```

### Layout
Modify spacing, dimensions, and grid layouts using CSS custom properties:

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  /* ... more spacing */
}
```

## 🌐 Deployment to GitHub Pages

### Method 1: Deploy from Root

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select branch: `main` and folder: `/ (root)`
   - Click "Save"

3. **Access your site**
   - Your site will be available at: `https://<username>.github.io/<repository>/`

### Method 2: Deploy from /docs Folder

1. **Move all files to a `docs` folder**
   ```bash
   mkdir docs
   mv index.html assets data docs/
   ```

2. **Update paths if necessary**

3. **Push and enable Pages**
   - Select folder: `/docs` in GitHub Pages settings

### Important Notes for GitHub Pages

- All paths in the code are relative, so no changes needed
- The site is fully static with no server-side processing
- JSON files are fetched using relative paths
- No build process required

## 🎯 JavaScript Architecture

### Module Structure

**app.js** - Main entry point
- Initializes the application
- Loads all data
- Renders UI components
- Starts animations

**data-loader.js** - Data management
- Fetches JSON files
- Caches loaded data
- Error handling
- Provides `loadJSON()` and `loadAllData()` functions

**ui.js** - UI rendering
- Separate render function for each section
- Template literals for HTML generation
- DOM manipulation
- Loading and error states

**animations.js** - Interactivity
- Intersection Observer for scroll animations
- Smooth scrolling navigation
- Header scroll effects
- Mobile menu toggle
- Clients slider auto-scroll
- Testimonials Swiper initialization

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ `prefers-reduced-motion` media query support
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Alt text support in JSON structure
- ✅ Focus indicators for interactive elements

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required Features
- ES6 Modules
- Fetch API
- Intersection Observer
- CSS Grid & Flexbox
- CSS Custom Properties

## 🐛 Troubleshooting

### Problem: Blank page or content not loading

**Cause:** Fetch API requires a web server

**Solution:** Use one of the local server methods mentioned above. Don't open `index.html` directly in the browser.

### Problem: CORS errors in console

**Cause:** Fetch requests blocked by browser security

**Solution:** Make sure you're running a local server, not opening the file directly.

### Problem: Animations not working

**Cause:** JavaScript not loaded or errors in console

**Solution:** 
- Check browser console for errors
- Ensure all JS files are in the correct locations
- Verify JSON files are valid (use a JSON validator)

### Problem: Swiper slider not working

**Cause:** Swiper library not loaded

**Solution:** Check internet connection (CDN links) or download Swiper locally

## 🔧 Development Tips

### Testing JSON Changes
1. Edit JSON file
2. Save changes
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Check console for errors

### Adding New Sections
1. Add HTML structure in `index.html`
2. Create render function in `ui.js`
3. Add data file in `data/` directory
4. Update `loadAllData()` in `data-loader.js`
5. Call render function in `app.js`
6. Style in `main.css`

### Performance Optimization
- Use WebP format for images
- Add `loading="lazy"` to images
- Minify CSS/JS before production
- Enable gzip compression on server

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please contact: info@khatwa.com

---

**Built with ❤️ using Vanilla JavaScript, HTML, and CSS**

*Last Updated: February 2026*
