"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TAG_COLORS, { DEFAULT_TAG } from "../data/tag-colors";

const CATEGORY_GRADIENTS = {
  "3D":         "linear-gradient(145deg, #1a0533, #3b1275, #0f0620)",
  "Full Stack": "linear-gradient(145deg, #0a1628, #0d3a5c, #071020)",
  "Freelance":  "linear-gradient(145deg, #1a0f28, #3d1a60, #0f0818)",
};
const DEFAULT_GRADIENT = "linear-gradient(145deg, #161b22, #21262d)";

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const gradient = CATEGORY_GRADIENTS[project.categories?.[0]] || DEFAULT_GRADIENT;

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        margin: "20px auto",
        maxWidth: 860,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        backgroundColor: "#161B22",
        color: "white",
        borderRadius: "12px",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 0 0 1px rgba(139,92,246,0.5), 0 12px 40px rgba(139,92,246,0.18)"
          : "0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Top gradient bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)",
          transition: "width 0.45s ease",
          zIndex: 1,
        }}
      />

      {/* Left — image */}
      <Box
        sx={{
          width: { xs: "100%", sm: "260px" },
          minHeight: { xs: "160px", sm: "auto" },
          flexShrink: 0,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, opacity: 0.25 }}>
            <ImageOutlinedIcon sx={{ fontSize: 40, color: "white" }} />
            <Typography sx={{ fontSize: "0.7rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Preview
            </Typography>
          </Box>
        )}
      </Box>

      {/* Right — content */}
      <Box sx={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {/* Title + icons */}
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{project.title}</Typography>
            <Box sx={{ display: "flex", gap: "12px" }}>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer"
                  style={{ color: "white", opacity: 0.6, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
                  <GitHubIcon fontSize="small" />
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                  style={{ color: "white", opacity: 0.6, transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
                  <LaunchIcon fontSize="small" />
                </a>
              )}
            </Box>
          </Box>

          {/* Description */}
          <Typography variant="body2" sx={{ lineHeight: 1.65, mb: 2, color: "#aaa" }}>
            {project.description}
          </Typography>
        </Box>

        {/* Colored tech tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {project.technologies.map((skill, idx) => {
            const style = TAG_COLORS[skill] || DEFAULT_TAG;
            return (
              <Box
                key={idx}
                sx={{
                  backgroundColor: style.bg,
                  border: `1px solid ${style.color}40`,
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontSize: "0.75rem",
                  color: style.color,
                  fontFamily: "monospace",
                  letterSpacing: "0.02em",
                }}
              >
                {skill}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
