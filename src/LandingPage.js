import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BasicTabs from './Tabs';
import './LandingPage.css';
import background from './images/LandingPicture.jpg';

function LandingPage() {
  const backgroundpic = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  };

  return (
    <>
      <div style={backgroundpic} />
      <Box textAlign="center" style={{ position: 'relative', zIndex: 1 }}>
        <BasicTabs />
        <Typography variant="h2" paragraph color="#FFFFFF">
          Secret Beast Restaurant
        </Typography>
        <Typography variant="h4" paragraph color="#FFFFFF">
          Welcome to Secret Beast Restaurant! We're delighted to have you.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/menus" style={{ marginRight: '10px' }}>
          View Menus
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/about" style={{ marginRight: '10px' }}>
          About Us
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/contact">
          Contact Us
        </Button>
      </Box>
    </>
  );
}

export default LandingPage;