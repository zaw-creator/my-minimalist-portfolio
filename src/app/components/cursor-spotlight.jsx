"use client";
import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    const move = (e) => {
      spot.style.background = `radial-gradient(circle 350px at ${e.clientX}px ${e.clientY}px, rgba(180,180,255,0.06), transparent 80%)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={spotRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
