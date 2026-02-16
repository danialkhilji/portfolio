# Portfolio

A personal portfolio website built with Astro and Tailwind CSS.

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [astro-icon](https://github.com/natemoo-re/astro-icon) - Icon integration

## Project Structure

```
src/
├── components/   # Reusable UI components (Navbar, Footer, Cards, Timeline)
├── data/         # Content data files (career, projects, skills, certificates)
├── layouts/      # Base page layout
├── pages/        # Site pages (home, about, career, projects, certificates)
└── styles/       # Custom CSS (timeline layout)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run the website locally
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## CI Checks

```bash
# Run ESLint
npm run lint

# Check code formatting
npm run format:check

# Auto-fix formatting
npm run format

# Check for broken links (run after npm run build)
npm run check:links

# Run accessibility audit (requires preview server running)
npm run preview &
npm run check:a11y
```

## Pages

- **Home** - Introduction and social links
- **About** - Bio, skills, publications, and languages
- **Career** - Education and work experience timeline
- **Projects** - Project showcase timeline
- **Certificates** - Certifications organized by year
