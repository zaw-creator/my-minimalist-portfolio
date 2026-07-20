"use client";
import { useEffect, useRef, useState } from "react";

export default function WordFadeIn({ text, delay = 0, stagger = 40 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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

  const words = text.trim().split(/\s+/);

  return (
    <p ref={ref}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-16px)",
            transition: `opacity 0.5s ease ${delay + index * stagger}ms, transform 0.5s ease ${delay + index * stagger}ms`,
            marginRight: "0.3em",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
