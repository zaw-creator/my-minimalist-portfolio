"use client";
import WordFadeIn from "./word-fade-in";

const LINE_1 = "A recent IT graduate with a strong foundation in web development and a focus on creating interactive 3D websites using";
const LINE_2 = "Three.js and React. Skilled in modern front-end technologies including";
const LINE_3 = "HTML, CSS, JavaScript, React, and Three.js.";

export default function Introducting() {
    return(
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "1.2rem", fontFamily: "Arial" , lineHeight: "1.5",color: "white"}}>
           <WordFadeIn text={LINE_1} delay={300} />
           <WordFadeIn text={LINE_2} delay={500} />
           <WordFadeIn text={LINE_3} delay={700} />
        </div>
    )
}