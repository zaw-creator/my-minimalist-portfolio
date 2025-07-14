'use client';

import Introducting from "../components/introducting";
import Experiences from "../components/experiences";

import Box from '@mui/material/Box';
import Educationdata from "../components/education";


export default function About(){
    return (
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "20px", fontFamily: "Arial" }}>
            <Introducting />
            <h1 style={{ marginTop: "30px", fontSize: "30px", fontFamily: "Arial" }}>
               Skills 
            </h1>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>JavaScript</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>React</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Three.js</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>WebGL</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>ASP.NET</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Mongodb</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Mongoose</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>MsSQL</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Material UI</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>GSAP</h3>
                </Box>
                
           </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Express</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Rest Api</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Spline</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Azure</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>React Hook Form</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Particle.js</h3>
                </Box>
                
           </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, marginTop: 2 }}>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>GitHub</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Figma</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>Vercel</h3>
                </Box>
                <Box sx={{ width: 'auto', height: 50, backgroundColor: '#524f4fb4', borderRadius: 2, padding: 2,color: 'white',fontSize: "14px" }}>
                    <h3>PHP</h3>
                </Box>
                
           </Box>

            <h1 style={{ marginTop: "30px", fontSize: "30px", fontFamily: "Arial" }}>
                Experience
            </h1>
            <Experiences />

             <h1 style={{ marginTop: "30px", fontSize: "30px", fontFamily: "Arial" }}>
                Experience
            </h1>
            <Educationdata />
           


        </div>
    );
}
          
      