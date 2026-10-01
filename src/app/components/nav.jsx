"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

// Define the nav items
const navItems = [
  { label: "Home", icon: <HomeOutlinedIcon />, path: "/" },
  { label: "About", icon: <InfoOutlinedIcon />, path: "/about" },
  { label: "Work", icon: <WorkOutlineOutlinedIcon />, path: "/work" },
  { label: "Blog", icon: <ArticleOutlinedIcon />, path: "/blog" },
  { label: "Contact", icon: <ContactMailOutlinedIcon />, path: "/contact" },
];

export default function IconNavbar() {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: { xs: "1rem", sm: "clamp(0.75rem, 4vw, 4rem)" },
        flexWrap: "wrap",
        padding: "1rem",
        backgroundColor: "transparent",
      }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.label} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: "1.4rem", sm: "2rem" },
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
              </Box>
              <Typography
                sx={{
                  marginTop: "6px",
                  fontSize: { xs: "0.7rem", sm: "0.8rem" },
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
