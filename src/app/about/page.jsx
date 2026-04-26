'use client';

import Introducting from "../components/introducting";
import Experiences from "../components/experiences";
import FadeIn from "../components/fade-in";
import TAG_COLORS, { DEFAULT_TAG } from "../data/tag-colors";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Educationdata from "../components/education";

const SKILLS = [
  "JavaScript", "React", "Three.js", "WebGL", "ASP.NET",
  "Mongodb", "Mongoose", "MsSQL", "Material UI", "GSAP",
  "Express", "Rest Api", "Spline", "Azure", "React Hook Form",
  "Particle.js", "GitHub", "Figma", "Vercel", "PHP",
  "Blender (3D Modeling)",
];

function SectionHeading({ children }) {
  return (
    <Box sx={{ textAlign: "center", mt: 6, mb: 3 }}>
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#7c3aed",
          mb: 0.5,
        }}
      >
        ——
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "white",
          fontFamily: "Arial",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default function About() {
  return (
    <Box sx={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 60px" }}>

      <FadeIn>
        <Introducting />
      </FadeIn>

      <FadeIn delay={100}>
        <SectionHeading>Skills</SectionHeading>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.5 }}>
          {SKILLS.map((skill, index) => {
            const style = TAG_COLORS[skill] || DEFAULT_TAG;
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: style.bg,
                  border: `1px solid ${style.color}40`,
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontSize: "0.82rem",
                  color: style.color,
                  fontFamily: "monospace",
                  letterSpacing: "0.02em",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    borderColor: style.color,
                    boxShadow: `0 0 8px ${style.color}30`,
                  },
                }}
              >
                {skill}
              </Box>
            );
          })}
        </Box>
      </FadeIn>

      <FadeIn>
        <SectionHeading>Experience</SectionHeading>
        <Experiences />
      </FadeIn>

      <FadeIn>
        <SectionHeading>Education</SectionHeading>
        <Educationdata />
      </FadeIn>

    </Box>
  );
}
