"use client";
import { Box,Typography } from "@mui/material";

const links=[{
    name:"Linkedin",
    url:"https://www.linkedin.com/in/zaw-creator/"
},
{
    name:"Linkedin",
    url:"https://www.linkedin.com/in/zaw-creator/"
},
{
    name:"Linkedin",
    url:"https://www.linkedin.com/in/zaw-creator/"
},
{
    name:"Linkedin",
    url:"https://www.linkedin.com/in/zaw-creator/"
},
]

export default function Contact() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Get in Touch with me!</h1>
            <p>Feel free to reach out to me through any of these platforms below</p>

  <Box
  sx={{
    display: "flex",
    flexWrap: "wrap", // allow wrapping to create multiple rows
    justifyContent: "center",
    gap: 2,
    marginLeft: 70,
    marginTop: 2,
    
    padding: 2,
    borderRadius: 2,
    width: 300, // adjust based on your layout needs
  }}
>
{links.map((link,index)=>(
    <Box key={index}
    sx={
        {
        flex: "0 0 calc(50% - 8px)", 
        // backgroundColor: "#fff",
        backgroundColor: "#524f4fb4",
        padding: 2,
        borderRadius: 1,
        }
    }>

        <Typography variant="h6">
            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {link.name}
            </a>
        </Typography>




    </Box>
))}


</Box>
        </div>
    );
}