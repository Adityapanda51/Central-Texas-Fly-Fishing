import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';

import johnStoryImage from '../assets/johnstory.jpeg';
import journeyImage from '../assets/thejourney.jpeg';
import catchDayImage from '../assets/catchday.jpeg';
import troutTalesImage from '../assets/trouttales.jpeg';

const stories = [
  {
    title: "John's Story",
    description:
      'Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh.',
    image: johnStoryImage,
  },
  {
    title: 'The Journey',
    description:
      'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu scelerisque.',
    image: journeyImage,
  },
  {
    title: 'Catch Day',
    description:
      'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque.',
    image: catchDayImage,
  },
  {
    title: 'Trout Tales',
    description:
      'Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed.',
    image: troutTalesImage,
  },
];

const StoriesSection = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#F7F7F7' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          Member Stories
        </Typography>
        <Grid container spacing={4}>
          {stories.map((story, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 0, md: 2 },
                pb: { xs: 3, md: 0 },
                borderBottom: { xs: '1px solid #ddd', md: 'none' },
                width: '100%',
              }}
            >
           
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 2,
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={story.image}
                  alt={story.title}
                  sx={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      fontFamily: "'Caveat', cursive", 
                      fontSize: '1.8rem',
                      color: '#3E3E3E',
                    }}
                  >
                    {story.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      fontSize: '0.95rem',
                      mb: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {story.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#DFDEDD',
                      color: '#1C1812',
                      boxShadow: 'none',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#d0d0d0',
                      },
                    }}
                  >
                    Read more
                  </Button>
                </Box>
              </Box>

            
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1,
                  width: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontFamily: "'Caveat', cursive", 
                    fontSize: '1.5rem',
                    color: '#3E3E3E',
                  }}
                >
                  {story.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={story.image}
                    alt={story.title}
                    sx={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {story.description}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#F7F7F7',
                    border: '1px solid #969491',
                    boxShadow: 'none',
                    color: '#1C1812',
                    borderRadius: '4px',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    mt: 2,
                  }}
                >
                  Read more
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StoriesSection;
