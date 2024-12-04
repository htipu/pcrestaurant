import React from 'react';
import { Typography, Box } from '@mui/material';

function AboutUs() {
  return (
    <Box style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Secret Beast Restaurant! We welcome all types of secret beasts here at our establishment.
        
      </Typography>
    </Box>
  );
}

export default AboutUs;