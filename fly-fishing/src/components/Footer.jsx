import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import fishLogo from "../assets/vector.png";

const footerLinks = [
  { name: "FAQ", url: "/faq" },
  { name: "Privacy", url: "/privacy" },
  { name: "Support", url: "/support" },
  { name: "Contact", url: "/contact" },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1C1812", py: 3, color: "#F7F7F6" }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
    
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box
              component="img"
              src={fishLogo}
              alt="Fish Logo"
              sx={{ width: "80px", height: "auto" }}
            />
            <Box sx={{ display: "flex", gap: 4 }}>
              {footerLinks.map((link, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={link.url}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { color: "#6C584C" },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Box>

        
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F7F7F6" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F7F7F6" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F7F7F6" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Copyright Text */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            textAlign: "center",
            color: "#AEADAA",
            mt: 2,
          }}
        >
          <Typography sx={{ fontSize: "0.8rem" }}>
            © 2024 Central Texas Fly Fishing All Rights Reserved.
          </Typography>
        </Box>

        {/* Mobile View */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={fishLogo}
            alt="Fish Logo"
            sx={{ width: "80px", height: "auto", mb: 2 }}
          />
          {/* Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {footerLinks.map((link, index) => (
              <Typography
                key={index}
                component="a"
                href={link.url}
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { color: "#6C584C" },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Box>
          {/* Social Media Icons */}
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F7F7F6" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F7F7F6" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F7F7F6" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          {/* Copyright */}
          <Typography
            sx={{
              fontSize: "0.8rem",
              mt: 2,
              textAlign: "center",
              color: "#AEADAA",
            }}
          >
            © 2024 Central Texas Fly Fishing All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
