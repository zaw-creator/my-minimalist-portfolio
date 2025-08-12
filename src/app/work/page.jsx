import GitHubCalendar from "react-github-calendar";
import { Box,Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import projects from "../data/projects.jsx"; 


export default function Work() {
  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4" sx={{ marginTop: 3,color: "white" }}>
        Github Record
      </Typography>

      <Box sx={{ maxWidth: 860, margin: "20px auto",color: "white" }}>
        <GitHubCalendar username="zaw-creator" />
      </Box>

      <Typography variant="h5" sx={{ marginTop: 4,color: "white" }}>
        Projects
      </Typography>

      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            margin: "20px auto",
            maxWidth: 860,
            padding: 2,
            backgroundColor: "#161B22",
            color: "white",
            borderRadius: 2,
            textAlign: "left"
          }}
        >
          {/* Title + Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 1
            }}
          >
            <Typography variant="h6">{project.title}</Typography>
            <Box>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "10px", color: "white" }}
                >
                  <GitHubIcon />
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <LaunchIcon />
                </a>
              )}
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{ lineHeight: 1.5, marginBottom: 2 }}
          >
            {project.description}
          </Typography>

          {/* Tech Skills */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              alignItems: "flex-start"
            }}
          >
            {project.technologies.map((skill, idx) => (
              <SkillTag key={idx} label={skill} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

// Tag Component (optional but reusable)
function SkillTag({ label }) {
  return (
    <Box
      sx={{
        backgroundColor: "#524f4fb4",
        borderRadius: 2,
        padding: "6px 12px",
        fontSize: "0.8rem",
        color: "white"
      }}
    >
      {label}
    </Box>
  );
}