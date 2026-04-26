"use client";

import { useRef, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  const textRef = useRef(null);
  const originalText = "Zaw-Creator";
  const [currentTime, setCurrentTime] = useState("");
  const [quote, setQuote] = useState({ q: "", a: "" });

  // Scramble effect
  useEffect(() => {
    const scramble = (target, text) => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let iterations = 0;
      const interval = 50;

      const scrambleStep = () => {
        const scrambled = text
          .split("")
          .map((char, i) =>
            i < iterations ? char : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("");
        target.textContent = scrambled;

        if (iterations <= text.length) {
          iterations++;
          setTimeout(scrambleStep, interval);
        }
      };

      scrambleStep();

      
    };

    const el = textRef.current;
    if (!el) return;

    const intervalId = setInterval(() => {
      scramble(el, originalText);
    }, 10000); 

    const handle = () => scramble(el, originalText);

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
    <div style={{ textAlign: "center" }}>
      <br />
      <Analytics/> 
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button
          style={{
            borderRadius: "30px",
            margin: "10px",
            padding: "10px 20px",
            fontFamily: "Arial",
            fontSize: "16px",
            border: "1px solid gray",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            
          }}
        >
          View Resume
        </button>
      </a>
     
    

    
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 250 }}>
        <h1
          ref={textRef}
          style={{
            fontSize: "100px",
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
            fontSize: "100px",
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
          display: "block",
          marginTop: "2rem",
          marginBottom: "1rem",
          fontSize: "1rem",
          fontFamily: "Arial",
          color: "#b0b0b0",
          maxWidth: "600px",
          margin: "2rem auto 1rem auto",
        }}
      >
        <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>"{quote.q}"</p>
        <p style={{ fontSize: "0.9rem", color: "#808080" }}>— {quote.a}</p>
      </div>

      <span
        style={{
          display: "block",
          marginTop: "1rem",
          fontSize: "1.25rem",
          fontFamily: "Arial",
          color: "white",
        }}
      >
        {currentTime}
      </span>

      </div>
   
  );
}
