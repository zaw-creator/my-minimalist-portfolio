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

const Education = [
  {
    date: "April 2026 - PRESENT",
    institution: "Amazon Web Services (AWS)",
    degree: "AWS Certified Cloud Practitioner (In Progress)",
    description:
      "Currently studying for the AWS Cloud Practitioner certification, building foundational knowledge of cloud computing concepts, AWS core services, security, architecture, pricing, and support models.",
  },
  {
    date: "SEP 2023 - JUL 2024",
    institution: "University of the West of England, Bristol (UK)",
    degree: "BSc (Hons) in Information Technology",
    description:
      "Graduated with Second Upper Class Honours (2:1). Developed strong foundations in software development, IT infrastructure, and data systems. Final-year project focused on building a cloud-based inventory management system using React, Node.js, and Firebase.",
  },
  {
    date: "DEC 2019 - SEP 2022",
    institution: "Gusto University, Myanmar",
    degree: "Diploma in Computing",
    description:
      "Completed coursework in web development, programming fundamentals, and database management. Built several web-based projects and participated in collaborative software development using modern frameworks like React and Node.js.",
  },
];

function EducationItem({ education }) {
  const [hovered, setHovered] = useState(false);

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: 'auto 0', flex: 0.3 }}>
        <Typography sx={{ fontSize: "0.75rem", color: "white", fontFamily: "monospace", letterSpacing: "0.04em" }}>
          {education.date}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: '#2a2a2a' }} />
        <TimelineDot
          sx={{
            bgcolor: hovered ? '#2563eb' : '#1e1e2e',
            border: `2px solid ${hovered ? '#2563eb' : '#333'}`,
            boxShadow: hovered ? '0 0 12px rgba(37,99,235,0.6)' : 'none',
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
              ? "0 0 0 1px rgba(37,99,235,0.45), 0 8px 24px rgba(37,99,235,0.12)"
              : "0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "white", mb: 0.3 }}>
            {education.institution}
          </Typography>
          <Typography sx={{ fontSize: "0.82rem", color: "#2563eb", fontWeight: 500, mb: 1 }}>
            {education.degree}
          </Typography>
          <Typography sx={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.65 }}>
            {education.description}
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Educationdata() {
  return (
    <Timeline sx={{ padding: 0 }}>
      {Education.map((education, index) => (
        <EducationItem key={index} education={education} />
      ))}
    </Timeline>
  );
}
