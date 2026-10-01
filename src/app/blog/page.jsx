"use client";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import FadeIn from "../components/fade-in";
import posts from "../data/posts.jsx";

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <Box sx={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 80px" }}>

      <FadeIn>
        <Box sx={{ textAlign: "center", mt: 5, mb: 2 }}>
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
              fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
              fontWeight: 700,
              color: "white",
              fontFamily: "Reddit Mono, monospace",
            }}
          >
            Blog
          </Typography>
          <Typography
            sx={{
              color: "#888",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              maxWidth: 620,
              margin: "18px auto 0",
            }}
          >
            Notes on shipping ML models, the move from 3D web dev toward cloud engineering, and life as a DSAI grad student at AIT.
          </Typography>
        </Box>
      </FadeIn>

      {featured && (
        <FadeIn delay={80}>
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                mt: 5,
                background: "#12161c",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: { xs: "28px", sm: "40px" },
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                cursor: "pointer",
                transition: "box-shadow 0.25s ease, transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 0 1px rgba(0,226,168,0.35), 0 10px 32px rgba(0,226,168,0.12)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#062018",
                    backgroundColor: "#00e2a8",
                    padding: "5px 12px",
                    borderRadius: "999px",
                  }}
                >
                  Featured
                </Typography>
                <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: featured.tagColor }}>
                  {featured.category}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#555", fontFamily: "Reddit Mono, monospace" }}>
                  {featured.date} · {featured.readTime}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)", fontWeight: 700, color: "white", lineHeight: 1.25 }}>
                {featured.title}
              </Typography>
              <Typography sx={{ color: "#9aa0a6", fontSize: "1rem", lineHeight: 1.7, maxWidth: 760 }}>
                {featured.excerpt}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px", mt: "6px", color: "#00e2a8", fontSize: "0.92rem", fontWeight: 600 }}>
                Read more <span>&rarr;</span>
              </Box>
            </Box>
          </Link>
        </FadeIn>
      )}

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {rest.map((post, index) => (
          <FadeIn key={post.slug} delay={140 + index * 80}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  height: "100%",
                  background: "#12161c",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  transition: "box-shadow 0.25s ease, transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 0 0 1px ${post.tagColor}55, 0 10px 28px ${post.tagColor}1f`,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: post.tagColor }}>
                    {post.category}
                  </Typography>
                  <Typography sx={{ fontSize: "0.74rem", color: "#555", fontFamily: "Reddit Mono, monospace" }}>
                    {post.readTime}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.18rem", fontWeight: 700, color: "white", lineHeight: 1.35 }}>
                  {post.title}
                </Typography>
                <Typography sx={{ color: "#8a9097", fontSize: "0.92rem", lineHeight: 1.6, flexGrow: 1 }}>
                  {post.excerpt}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: "4px" }}>
                  <Typography sx={{ fontSize: "0.78rem", color: "#555", fontFamily: "Reddit Mono, monospace" }}>
                    {post.date}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "4px", color: post.tagColor, fontSize: "0.86rem", fontWeight: 600 }}>
                    Read <span>&rarr;</span>
                  </Box>
                </Box>
              </Box>
            </Link>
          </FadeIn>
        ))}
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          mt: 7,
          color: "#444",
          fontSize: "0.85rem",
          fontFamily: "Reddit Mono, monospace",
          letterSpacing: "0.04em",
        }}
      >
        more posts soon —
      </Typography>

    </Box>
  );
}
