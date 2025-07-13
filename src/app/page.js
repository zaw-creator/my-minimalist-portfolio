"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Starsparticles from "./particles/starbg";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconNavbar from "./components/nav";
import { Button } from "@mui/material";

export default function Home() {

  const getDate = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHour}:${formattedMinutes} ${ampm}`;
    return formattedTime;
  };

  return (
    <div style={{textAlign: "center"}}>
         <br />
         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
  <Button
    variant="outlined"
    color="grey"
    style={{
      borderRadius: "30px",
      margin: "10px",
      fontFamily: "Arial",
    }}
  >
    View Resume
  </Button>
</a>

      <h1 style={{marginTop:280,fontSize:"100px"}}>
        Zaw-Creator
      </h1>

      <span> {getDate()}</span>

    </div>
 
  );
}
