'use client';
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box, Typography } from '@mui/material';

const Experiences = [
  {
    date: "DEC 2024 - PRESENT",
    company: "Freelance Developer",
    role: "Full Stack Developer",
    description:
      "Working independently on various client projects using the MERN stack and Three.js. Building responsive, interactive web applications and experimenting with 3D experiences. Also involved in backend development and some C# scripting for specialized applications.",
  },
  {
    date: "SEP 2023 - JUN 2024",
    company: "University of the West of England (UWE)",
    role: "Student Ambassador",
    description:
      "Developed essential soft skills such as public speaking, teamwork, and interpersonal communication by representing the university. Gained valuable experience in supporting events and engaging with prospective students.",
  },
  {
    date: "DEC 2022 - JUN 2023",
    company: "Wun Wun Lat",
    role: "Junior Web Developer Intern",
    description:
      "During my internship at Wun Wun Lat, I developed a strong foundation in the syntax, semantics, and pragmatics of programming languages. Worked on real-world projects that enhanced my practical coding skills and collaboration in a team setting.",
  },
];

function ExperienceItem({ experience }) {
  const [hovered, setHovered] = useState(false);

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0', flex: 0.3 }}>
        <Typography sx={{ fontSize: "0.75rem", color: "white", fontFamily: "monospace", letterSpacing: "0.04em" }}>
          {experience.date}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: '#2a2a2a' }} />
        <TimelineDot
          sx={{
            bgcolor: hovered ? '#7c3aed' : '#1e1e2e',
            border: `2px solid ${hovered ? '#7c3aed' : '#333'}`,
            boxShadow: hovered ? '0 0 12px rgba(124,58,237,0.6)' : 'none',
            transition: 'all 0.3s ease',
          }}
        />
        <TimelineConnector sx={{ bgcolor: '#2a2a2a' }} />
      </TimelineSeparator>

      <TimelineContent sx={{ py: 1, flex: 0.7 }}>
        <Box
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            backgroundColor: "#161B22",
            borderRadius: "10px",
            padding: "16px 20px",
            textAlign: "left",
            mb: 2,
            transition: "box-shadow 0.3s ease",
            boxShadow: hovered
              ? "0 0 0 1px rgba(124,58,237,0.45), 0 8px 24px rgba(124,58,237,0.12)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "white", mb: 0.3 }}>
            {experience.company}
          </Typography>
          <Typography sx={{ fontSize: "0.82rem", color: "#7c3aed", fontWeight: 500, mb: 1 }}>
            {experience.role}
          </Typography>
          <Typography sx={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.65 }}>
            {experience.description}
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Experiencedata() {
  return (
    <Timeline sx={{ padding: 0 }}>
      {Experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </Timeline>
  );
}
