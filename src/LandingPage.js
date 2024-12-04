import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Box textAlign="center" style={{ padding: '20px' }}>
      <Typography variant="h2" paragraph>
        Secret Beast Restaurant
      </Typography>
      <Typography variant="h4" paragraph>
        Welcome to Secret Beast Restaurant! We're delighted to have you.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/menus" style={{ marginRight: '10px' }}>
        View Menus
      </Button>
      <Button variant="outlined" color="primary" component={Link} to="/about" style={{ marginRight: '10px' }}>
        About Us
      </Button>
      <Button variant="outlined" color="primary" component={Link} to="/contact">
        Contact Us
      </Button>
    </Box>
  );
}

export default LandingPage;
