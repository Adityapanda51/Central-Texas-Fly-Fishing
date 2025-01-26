import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import heroImage from '../assets/HeroImage.jpeg';

const HeroSection = () => (
  <Box sx={{ py: 2, pt: 6, backgroundColor: '#fff' }}>
    <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
      <Grid
        container
        spacing={2}
        alignItems="stretch" 
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        
        <Grid
          item
          xs={12}
          md={5} 
          sx={{
            order: { xs: 1, md: 2 }, 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Fly Fishing"
            sx={{
              width: { xs: '110%', md: '400px' }, 
              height: { xs: 'auto', md: '300px' }, 
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: 0,
            }}
          />
        </Grid>

     
        <Grid
          item
          xs={12}
          md={7} 
          sx={{
            order: { xs: 2, md: 1 }, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'flex-start' }, 
            textAlign: { xs: 'left', md: 'left' }, 
            py: 2,
          }}
        >
        
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 0, 
                color: '#1C1812',
              }}
            >
              Central Texas
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
                color: '#1C1812',
              }}
            >
              Fly Fishing
            </Typography>
          </Box>

       
          <Typography
            variant="body1"
            sx={{
              color: '#65625E',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.5,
              mb: 3,
              maxWidth: '100%',
            }}
          >
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
          </Typography>

       
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#514432',
                color: '#F7F7F6',
                textTransform: 'none',
                px: 3,
                fontSize: '16px',
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: '#5A4C3E',
                },
              }}
            >
              Get started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HeroSection;
