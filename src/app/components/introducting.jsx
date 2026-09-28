"use client";
import WordFadeIn from "./word-fade-in";

const LINE_1 = "A MERN stack developer with a background in interactive 3D web experiences, now pursuing a Master's in";
const LINE_2 = "Data Science and Artificial Intelligence at AIT while transitioning toward cloud engineering and DevOps —";
const LINE_3 = "working toward a career in the tech and financial sector in Singapore.";

export default function Introducting() {
    return(
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "1.2rem", fontFamily: "Arial" , lineHeight: "1.5",color: "white"}}>
           <WordFadeIn text={LINE_1} delay={300} />
           <WordFadeIn text={LINE_2} delay={500} />
           <WordFadeIn text={LINE_3} delay={700} />
        </div>
    )
}