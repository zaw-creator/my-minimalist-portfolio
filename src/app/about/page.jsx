'use client';

import Introducting from "../components/introducting";
import Experiences from "../components/experiences";
import FadeIn from "../components/fade-in";
import SkillTags from "../components/skill-tags";

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
        <SkillTags skills={SKILLS} />
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
