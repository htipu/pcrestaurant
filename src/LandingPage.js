import React from 'react';
import { Typography, Box, BottomNavigation } from '@mui/material';
import BasicTabs from './Tabs';
import './LandingPage.css';
import background from './images/LandingPicture.jpg';
import Footer from './Footer'

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
      <Box textAlign="center" style={{position: 'relative', zIndex: 1}}>
        <BasicTabs />
        <Typography variant="h2" paragraph color="#FFFFFF">
          Secret Beast Restaurant
        </Typography>
        <Typography variant="h4" paragraph color="#FFFFFF">
          Welcome to Secret Beast Restaurant! We're delighted to have you.
        </Typography>
       
        <div style={{height: '68vh', width:'100%'}}></div>

        <div style={{height: '100vh', backgroundColor:'#11191b', margin:'0',color:'white'}}>
          
        </div>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;