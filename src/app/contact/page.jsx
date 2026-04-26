"use client";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FadeIn from "../components/fade-in";
import SoundCloudPlayer from "../soundcloud/player";

const links = [
  {
    name: "Email",
    url: "mailto:hanzaw362@gmail.com",
    icon: <EmailOutlinedIcon sx={{ fontSize: 32 }} />,
    label: "hanzaw362@gmail.com",
    color: "#f87171",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zaw333/",
    icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
    label: "zaw-creator",
    color: "#60a5fa",
  },
  {
    name: "GitHub",
    url: "https://www.github.com/zaw-creator/",
    icon: <GitHubIcon sx={{ fontSize: 32 }} />,
    label: "zaw-creator",
    color: "#e2e2e2",
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/607608447671861249",
    icon: <ForumOutlinedIcon sx={{ fontSize: 32 }} />,
    label: "Message me",
    color: "#a78bfa",
  },
];

function ContactCard({ link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flex: "0 0 calc(50% - 8px)" }}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          backgroundColor: "#161B22",
          borderRadius: "12px",
          padding: "28px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
          boxShadow: hovered
            ? `0 0 0 1px ${link.color}60, 0 8px 28px ${link.color}20`
            : "0 0 0 1px rgba(255,255,255,0.06)",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          cursor: "pointer",
        }}
      >
        <Box sx={{ color: hovered ? link.color : "#555", transition: "color 0.3s ease" }}>
          {link.icon}
        </Box>
        <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1rem" }}>
          {link.name}
        </Typography>
        <Typography sx={{ color: "#555", fontSize: "0.78rem", fontFamily: "monospace" }}>
          {link.label}
        </Typography>
      </Box>
    </a>
  );
}

export default function Contact() {
  return (
    <Box sx={{ textAlign: "center", padding: "40px 24px 60px", maxWidth: 600, margin: "0 auto" }}>

      <FadeIn>
        <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", color: "#7c3aed", mb: 0.5 }}>
          ——
        </Typography>
        <Typography variant="h4" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
          Get in Touch
        </Typography>
        <Typography sx={{ color: "#666", fontSize: "0.95rem", mb: 4 }}>
          Feel free to reach out through any of these platforms.
        </Typography>
      </FadeIn>

      <FadeIn delay={100}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {links.map((link, index) => (
            <ContactCard key={index} link={link} />
          ))}
        </Box>
      </FadeIn>
      <br />

      <FadeIn delay={200}>
        <SoundCloudPlayer />
      </FadeIn>

    </Box>
  );
}
