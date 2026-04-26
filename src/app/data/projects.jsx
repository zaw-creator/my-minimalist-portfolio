const projects = [
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
