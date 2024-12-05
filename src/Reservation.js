import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import BasicTabs from './Tabs';


function Reservation() {
  return (
    <Box sx={{ backgroundColor: "#11191b", minHeight: "100vh", width: "100%", margin: 0, padding: 0}}>
    <Box style={{ padding: '30px'}}>
      <BasicTabs></BasicTabs>
      <Typography variant="h3" gutterBottom color="white">
        Online Reservation
      </Typography>
      <Typography variant="h5" paragraph color="white">
        Reserve your table now! Please click the button below to fill out the reservation form.
      </Typography>
      <Button variant="contained" color="secondary" href="https://forms.gle/Cbz1ynNmz6xZXJQt9" target="_blank">
        Reserve Now
      </Button>
    </Box>
    </Box>
  );
}

export default Reservation;