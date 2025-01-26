import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import exploreImage from "../assets/explore.jpeg";
import experiencesImage from "../assets/flyfishing.webp";
import gearImage from "../assets/gearimage.jpeg";

const FeaturedSection = () => {
  const items = [
    {
      title: "Explore Fly Fishing",
      image: exploreImage,
      text: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu scelerisque.",
    },
    {
      title: "Fly Fishing Experiences",
      image: experiencesImage,
      text: "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque.",
    },
    {
      title: "Gear Up and Catch More",
      image: gearImage,
      text: "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F1ECE1", py: 4 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
  variant="h4"
  sx={{
    fontWeight: "bold",
    mb: 3,
    textAlign: "left", 
    color: "#1C1812",
  }}
>
  Featured Options
</Typography>
<Box sx={{ display: { xs: "none", md: "block" } }}>
  {items.map((item, index) => (
    <Accordion
      key={index}
      disableGutters
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        mb: 2,
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={(theme) => ({
          padding: 0,
          borderBottom: "1px solid #C4C4C4", 
        })}
      >
        <Typography sx={{ fontWeight: "bold" }}>{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 0,
          borderTop: "1px solid #C4C4C4", 
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 1, color: "#1C1812" }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ mb: 2, color: "#65625E" }}>{item.text}</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DFDEDD",
                color: "#1C1812",
                boxShadow: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#5A4C3E",
                },
              }}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  ))}
</Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "relative",
                width: "100%",
                height: "180px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#000",
                p: 2,
                mb: 2,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(200, 200, 200, 0.8)",
                  zIndex: 1,
                },
              }}
            >
           
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 2 }}>{item.text}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DFDEDD",
                    color: "#1C1812",
                    textTransform: "none",
                  }}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSection;
