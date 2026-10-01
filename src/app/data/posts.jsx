const posts = [
  {
    slug: "why-i-learned-threejs",
    featured: false,
    category: "3D",
    tagColor: "#ff8c42",
    date: "Sep 10, 2026",
    readTime: "4 min read",
    title: "Why I Learned Three.js: Blender, COVID, and Two Skills I Wanted to Combine",
    excerpt:
      "Before Three.js there was Blender and a lot of free time during lockdown. How a 3D modeling habit and a web development background ended up in the same place.",
    content: [
      "Before I ever touched Three.js, I was already a web developer. Regular sites, regular stacks — HTML, CSS, JavaScript, nothing 3D about any of it. That part came later, and it didn't come from a tutorial or a job requirement.",
      "It came from COVID. Like a lot of people in lockdown, I ended up with a lot of unstructured time, and I picked up Blender mostly out of boredom — no plan, no portfolio ambition, just curiosity about how 3D modeling actually worked. I spent a stretch of lockdown modeling objects and scenes with absolutely no intention of doing anything with them professionally.",
      "The two things collided on their own. Once I was comfortable enough in Blender to make something I was actually proud of, the obvious question showed up: can I put this on the web, and can I make it interactive? That question is what led me to Three.js, and later to React Three Fiber once I wanted my 3D scenes to live inside normal React apps instead of standalone pages.",
      "That's directly where projects like the Three.js Room Portfolio came from — a cozy isometric room where clicking a laptop, a bookshelf, or a light reveals a different part of my work or contact info. Same with the Christmas Tree project — a snowy, lit-up 3D scene I built just to send a message of unity during a conflict, with the Three.js and Blender work doing the heavy lifting alongside GSAP for animation.",
      "I don't think of Three.js as a trend I jumped on. It's what happens when you don't want to drop either skill — the 3D modeling habit from Blender, or the web development background that came before it — and Three.js is the one place in the stack where both of those actually overlap.",
      "It's also why, even as I move toward cloud engineering and a Master's in Data Science and AI, the 3D work hasn't disappeared. It's still on my skills list, it's still in my portfolio, and it's still the thing I reach for when I want a project to be more than just functional.",
    ],
  },
  {
    slug: "building-driftland-realtime-leaderboards-sse",
    featured: false,
    category: "Full Stack",
    tagColor: "#7c3aed",
    date: "Jul 20, 2026",
    readTime: "7 min read",
    title: "Building DRIFTLAND: Real-Time Leaderboards with SSE",
    excerpt:
      "Using Server-Sent Events to power live leaderboards for a motorsport event platform, and the Render-vs-AWS tradeoffs behind it.",
    content: [
      "DRIFTLAND is a full-stack event management platform I built for NYOKI DRIFT, a motorsport event series in Myanmar — driver registration, tournament brackets, and live leaderboards for event day, all in one place.",
      "It didn't start that way. The project actually began as two separate codebases that had grown independently of each other, and a good chunk of the work was just consolidation: pulling both into one unified MERN architecture — a Next.js frontend on Vercel, an Express backend on Render, and two MongoDB instances behind it, instead of two half-finished systems that didn't talk to each other.",
      "The feature that shaped the most architecture decisions was the live leaderboard. During a drift event, judges score runs in real time and spectators need to see rankings update without refreshing the page. I looked at polling, WebSockets, and Server-Sent Events, and landed on SSE — the data only needs to flow one way, server to client, it's plain HTTP so it doesn't need extra infrastructure on top of Vercel and Render, and reconnection is handled natively by the browser's EventSource API instead of something I'd have to build myself.",
      "That choice had a direct consequence for how the backend got deployed. An SSE connection has to stay open for as long as the event is running, and AWS Lambda is built around functions that execute and return quickly — it's not a natural fit for a connection that needs to stay alive for hours. That's the main reason the backend ended up on Render as a persistent Express server rather than a serverless deploy, even though serverless made sense for other parts of the stack. It was a case of picking the rendering and hosting strategy around one real constraint instead of defaulting to whatever's trendiest.",
      "Past the leaderboard, there's a tournament bracket generator with class-based filtering — Drift Class A, B, C, and Time Attack all need their own bracket logic — and a driver registration system with its own numbering scheme (DR-YYYY-####) plus magic-link status lookups, so a driver can check their registration status by clicking a link instead of logging in anywhere. Cloudinary handles event photos and media, Resend handles the transactional email side of registration.",
      "Even the admin portal got its own identity — black, yellow, and red, matching NYOKI DRIFT's own branding instead of some generic dashboard theme.",
      "DRIFTLAND ended up being the project I leaned on most when I applied for a Frontend Developer role at a logistics platform in Bangkok — not because it's flashy, but because it's one of the few things I've built where the architecture decisions were forced by a real constraint (a leaderboard that has to stay live) rather than picked in the abstract.",
    ],
  },
  {
    slug: "packing-two-suitcases-for-a-masters-in-thailand",
    featured: true,
    category: "Grad School",
    tagColor: "#fbbf24",
    date: "Aug 2, 2026",
    readTime: "5 min read",
    title: "Packing Two Suitcases for a Master's in Thailand",
    excerpt:
      "Leaving the UK for AIT's Data Science and AI programme — the scholarship process, the move, and what I'm hoping to learn.",
    content: [
      "The acceptance email from AIT landed in my inbox on a Tuesday. I remember grinning at my laptop for about four minutes before I even opened the attachment. Then I opened it, and sitting right next to it in the admissions portal was a second message: an initial ineligibility ruling. Welcome to grad school applications.",
      "The issue wasn't my grades or my dissertation. It was arithmetic. AIT requires a minimum number of total years of formal education to qualify for a Master's seat, and on paper my path didn't add up cleanly: grade school in Myanmar through Grade 10, a Foundation Year and HND at Gusto University, then a BSc (Hons) in Information Technology at UWE Bristol. Three different systems, three different countries, and an admissions office trying to map it onto a single number. I sat down and actually counted it out — ten years of schooling in Myanmar, plus the Foundation Year and HND, plus three years at UWE — and got to seventeen. Then I had to prove it: transcripts, a written explanation, and help. Prof. Sein Minn, who became my DSAI faculty advocate through this process, pushed it through the admissions team on my behalf. A few weeks later, the ineligibility flag was gone.",
      "Somewhere in that same stretch, the scholarship I'd been offered got better too — the credit coverage went from 20 to 24. Not life-changing, but the kind of detail that makes moving across the world feel slightly less insane.",
      "Then there was AAPICO. Partway through sorting out the eligibility issue, I got invited to interview with AAPICO Hitech — a Thai automotive parts manufacturer that offers a scholarship through AIT — for 9:45 AM on the Friday I was supposed to be mid-flight from London to Bangkok. I asked to move it. We settled on 4 PM that same Friday, Bangkok time, which meant: land after an overnight flight, and interview for a scholarship less than an hour later, before I'd even gone through immigration if it came to that. I don't actually remember much of what I said in that interview. I remember being extremely alert in a way that had nothing to do with preparation.",
      "The less dramatic but somehow more time-consuming part has been everything else. Selling my gaming PC, a monitor, and a guitar-and-amp setup before leaving the UK, because none of it was making the trip. Migrating my UK SIM and every OTP-locked account tied to that number before I lose it for good. Picking a room — Cat 4, with AC, a little over 3,000 THB a month — with a backup hotel booked near campus in case same-day registration doesn't line up with my arrival. None of this is the romantic version of \"moving abroad for a Master's,\" but it's most of what the move actually is.",
      "As for why DSAI specifically: I've spent the last couple of years as a freelance MERN developer, mostly building 3D web experiences and full-stack apps for clients, and more recently pulling that work toward cloud infrastructure — AWS, Docker, the DevOps side of shipping something that isn't just a Vercel deploy. A Master's in Data Science and AI is the deliberate next step, not a pivot away from that work but a way of going deeper into the infrastructure and modeling side of it, with an eye on eventually working in tech or finance in Singapore. The car price prediction project from my Machine Learning course this term — comparing Random Forest against a model I built from scratch — is already closer to that target than anything I shipped as a freelancer.",
      "I land in Bangkok around 3 PM on July 31st. Two suitcases, a laptop bag, and roughly four months of paperwork behind me to get to that gate. I'll write about how the actual coursework goes once I'm a few weeks in.",
    ],
  },
];

export default posts;
