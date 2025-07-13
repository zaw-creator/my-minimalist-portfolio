"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import StarParticles from "../particles/starbg";

// Define the nav items
const navItems = [
  { label: "Home", icon: <HomeOutlinedIcon />, path: "/" },
  { label: "About", icon: <InfoOutlinedIcon />, path: "/about" },
  { label: "Work", icon: <WorkOutlineOutlinedIcon />, path: "/work" },
  { label: "Contact", icon: <ContactMailOutlinedIcon />, path: "/contact" },
];

export default function IconNavbar() {
  const pathname = usePathname();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "4rem",
        padding: "1rem",
        backgroundColor: "transparent",
      }}
    >
    
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.label} style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                color: "#fff",
                
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  backgroundColor: isActive
                    ? "rgba(128, 128, 128, 0.4)"
                    : "transparent",
                  border: isActive
                    ? "2px solid rgba(255, 255, 255, 0.6)"
                    : "2px solid transparent",
                  borderRadius: "8px",
                  padding: "6px",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  marginTop: "6px",
                  fontSize: "0.8rem",
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
