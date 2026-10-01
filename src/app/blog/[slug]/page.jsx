"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FadeIn from "../../components/fade-in";
import posts from "../../data/posts.jsx";

export default function BlogPost({ params }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Box sx={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 100px" }}>
      <FadeIn>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px", color: "#888", fontSize: "0.9rem", mb: 4, width: "fit-content" }}>
            <ArrowBackIcon sx={{ fontSize: "1rem" }} />
            Back to blog
          </Box>
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", mb: 2 }}>
          <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: post.tagColor }}>
            {post.category}
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "#555", fontFamily: "Reddit Mono, monospace" }}>
            {post.date} · {post.readTime}
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 700, color: "white", lineHeight: 1.25, mb: 3 }}>
          {post.title}
        </Typography>

        <Typography sx={{ color: "#9aa0a6", fontSize: "1.05rem", lineHeight: 1.75, mb: 5 }}>
          {post.excerpt}
        </Typography>

        {post.content ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {post.content.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{ color: "#cfd3d8", fontSize: "1.02rem", lineHeight: 1.85 }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              background: "#12161c",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "14px",
              padding: "28px",
              textAlign: "center",
              color: "#666",
              fontSize: "0.95rem",
            }}
          >
            Full write-up coming soon.
          </Box>
        )}
      </FadeIn>
    </Box>
  );
}
