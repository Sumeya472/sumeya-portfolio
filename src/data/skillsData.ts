import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    subtitle: 'Building responsive, accessible, and high-performance user interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', description: 'Functional components, hooks, custom hooks, and state management' },
      { name: 'TypeScript', description: 'Type safety, interfaces, generics, and strict compiler configs' },
      { name: 'JavaScript (ES6+)', description: 'Modern syntax, async/await, closures, promises, and DOM APIs' },
      { name: 'Tailwind CSS', description: 'Utility-first styling, responsive variants, and custom themes' },
      { name: 'HTML5 Semantic Web', description: 'Accessible structure, SEO best practices, and ARIA attributes' },
      { name: 'CSS3 & Modern Layouts', description: 'Flexbox, CSS Grid, animations, and container queries' },
      { name: 'Responsive Web Design', description: 'Mobile-first breakpoints, fluid typography, and touch interfaces' },
      { name: 'Vite', description: 'Next-generation build tool, HMR, and optimized production bundles' }
    ]
  },
  {
    title: 'Programming Languages',
    subtitle: 'Foundational computer science, algorithms, and typed programming',
    iconName: 'Code',
    skills: [
      { name: 'JavaScript', description: 'Primary language for client-side web applications' },
      { name: 'TypeScript', description: 'Strongly typed JavaScript for robust application architecture' },
      { name: 'Java', description: 'Object-oriented programming, data structures, and university coursework' },
      { name: 'C++', description: 'Systems programming, memory fundamentals, and algorithmic problem solving' },
      { name: 'Python', description: 'Data structures & algorithms practice and introductory deep learning' }
    ]
  },
  {
    title: 'UI/UX Design',
    subtitle: 'User research, wireframing, and interactive design systems',
    iconName: 'Palette',
    skills: [
      { name: 'Figma', description: 'Primary design tool for components, auto-layout, and prototyping' },
      { name: 'Wireframing & User Flows', description: 'Low-fidelity layouts to map user journeys and architecture' },
      { name: 'Interactive Prototyping', description: 'High-fidelity clickable prototypes with micro-interactions' },
      { name: 'Design Systems', description: 'Design tokens, scalable typography scales, and UI libraries' },
      { name: 'Visual & Interface Design', description: 'Color harmony, visual hierarchy, spacing grids, and contrast' },
      { name: 'User Research & Testing', description: 'Understanding user pain points and iterative usability testing' }
    ]
  },
  {
    title: 'Graphic Design',
    subtitle: 'Creative visual compositions, brand identities, and editorial layouts',
    iconName: 'Sparkles',
    skills: [
      { name: 'Poster & Editorial Design', description: 'Sports matchday posters, minimalist product editorial prints' },
      { name: 'Social Media Graphics', description: 'High-engagement promotional and visual branding assets' },
      { name: 'Visual Compositions', description: 'Combining typography, negative space, and modern aesthetics' },
      { name: 'Typography & Layouts', description: 'Pairing fonts, hierarchy, tracking, and leading balance' },
      { name: 'Brand Identity', description: 'Logos, color palettes, and cohesive visual language' }
    ]
  },
  {
    title: 'Development Tools',
    subtitle: 'Modern workflows, version control, and continuous deployment',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', description: 'Branching strategies, commit conventions, and version tracking' },
      { name: 'GitHub', description: 'Open source collaboration, repository management, and pull requests' },
      { name: 'VS Code', description: 'Primary IDE configured with linting, formatting, and debugging' },
      { name: 'Vercel', description: 'Automated CI/CD deployments and production preview pipelines' },
      { name: 'npm / pnpm', description: 'Package management and script automation' },
      { name: 'Chrome DevTools', description: 'Performance profiling, responsive debugging, and network audit' }
    ]
  },
  {
    title: 'Backend Development',
    subtitle: 'Current Active Learning — expanding towards full-stack proficiency',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', description: 'Server-side runtime environment (Currently learning)', isLearning: true },
      { name: 'Express.js', description: 'Building RESTful routing and middleware (Currently learning)', isLearning: true },
      { name: 'RESTful API Architecture', description: 'Designing endpoints, HTTP methods, and status codes (Currently learning)', isLearning: true },
      { name: 'Database Fundamentals', description: 'Relational & NoSQL conceptual foundations (Currently learning)', isLearning: true }
    ]
  },
  {
    title: 'Engineering Practices & Soft Skills',
    subtitle: 'Collaborative problem solving and professional execution',
    iconName: 'Users',
    skills: [
      { name: 'Problem Solving & DSA', description: 'Algorithmic thinking and structured code decomposition' },
      { name: 'Teamwork & Collaboration', description: 'Cross-functional communication in university and hackathon teams' },
      { name: 'Time Management', description: 'Delivering milestones under academic and project deadlines' },
      { name: 'Attention to Detail', description: 'Precision in design-to-code fidelity and responsive edge cases' },
      { name: 'Effective Communication', description: 'Articulating technical decisions and presenting design rationale' }
    ]
  }
];
