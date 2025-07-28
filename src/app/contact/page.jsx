"use client";
import { Box,Typography } from "@mui/material";
import SoundCloudPlayer from "../soundcloud/player";

const links=[{
    name:"Mail",
    url:"https://www.linkedin.com/in/zaw-creator/"
},
{
    name:"Linkedin",
    url:"https://www.linkedin.com/in/zaw-creator/"
},
{
    name:"Github",
    url:"https://www.github.com/zaw-creator/"
},
{
    name:"Discord",
    url:"https://discordapp.com/users/607608447671861249"
},
]

export default function Contact() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{paddingTop: "20px"}}>Get in Touch with me!</h1>
            <p style={{paddingTop: "20px"}}>Feel free to reach out to me through any of these platforms below</p>

  <Box
  sx={{
    display: "flex",
    flexWrap: "wrap", // allow wrapping to create multiple rows
    justifyContent: "center",
    gap: 2,
    // marginLeft: 70,
    alignContent: "center",
    alignItems: "center",
    marginTop: 2,
    
    padding: 2,
    borderRadius: 2,
    maxWidth: 600,
    height: 300,
    mx: "auto",
  }}
>
{links.map((link,index)=>(
    <Box key={index}
    sx={
        {
        flex: "0 0 calc(50% - 8px)", 
        // backgroundColor: "#fff",
        backgroundColor: "#161B22",
        padding: 2,
        borderRadius: 1,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        }
    }>

        <Typography  fontSize={20} >
            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {link.name}
            </a>
        </Typography>




    </Box>
))}


</Box>

<SoundCloudPlayer />

        </div>
    );
}