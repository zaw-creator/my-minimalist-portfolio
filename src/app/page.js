"use client";

import { useRef, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { scrambleText } from "./utils/scrambleText";
import NoticeBoard from "./components/notice-board";


export default function Home() {
  const textRef = useRef(null);
  const timeRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteAuthorRef = useRef(null);
  const originalText = "Zaw-Creator";
  const [currentTime, setCurrentTime] = useState("00:00 AM");
  const [quote, setQuote] = useState({ q: "", a: "" });

  // Scramble effect
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const intervalId = setInterval(() => {
      scrambleText(el, originalText);
    }, 10000);

    const handle = () => scrambleText(el, originalText);

    el.addEventListener("pointerenter", handle);
    el.addEventListener("focus", handle);

    return () => {
      clearInterval(intervalId);
      el.removeEventListener("pointerenter", handle);
      el.removeEventListener("focus", handle);
    };
  }, []);

  // Fetch random quote on mount
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("/api/quote");
        const data = await response.json();
        setQuote({ q: data[0].q, a: data[0].a });
      } catch (error) {
        console.log("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);

  useEffect(() => {
    const timeEl = timeRef.current;
    const quoteEl = quoteRef.current;
    const authorEl = quoteAuthorRef.current;

    if (!timeEl || !quoteEl || !authorEl) return;

    const triggerTimeScramble = () => {
      if (currentTime) scrambleText(timeEl, currentTime);
    };

    const triggerQuoteScramble = () => {
      if (quote.q) scrambleText(quoteEl, `“${quote.q}”`);
    };

    const triggerAuthorScramble = () => {
      if (quote.a) scrambleText(authorEl, `— ${quote.a}`);
    };

    timeEl.addEventListener("pointerenter", triggerTimeScramble);
    quoteEl.addEventListener("pointerenter", triggerQuoteScramble);
    authorEl.addEventListener("pointerenter", triggerAuthorScramble);
    timeEl.addEventListener("focus", triggerTimeScramble);
    quoteEl.addEventListener("focus", triggerQuoteScramble);
    authorEl.addEventListener("focus", triggerAuthorScramble);

    return () => {
      timeEl.removeEventListener("pointerenter", triggerTimeScramble);
      quoteEl.removeEventListener("pointerenter", triggerQuoteScramble);
      authorEl.removeEventListener("pointerenter", triggerAuthorScramble);
      timeEl.removeEventListener("focus", triggerTimeScramble);
      quoteEl.removeEventListener("focus", triggerQuoteScramble);
      authorEl.removeEventListener("focus", triggerAuthorScramble);
    };
  }, [currentTime, quote.q, quote.a]);

  // Local time updater
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedTime = `${formattedHour}:${formattedMinutes} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 16px 60px",
        width: "100%",
        maxWidth: "980px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Analytics />
      <NoticeBoard />

      <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "18px 0" }}>
        <a
          href="https://1drv.ms/w/c/51c479cebe32fd28/IQDrphmJZXuHT4BhuazC11q2AVL-vj64fktYiwAyHJg6sY8?e=sQUw2g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              borderRadius: "30px",
              margin: "10px",
              padding: "12px 18px",
              minWidth: "160px",
              fontFamily: "Arial",
              fontSize: "clamp(0.9rem, 1vw, 1rem)",
              border: "1px solid gray",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Resume
          </button>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "clamp(60px, 15vh, 250px)",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <h1
          ref={textRef}
          style={{
            fontSize: "clamp(2rem, 12vw, 6.25rem)",
            fontFamily: "Reddit Mono, monospace",
            cursor: "pointer",
            color: "white",
          }}
          tabIndex={0}
        >
          Zaw-Creator
        </h1>
        <span
          style={{
            fontSize: "clamp(2rem, 12vw, 6.25rem)",
            fontFamily: "Reddit Mono, monospace",
            color: "rgba(255,255,255,0.7)",
            animation: "blink 1.1s step-end infinite",
            marginLeft: "6px",
            userSelect: "none",
          }}
        >
          |
        </span>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          margin: "2rem auto 1rem auto",
          fontSize: "1rem",
          fontFamily: "Arial",
          color: "#b0b0b0",
          padding: "0 12px",
        }}
      >
        <p
          ref={quoteRef}
          style={{ fontStyle: "italic", marginBottom: "0.5rem", cursor: "pointer" }}
          tabIndex={0}
        >
          {quote.q}
        </p>
        <p
          ref={quoteAuthorRef}
          style={{ fontSize: "0.9rem", color: "#808080", cursor: "pointer" }}
          tabIndex={0}
        >
          {quote.a}
        </p>
      </div>

      <span
        ref={timeRef}
        style={{
          display: "block",
          marginTop: "1rem",
          fontSize: "1.25rem",
          fontFamily: "Arial",
          color: "white",
          cursor: "pointer",
        }}
        tabIndex={0}
      >
        {currentTime}
      </span>
    </main>
  );
}
