# Zaw-Creator — Minimalist Portfolio

A dark, interactive developer portfolio built with Next.js and React. Features animated UI, a live quote feed, GitHub contribution calendar, project showcase with filtering, and a contact page — all running on a star-particle background.

**Live:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 19, Material UI v6 |
| Animations | CSS keyframes, IntersectionObserver |
| Background | tsparticles (stars preset) |
| Analytics | Vercel Analytics |
| Quote API | ZenQuotes (proxied server-side) |
| Deployment | Vercel |

---

## Pages & Features

### Home (`/`)

- Scramble text effect on the hero name — triggers on hover, focus, and every 10 seconds
- Blinking cursor next to the hero text
- Live random quote fetched from ZenQuotes via a server-side proxy (fixes CORS)
- Local clock updated every minute

### About (`/about`)

- Intro paragraph
- Color-coded skill tags — each technology has its own color (shared across Work page)
- Experience timeline — card style with purple hover glow
- Education timeline — card style with blue hover glow
- Scroll-triggered fade-in on every section

### Work (`/work`)

- GitHub contribution calendar
- Stats row — project count, technology count, active since year
- Scrolling tech ticker — 25 technologies drifting across the page, pauses on hover
- Filter tabs — All · 3D · Full Stack · Freelance (projects can belong to multiple categories)
- Project cards — gradient image placeholder on left, content on right, hover glow border, animated top bar, color-coded tech tags

### Contact (`/contact`)

- Email, LinkedIn, GitHub, Discord cards
- Each card glows in the platform's color on hover
- Embedded SoundCloud player

### Global

- Cursor spotlight — subtle radial glow that follows the mouse on every page
- Star particle background
- Icon navbar with active-state highlighting

---

## Project Structure

```text
src/app/
├── page.js                  # Home
├── about/page.jsx           # About
├── work/page.jsx            # Work
├── contact/page.jsx         # Contact
├── layout.js                # Global layout (navbar, particles, spotlight)
├── globals.css              # Global styles + keyframe animations
├── api/quote/route.js       # ZenQuotes server-side proxy
├── components/
│   ├── cursor-spotlight.jsx # Mouse follow glow (global)
│   ├── fade-in.jsx          # Scroll-triggered fade wrapper
│   ├── project-card.jsx     # Work page project card
│   ├── tech-ticker.jsx      # Scrolling tech marquee
│   ├── nav.jsx              # Icon navbar
│   ├── experiences.jsx      # Experience timeline
│   └── education.jsx        # Education timeline
├── data/
│   ├── projects.jsx         # All project entries
│   └── tag-colors.js        # Shared color map for tech tags
└── particles/starbg.jsx     # tsparticles star background
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding a Project

Open [`src/app/data/projects.jsx`](src/app/data/projects.jsx) and add an entry:

```js
{
  categories: ["Full Stack"],   // "3D" | "Full Stack" | "Freelance" — array, can be multiple
  title: "Project Name",
  description: "What it does.",
  technologies: ["React", "MongoDB"],
  liveDemo: "https://your-demo.vercel.app",
  repo: "https://github.com/zaw-creator/your-repo",
  image: "/images/your-screenshot.png",  // optional — drop file in /public/images/
}
```

If `image` is omitted, a gradient placeholder is shown based on the first category.

---

## Adding a Tech Tag Color

Open [`src/app/data/tag-colors.js`](src/app/data/tag-colors.js) and add:

```js
"YourTech": { bg: "rgba(R,G,B,0.12)", color: "#hexcolor" },
```

The color map is shared between the Work page cards and the About page skill tags.

---

## Deployment

Deployed on Vercel. Push to `main` to trigger a new deployment.

> Replace the `Live` URL at the top of this file once deployed.
