import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import desktopLogo from "../assets/logo.png";
import mobileLogo from "../assets/moblogo.png";


const links = [
  { name: "Home", url: "/" },
  { name: "About us", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "#fff", pt: 2 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 8 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <Box
          component="a"
          href="/"
          sx={{
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={isMobile ? mobileLogo : desktopLogo} 
            alt="Central Texas Fly Fishing"
            sx={{
              height: isMobile ? 30 : 40,
              objectFit: "contain",
              marginLeft: { md: -4 },
            }}
          />
        </Box>

        <Box
          component="nav"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2, 
            alignItems: "center",
          }}
        >
          {links.map((link, index) => (
            <Box
              key={index}
              component="a"
              href={link.url}
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "1rem",
                fontWeight: "500",
                "&:hover": {
                  color: "#6C584C", 
                },
              }}
            >
              {link.name}
            </Box>
          ))}
        </Box>


        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {links.map((link, index) => (
                <ListItem
                  button
                  key={index}
                  component="a"
                  href={link.url}
                >
                  <ListItemText primary={link.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Header;
