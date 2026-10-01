"use client";
import { useState } from "react";
import Link from "next/link";
import posts from "../data/posts.jsx";

function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks === 1) return "1 week ago";
  if (diffWeeks < 5) return `${diffWeeks} weeks ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths <= 1) return "1 month ago";
  return `${diffMonths} months ago`;
}

export default function NoticeBoard() {
  const [open, setOpen] = useState(true);

  const recent = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  if (!open || recent.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        width: "min(300px, calc(100vw - 32px))",
        background: "#12161c",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "14px",
        boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
        overflow: "hidden",
        zIndex: 50,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#00e2a8",
              boxShadow: "0 0 6px #00e2a8",
            }}
          />
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9aa0a6",
              fontFamily: "Reddit Mono, monospace",
            }}
          >
            Notice Board
          </span>
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss notice board"
          style={{
            background: "none",
            border: "none",
            color: "#555",
            fontSize: "1rem",
            lineHeight: 1,
            cursor: "pointer",
            padding: 0,
          }}
        >
          &times;
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {recent.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "14px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: post.tagColor,
                  marginTop: "6px",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: post.tagColor,
                    marginBottom: "3px",
                  }}
                >
                  New post
                </div>
                <div style={{ fontSize: "0.86rem", color: "#e4e6e8", lineHeight: 1.4 }}>
                  {post.title}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#555", marginTop: "4px", fontFamily: "Reddit Mono, monospace" }}>
                  {timeAgo(post.date)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/blog" style={{ textDecoration: "none" }}>
        <div style={{ textAlign: "center", padding: "11px", fontSize: "0.8rem", fontWeight: 600, color: "#00e2a8" }}>
          View all &rarr;
        </div>
      </Link>
    </div>
  );
}
