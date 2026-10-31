import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'browser-extensions-manager',
    title: 'Browser Extensions Manager',
    shortDescription: 'Responsive extension management dashboard with theme toggling, search, and dynamic status controls.',
    fullDescription: 'A production-grade extension management dashboard built with React, TypeScript, and Tailwind CSS. Implements real-time extension filtering, categorized list views, individual enable/disable state persistence, responsive drawer layouts, and system-aware dark/light theme support.',
    category: ['frontend', 'react-ts'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/images/projects/browser-extensions-manager.jpg',
    githubUrl: 'https://github.com/Sumeya472/browser-extensions-manager',
    liveUrl: 'https://browser-extensions-manager-ruby.vercel.app/',
    featured: true,
    highlights: [
      'Modular TypeScript architecture with clean separation of state and presentation',
      'Instant search and multi-category filtering',
      'Full dark mode and light mode theme persistence',
      'Accessible keyboard navigation and focus management'
    ],
    architecture: 'React (Vite) + TypeScript + Tailwind CSS with localStorage state management',
    metrics: '100% responsive, sub-second search latency'
  },
  {
    id: 'mortgage-repayment-calculator',
    title: 'Mortgage Repayment Calculator',
    shortDescription: 'Precision financial calculator estimating monthly repayments and total loan costs with live validation.',
    fullDescription: 'An interactive financial web application developed with TypeScript, Tailwind CSS, and Vite. Translates complex financial formulas for mortgage repayment and interest-only loans into an intuitive, accessible user interface with instant numeric feedback and rigorous error validation.',
    category: ['frontend', 'react-ts'],
    tags: ['TypeScript', 'Tailwind CSS', 'Vite', 'Financial Algorithms'],
    image: '/images/projects/mortgage-repayment-calculator.jpg',
    githubUrl: 'https://github.com/Sumeya472/mortgage-repayment-calculator',
    featured: true,
    highlights: [
      'Exact mortgage amortization math formulas for both principal repayment & interest-only models',
      'Accessible radio group selection and real-time currency formatting',
      'Granular field error handling for empty, negative, or invalid numeric inputs',
      'Dedicated result view with monthly payment Breakdown & total repayment sums'
    ],
    architecture: 'TypeScript + Tailwind CSS + Vite (Single-page reactive calculator)',
    metrics: 'Zero external math libraries, lightweight bundle'
  },
  {
    id: 'advice-generator-app',
    title: 'Advice Generator App',
    shortDescription: 'Dynamic quote generator integrating the Advice Slip REST API with smooth responsive animations.',
    fullDescription: 'A responsive advice generator web application built with React, TypeScript, and Tailwind CSS. Fetches randomized inspirational wisdom from the external Advice Slip API, featuring sleek neon accent styling, loading spinner states, responsive typography, and dice roll animations.',
    category: ['frontend', 'react-ts'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: '/images/projects/advice-generator-app.jpg',
    githubUrl: 'https://github.com/Sumeya472/advice-generator-app',
    liveUrl: 'https://advice-generator-app-liard-five.vercel.app/',
    featured: true,
    highlights: [
      'Asynchronous REST API consumption with native Fetch API and error boundaries',
      'Debounced button interactions to prevent API spamming',
      'Modern glassmorphic card aesthetic with glowing neon accents',
      'Full cross-browser responsiveness across all screen sizes'
    ],
    architecture: 'React 18 + TypeScript + Tailwind CSS with asynchronous API handling',
    metrics: 'Sub-50ms render time, accessible ARIA announcements'
  },
  {
    id: 'bento-grid',
    title: 'Modern Bento Grid Layout',
    shortDescription: 'Responsive modular Bento Grid interface highlighting advanced CSS Grid placement and modern card hierarchy.',
    fullDescription: 'A responsive Bento Grid layout crafted with modern semantic HTML and Tailwind CSS. Highlights advanced CSS Grid template areas, responsive stacking across mobile, tablet, and desktop viewports, micro-interactions, and visual content hierarchy.',
    category: ['frontend', 'ui-ux'],
    tags: ['HTML5', 'Tailwind CSS', 'CSS Grid', 'UI/UX Design'],
    image: '/images/projects/bento-grid.jpg',
    githubUrl: 'https://github.com/Sumeya472/bento-grid',
    liveUrl: 'https://bento-grid-ebon-kappa.vercel.app/',
    featured: true,
    highlights: [
      'Multi-column grid architecture using CSS Grid template areas',
      'Seamless breakpoint adaptations from single column to complex asymmetric bento',
      'Rich typography hierarchy with visual emphasis on conversion metrics',
      'Accessible semantic structure with image alt descriptions'
    ],
    architecture: 'Semantic HTML5 + Tailwind CSS Grid layout system',
    metrics: 'Pixel-perfect mobile to 4K responsive scaling'
  },
  {
    id: 'news-homepage',
    title: 'News Homepage Portal',
    shortDescription: 'Responsive editorial news portal with mobile drawer navigation, featured articles, and top rankings.',
    fullDescription: 'An editorial news homepage built with HTML and Tailwind CSS. Features a full mobile slide-in navigation overlay, asymmetric hero article grid, trending new sidebar rankings, and high-contrast accessibility.',
    category: ['frontend', 'ui-ux'],
    tags: ['HTML5', 'Tailwind CSS', 'Responsive Grid', 'Editorial UI'],
    image: '/images/projects/news-homepage.jpg',
    githubUrl: 'https://github.com/Sumeya472/news-homepage',
    liveUrl: 'https://news-homepage-blue-eight.vercel.app/',
    highlights: [
      'Interactive mobile hamburger navigation menu with backdrop overlay',
      'Asymmetric CSS Grid with featured hero banner and sidebar trending list',
      'Numbered ranking cards with responsive typography',
      'Accessible semantic landmarks and focus styling'
    ],
    architecture: 'HTML5 + Tailwind CSS + Vanilla JS for mobile drawer'
  },

  {
    id: 'newsletter-sign-up-with-success-message',
    title: 'Newsletter Sign-Up with Success Modal',
    shortDescription: 'Subscription component with real-time email regex validation, accessible error handling, and success confirmation.',
    fullDescription: 'An interactive subscription component built with TypeScript and Tailwind CSS. Features real-time email format validation, error state messaging, conditional rendering of a dedicated success confirmation card upon valid submission, and a reset dismissal flow.',
    category: ['frontend', 'react-ts'],
    tags: ['TypeScript', 'Tailwind CSS', 'Form Validation', 'Interactive'],
    image: '/images/projects/newsletter-sign-up.jpg',
    githubUrl: 'https://github.com/Sumeya472/newsletter-sign-up-with-success-message',
    liveUrl: 'https://newsletter-sign-up-with-success-mes-zeta.vercel.app',
    highlights: [
      'Client-side email validation with immediate visual error feedback',
      'Smooth state transition between signup form and confirmation dialog',
      'Accessible input labels, helper text, and button states',
      'Dual layout support: desktop card with feature list & mobile stacked'
    ],
    architecture: 'TypeScript + Tailwind CSS + Form state controller'
  },
  {
    id: 'Ihsan',
    title: 'Ihsan Community Web Platform',
    shortDescription: 'Digital community portal built with JavaScript and responsive web design for accessible user workflows.',
    fullDescription: 'A community-focused web platform developed with JavaScript, HTML, and CSS. Provides structured resources, user-friendly navigation, accessible layout design, and responsive browsing across devices.',
    category: ['frontend'],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web App'],
    image: '/images/projects/portfolio-v1.jpg',
    githubUrl: 'https://github.com/Sumeya472/Ihsan',
    liveUrl: 'https://ihsan-xi.vercel.app',
    highlights: [
      'Clean multi-section information architecture',
      'Lightweight, vanilla implementation for fast loading times',
      'Mobile-first responsive structure'
    ],
    architecture: 'Vanilla JavaScript + CSS3 + HTML5'
  },
  {
    id: 'Arsenal-Fan-Blog',
    title: 'Arsenal Fan Blog & Content Platform',
    shortDescription: 'Sports blog platform featuring dynamic articles, club news, match previews, and responsive editorial views.',
    fullDescription: 'A personal blog web application built with HTML, CSS, and JavaScript. Includes structured article sections, match commentary previews, responsive reading typography, and interactive navigation.',
    category: ['frontend'],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Blog Platform'],
    image: '/images/projects/blog-post.jpg',
    githubUrl: 'https://github.com/Sumeya472/Arsenal-Fan-Blog',
    liveUrl: 'https://blog-post-ebon.vercel.app',
    highlights: [
      'Multiple content sections with interactive card browsing',
      'Optimized reading typography and responsive images',
      'Custom styling reflecting modern football media aesthetics'
    ],
    architecture: 'HTML5 + Modular CSS + JavaScript'
  },
  {
    id: 'Todo-app',
    title: 'Dynamic Task & To-Do Application',
    shortDescription: 'State-driven task manager with localStorage persistence, filter views, and task counter metrics.',
    fullDescription: 'A functional task management web application built with JavaScript. Supports creating, completing, deleting, and filtering tasks (All, Active, Completed), with persistent browser localStorage saving so tasks survive page reloads.',
    category: ['frontend'],
    tags: ['JavaScript', 'LocalStorage', 'DOM Manipulation', 'Productivity'],
    image: '/images/projects/todo.jpg',
    githubUrl: 'https://github.com/Sumeya472/Todo-app',
    liveUrl: 'https://todo-app-kappa-five-26.vercel.app',
    highlights: [
      'Persistent task storage with browser LocalStorage API',
      'Real-time filter states (All / Active / Completed)',
      'Remaining task counter and bulk clear completed action'
    ],
    architecture: 'JavaScript ES6+ with LocalStorage state persistence'
  },
  {
    id: 'static-job-listings',
    title: 'Job Listings with Multi-Criteria Filter',
    shortDescription: 'Interactive job board allowing users to dynamically add and remove search tags to filter matching openings.',
    fullDescription: 'A job listing application built with TypeScript and CSS. Features interactive filter tags where clicking any technology or role chip adds it to an active filter bar, immediately pruning non-matching positions and updating the DOM.',
    category: ['frontend', 'react-ts'],
    tags: ['TypeScript', 'Tailwind CSS', 'Dynamic Filter', 'Data Filtering'],
    image: '/images/projects/static-job-listings.jpg',
    githubUrl: 'https://github.com/Sumeya472/static-job-listings',
    highlights: [
      'Tag-based filtering algorithm supporting multiple simultaneous criteria',
      'Clear all and single-chip dismissal mechanics',
      'Featured and New badge indicators with responsive card margins'
    ],
    architecture: 'TypeScript + CSS Grid/Flexbox'
  },
  {
    id: 'weather-app',
    title: 'Interactive Weather Forecast App',
    shortDescription: 'Responsive weather app providing real-time temperatures, conditions, and location forecasts via REST API.',
    fullDescription: 'A weather application developed with JavaScript that connects to real-time weather APIs to deliver current temperatures, humidity levels, wind speed, and meteorological condition icons based on user search.',
    category: ['frontend'],
    tags: ['JavaScript', 'Weather API', 'Async Fetch', 'Responsive'],
    image: '/images/projects/weatherapp.jpg',
    githubUrl: 'https://github.com/Sumeya472/weather-app',
    highlights: [
      'Asynchronous API requests with live error handling for unknown cities',
      'Weather condition visual icons and dynamic temperature formatting',
      'Responsive interface suitable for mobile and desktop screens'
    ],
    architecture: 'Vanilla JavaScript + OpenWeather API integration'
  },
  {
    id: 'tip-calculator-app',
    title: 'Bill & Tip Split Calculator',
    shortDescription: 'Financial utility calculating per-person tip amounts and total cost shares with custom percentage inputs.',
    fullDescription: 'A clean and efficient tip calculator built with HTML, CSS, and JavaScript. Computes exact tip amounts and total per-person shares with preset percentages, custom percentage inputs, validation against zero diners, and state reset.',
    category: ['frontend'],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Calculator'],
    image: '/images/projects/tip-calculator-app.jpg',
    githubUrl: 'https://github.com/Sumeya472/tip-calculator-app',
    highlights: [
      'Immediate calculation updates on input change',
      'Error highlight when number of people is set to zero',
      'Responsive two-column desktop and single-column mobile layout'
    ],
    architecture: 'JavaScript DOM event-driven math calculator'
  },

];
