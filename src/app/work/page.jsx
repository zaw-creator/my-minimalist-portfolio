"use client";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Typography } from "@mui/material";
import FadeIn from "../components/fade-in";
import ProjectCard from "../components/project-card";
import TechTicker from "../components/tech-ticker";
import projects from "../data/projects.jsx";

const FILTERS = ["All", "3D", "Full Stack", "Freelance"];

const totalTechs = new Set(projects.flatMap((p) => p.technologies)).size;

export default function Work() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(filter));

  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>

      {/* GitHub calendar */}
      <FadeIn>
        <Typography variant="h4" sx={{ marginTop: 3, color: "white" }}>
          Github Record
        </Typography>
        <Box sx={{ maxWidth: 860, margin: "20px auto", color: "white" }}>
          <GitHubCalendar username="zaw-creator" />
        </Box>
      </FadeIn>

      {/* Stats row */}
      <FadeIn delay={80}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 3, sm: 6 },
            margin: "32px auto 8px",
            maxWidth: 860,
          }}
        >
          {[
            { value: projects.length, label: "Projects" },
            { value: `${totalTechs}+`, label: "Technologies" },
            { value: "2024", label: "Active Since" },
          ].map(({ value, label }) => (
            <Box key={label}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "Reddit Mono, monospace",
                  lineHeight: 1,
                }}
              >
                {value}
              </Typography>
              <Typography
                sx={{ fontSize: "0.8rem", color: "#666", marginTop: "4px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </FadeIn>

      {/* Tech ticker */}
      <FadeIn delay={140}>
        <TechTicker />
      </FadeIn>

      {/* Projects heading + filter tabs */}
      <FadeIn delay={180}>
        <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 3, color: "white" }}>
          Projects
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4, flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "7px 20px",
                borderRadius: "20px",
                border: filter === f
                  ? "1px solid rgba(139,92,246,0.7)"
                  : "1px solid rgba(255,255,255,0.1)",
                backgroundColor: filter === f
                  ? "rgba(139,92,246,0.18)"
                  : "transparent",
                color: filter === f ? "#c084fc" : "#888",
                cursor: "pointer",
                fontSize: "0.88rem",
                fontFamily: "Arial",
                transition: "all 0.2s ease",
              }}
            >
              {f}
              {f !== "All" && (
                <span style={{ marginLeft: "6px", opacity: 0.6, fontSize: "0.75rem" }}>
                  {projects.filter((p) => p.categories.includes(f)).length}
                </span>
              )}
            </button>
          ))}
        </Box>
      </FadeIn>

      {/* Project cards — re-keyed on filter so FadeIn re-fires */}
      {filtered.map((project, index) => (
        <FadeIn key={filter + project.title} delay={index * 110}>
          <ProjectCard project={project} />
        </FadeIn>
      ))}

    </Box>
  );
}
