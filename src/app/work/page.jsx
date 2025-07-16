import GitHubCalendar from "react-github-calendar";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Three.js Room Portfolio",
    description:
      "An interactive 3D portfolio showcasing a cozy isometric room built with Three.js and React. Users can explore the room environment where each object (like a laptop, bookshelf, or light) reveals different parts of the developer’s work, skills, or contact links. The experience includes smooth animations, lighting effects, and clickable elements using raycasting.",
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
    repo: "https://github.com/your-username/3d-room-portfolio"
  }
];

export default function Work() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "20px" }}>Github Contribution Record</h1>
      <GitHubCalendar
        username="zaw-creator"
        style={{ maxWidth: "700px", margin: "0 auto", marginTop: "20px" }}
      />
      <h3 style={{ marginTop: "25px" }}>Projects</h3>

      {projects.map((project, index) =>
        <Box
          key={index}
          sx={{
            margin: "20px auto",
            maxWidth: "45%",
            textAlign: "center",
            padding: 2,
            backgroundColor: "#161B22",
            color: "white",
            borderRadius: 2
          }}
        >
          <h3 style={{ textAlign: "left", marginBottom: "8px" }}>
            {project.title}
            <span style={{ marginLeft: "35rem", textAlign: "right" }}>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px", color: "white" }}
              >
                <GitHubIcon style={{ verticalAlign: "middle" }} />
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LaunchIcon style={{ verticalAlign: "middle" }} />
              </a>
            </span>
          </h3>
          <p style={{ textAlign: "left", lineHeight: "1.5" }}>
            {project.description}
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              flexWrap: "wrap",
              gap: 1.5,
              marginTop: 2
            }}
          >
            {project.technologies.map((skill, index) =>
              <Box
                key={index}
                sx={{
                  backgroundColor: "#524f4fb4",
                  borderRadius: 2,
                  padding: "6px 12px",
                  color: "white",
                  fontSize: "0.85rem",
                  lineHeight: 1.2,
                  textAlign: "center"
                }}
              >
                <p style={{ margin: 0 }}>
                  {skill}
                </p>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </div>
  );
}
