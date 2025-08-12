'use client';

import Introducting from "../components/introducting";
import Experiences from "../components/experiences";

import Box from '@mui/material/Box';
import Educationdata from "../components/education";

const FirstRow =[
  "JavaScript",
  "React",
  "Three.js",
  "WebGL",
  "ASP.NET",
  "Mongodb",
  "Mongoose",
  "MsSQL",
  "Material UI",
  "GSAP"
];
const secondRow = [
  "Express",
  "Rest Api",
  "Spline",
  "Azure",
  "React Hook Form",
  "Particle.js"
];


export default function About(){
    return (
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "2rem", fontFamily: "Arial",color: "white" }}>
            <Introducting />
            <h4 style={{ marginTop: "30px",  fontSize: "1.9rem", fontFamily: "Arial",color: "white" }}>
               Skills 
            </h4>
           <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginTop: 2 }}> 
            {FirstRow.map((skill,index)=>(
                <Box key={index} sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2, color: 'white', fontSize: "1rem" }}>
                    <p>{skill}</p>
                </Box>
            ))}
           </Box>

             <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginTop: 2 }}> 
            {secondRow.map((skill,index)=>(
                <Box key={index} sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2, color: 'white', fontSize: "1rem" }}>
                    <p>{skill}</p>
                </Box>
            ))}
           </Box>   
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2,color: 'white',fontSize: "1rem" }}>
                    <p>GitHub</p>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2,color: 'white',fontSize: "1rem" }}>
                    <p>Figma</p>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2,color: 'white',fontSize: "1rem" }}>
                    <p>Vercel</p>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2,color: 'white',fontSize: "1rem" }}>
                    <p>PHP</p>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#161B22', borderRadius: 2, padding: 2,color: 'white',fontSize: "1rem" }}>
                    <p>Blender (3D Modeling)</p>
                </Box>
                
           </Box>

            <h1 style={{ marginTop: "30px", fontSize: "30px", fontFamily: "Arial",color: "white" }}>
                Experience
            </h1>
            <Experiences />

             <h1 style={{ marginTop: "30px", fontSize: "30px", fontFamily: "Arial",color: "white" }}>
                Education
            </h1>
            <Educationdata />
           


        </div>
    );
}
          
      