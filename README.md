# Sumeya Seid — Personal Developer & Creative Portfolio

A modern, high-performance, and responsive personal portfolio website engineered with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed for software engineering internship applications, remote opportunities, freelance engagements, and tech company networking.

---

## 🌟 Highlights

- **Authentic Data & Assets**: Showcases 15+ verified GitHub repositories, real live Vercel deployments, official achievements, and creative UI/UX & graphic design works directly from Sumeya's repositories.
- **Official CV Integration**: Integrates Sumeya's actual CV PDF at `public/files/Sumeya-Seid-CV.pdf` for direct one-click download.
- **Dual Visual Modes**: Seamless Dark & Light themes with persistent `localStorage` preference and smooth color transitions.
- **Creative Portfolio Lightbox**: Dedicated section for Figma UI/UX interfaces, mobile app flows, and graphic design posters with interactive image expansion modals.
- **Interactive Project Details**: Modal system displaying full project architecture, features, live demos (when deployed), and GitHub source links.
- **Functional Contact Form**: Dual-mode contact system with form validation, Formspree API integration, and prefilled direct `mailto:` fallback.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment Ready**: Vercel / Netlify / GitHub Pages

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build & Verification
```bash
npm run build
```
Generates an optimized static build in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 File Structure

```text
sumeya-portfolio/
├── public/
│   ├── files/
│   │   └── Sumeya-Seid-CV.pdf          # Sumeya's official CV PDF
│   └── images/
│       ├── profile/su.jpg              # Sumeya's verified profile photo
│       ├── projects/                   # Real GitHub project screenshots
│       └── designs/                    # UI/UX interfaces and posters
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                  # Sticky navbar with theme toggle & scrollspy
│   │   ├── Hero.tsx                    # Editorial hero with CV download & live pill
│   │   ├── About.tsx                   # Narrative, education, & career statement
│   │   ├── Skills.tsx                  # Categorized skills & learning areas
│   │   ├── Projects.tsx                # Filterable project showcase
│   │   ├── ProjectModal.tsx            # Deep-dive project modal
│   │   ├── DesignGallery.tsx           # UI/UX & Graphic design gallery
│   │   ├── DesignModal.tsx             # Design lightbox preview modal
│   │   ├── Achievements.tsx            # Awards, certificates, & timeline
│   │   ├── Contact.tsx                 # Contact form & communication channels
│   │   ├── Footer.tsx                  # Copyright & social links
│   │   ├── BackToTop.tsx               # Progress-indicator scroll button
│   │   └── Toast.tsx                   # Action feedback toast notification
│   ├── context/
│   │   └── ThemeContext.tsx            # Dark/Light theme provider
│   ├── data/
│   │   ├── projectsData.ts             # Verified GitHub project entries
│   │   ├── designsData.ts              # UI/UX & poster design entries
│   │   ├── skillsData.ts               # Categorized skills & learning badges
│   │   ├── achievementsData.ts         # Verified honors and certifications
│   │   └── socialLinks.ts              # Contact & profile URLs
│   ├── types/
│   │   └── index.ts                    # TypeScript types & interfaces
│   ├── App.tsx                         # Main portfolio layout
│   ├── main.tsx                        # React DOM entry point
│   └── index.css                       # Tailwind & custom scrollbar styles
├── index.html                          # Meta tags, fonts, & SEO structure
├── tailwind.config.js                  # Custom color tokens & fonts
├── tsconfig.json                       # TypeScript compiler options
└── vite.config.ts                      # Vite configuration
```

---

## 📬 Contact Information

- **Email**: [sumeyaseid703@gmail.com](mailto:sumeyaseid703@gmail.com)
- **Phone**: [+251 980 348 942](tel:+251980348942)
- **GitHub**: [github.com/Sumeya472](https://github.com/Sumeya472)
- **LinkedIn**: [linkedin.com/in/sumeya-seid-730028304](https://www.linkedin.com/in/sumeya-seid-730028304/)
- **Telegram**: [@Sumey_a](https://t.me/Sumey_a)
- **WhatsApp**: [+251 980 348 942](https://wa.me/251980348942)
- **Location**: Addis Ababa / Jimma, Ethiopia
