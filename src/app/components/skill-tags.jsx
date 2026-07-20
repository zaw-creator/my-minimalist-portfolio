"use client";
import { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import TAG_COLORS, { DEFAULT_TAG } from "../data/tag-colors";

export default function SkillTags({ skills, stagger = 90 }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 1.5 }}
    >
      {skills.map((skill, index) => {
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
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0) scale(1)"
                : "translateY(14px) scale(0.8)",
              transition:
                `opacity 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * stagger}ms, ` +
                `transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * stagger}ms, ` +
                `border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease`,
              "&:hover": {
                borderColor: style.color,
                boxShadow: `0 0 12px ${style.color}50`,
                backgroundColor: `${style.color}22`,
                transform: "translateY(-3px) scale(1.06)",
              },
            }}
          >
            {skill}
          </Box>
        );
      })}
    </Box>
  );
}
