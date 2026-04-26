"use client";

const TECHS = [
  "JavaScript", "React", "Next.js", "Three.js", "Node.js",
  "MongoDB", "Express", "WebGL", "GSAP", "Blender",
  "Figma", "Vercel", "Material UI", "Mongoose", "Framer Motion",
  "CSS Modules", "Nodemailer", "QRCode", "Git", "Spline",
  "React Three Fiber", "Multer", "Axios", "PHP", "Azure",
];

export default function TechTicker() {
  const items = [...TECHS, ...TECHS];

  return (
    <div style={{ overflow: "hidden", width: "100%", padding: "16px 0", margin: "8px 0", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "ticker 30s linear infinite",
        }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            style={{
              padding: "6px 18px",
              margin: "0 6px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              color: "#888",
              fontSize: "0.82rem",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              letterSpacing: "0.03em",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
