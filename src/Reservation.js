import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import BasicTabs from './Tabs';
import Footer from './Footer'


function Reservation() {
  return (
    <div style={{textAlign:'center'}}>
    <Box sx={{ backgroundColor: "#11191b", minHeight: "100vh", width: "100%", margin: 0, padding: 0}}>
    <Box style={{ padding: '0px'}}>
      <BasicTabs></BasicTabs>
      <hr/>
      <Typography variant="h2" gutterBottom color="white">
        Online Reservation
      </Typography>
      <hr/>
      <Typography variant="h5" paragraph color="white" >
        Reserve your table now! Please click the button below to fill out our reservation form.
      </Typography>
      <Button variant="contained" color="secondary" href="https://forms.gle/Cbz1ynNmz6xZXJQt9" target="_blank" size='large'>
        Reserve Now
      </Button>
    </Box>
    <div style={{height:'50rem'}}>
    </div>
    <Footer></Footer>
    </Box>
    </div>  
  );
}

export default Reservation;