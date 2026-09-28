const projects = [
  {
    categories: ["Machine Learning"],
    title: "Predicting Car Price — ML Model Comparison + Deployment 🚘",
    image: "/images/carprice.png",
    description:
      "An AIT Machine Learning course project predicting used-car prices from ~8,100 listings. Cleaned and explored the data, then compared Linear Regression, Decision Tree, and Random Forest models (Random Forest won, R² 0.975), wrapped in a Dash web app for instant price estimates. For the follow-up assignment, built a linear regression model entirely from scratch — hand-coded gradient descent with Ridge/Lasso variants and momentum, tuned via a 144-run MLflow-tracked grid search (R² ≈ 0.92) — and deployed it as a second page on the same app, plus standalone via Docker and Traefik on AIT's own ml-brain server.",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Dash",
      "MLflow",
      "Docker",
      "Traefik",
    ],
    liveDemo: "https://chaky-car-price-predictor.onrender.com/",
    repo: "https://github.com/zaw-creator/A1_predicting_car_price"
  },

  {
    categories: ["3D"],
    title: "Three.js Room Portfolio 🛏️",
    image: "/images/room.png",
    description:
      "An interactive 3D portfolio showcasing a cozy isometric room built with Three.js and React. Users can explore the room environment where each object (like a laptop, bookshelf, or light) reveals different parts of the developer's work, skills, or contact links. The experience includes smooth animations, lighting effects, and clickable elements using raycasting.",
    technologies: [
      "Three.js",
      "React",
      "React Three Fiber",
      "Blender (3D Modeling)",
      "GSAP",
      "JavaScript",
      "Framer Motion"
    ],
    liveDemo: "https://portfolio-room-flax.vercel.app/",
    repo: "https://github.com/zaw-creator/my-portfolio-room"
  },

  {
    categories: ["3D"],
    title: "Christmas Tree for Everyone 🎄",
    image: "/images/tree.png",
    description:
      "A heartfelt 3D experience built with Three.js and React, centered around a beautifully rendered Christmas tree surrounded by snowfall and festive visuals. Inspired by the desire for unity and peace during conflict, this project sends a universal message of hope, love, and togetherness—regardless of background or belief.",
    technologies: [
      "Three.js",
      "React",
      "GSAP",
      "React Three Fiber",
      "JavaScript",
      "3D Modeling(Blender)",
      "Leva (GUI Controls)"
    ],
    liveDemo: "https://christmas-project-nine.vercel.app/",
    repo: "https://github.com/zaw-creator/christmas-project"
  },

  {
    categories: ["Full Stack", "Freelance"],
    image: "/images/patient.png",
    title: "Patient Record Holder 🏥",
    description:
      "A full-stack medical record management system built with the MERN stack. Features include a secure dashboard for managing patient profiles, form-based data entry with validation, and a clean UI powered by Material UI. Designed for efficiency, accessibility, and scalability in clinical environments.",
    technologies: [
      "MongoDB",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "React Hook Form",
      "Material UI",
      "Axios",
      "Mongoose"
    ],
    liveDemo: "https://your-live-demo-link.com",
    repo: "https://github.com/zaw-creator/patientrecord"
  },

  {
    categories: ["Full Stack", "Freelance"],
    image: "/images/driftland.png",
    title: "DRIFTLAND — Driver Registration System 🏎️",
    description:
      "A full-stack MERN application for managing driver registrations at motorsport events in Myanmar. Features a four-step registration flow (personal details, vehicle info, event selection, safety acknowledgment), passwordless magic-link authentication via email, QR code generation for event check-in, and an admin panel for approvals. Supports both Drift and Time Attack event categories with bracket-style competition tracking.",
    technologies: [
      "Next.js",
      "React",
      "Express",
      "MongoDB",
      "Mongoose",
      "Nodemailer",
      "QRCode",
      "Multer",
      "CSS Modules"
    ],
    liveDemo: "https://nyokidrift.vercel.app",
    repo: "https://github.com/zaw-creator/DRIFTLAND"
  },

  {
    categories: ["Full Stack", "Freelance"],
    title: "AUTOCULT — Yangon Nation Car Community 🚗",
    description:
      "A freelance car community platform for Yangon Nation, scoped as the first of a five-phase roadmap. Phase 1 covers member registration, laying the groundwork for a full community platform for car enthusiasts.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
  },

  {
    categories: ["Full Stack", "Freelance"],
    title: "Let Pan Pwint — Charity Website Renovation 🌸",
    description:
      "A website renovation for Let Pan Pwint, a UK-based Myanmar relief organisation. Features an interactive 3D globe with city markers built in Three.js, a public site, a member-exclusive area with a game-style join mechanic, and an admin portal, all in the organisation's crimson-and-rose branding.",
    technologies: [
      "ReactJS",
      "Three.js",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
  },

  {
    categories: ["Freelance"],
    title: "Freelance Project - Portfolio Website 🎨",
    image: "/images/will.png",
    description:
      "A personal portfolio website showcasing my client's skills, projects, and experience. Built with a modern tech stack, this website features a responsive design, smooth animations, and a user-friendly interface.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "Material UI",
      "Spline",
    ],
    liveDemo: "https://will-portfolio-olive.vercel.app/",
    repo: "https://github.com/zaw-creator/will-portfolio-project"
  }
];

export default projects;
