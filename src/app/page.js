"use client";

import { useRef, useEffect, useState } from "react";


export default function Home() {
  const textRef = useRef(null);
  const originalText = "Zaw-Creator";
  const [currentTime, setCurrentTime] = useState("");

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
     
    

    
      <h1
        ref={textRef}
        style={{
          marginTop: 250,
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
