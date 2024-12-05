import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import BasicTabs from './Tabs';


function Reservation() {
  return (
    <Box style={{ padding: '20px' }}>
      <BasicTabs></BasicTabs>
      <Typography variant="h4" gutterBottom>
        Online Reservation
      </Typography>
      <Typography variant="body1" paragraph>
        Reserve your table now! Please click the button below to fill out the reservation form.
      </Typography>
      <Button variant="contained" color="primary" href="https://forms.gle/Cbz1ynNmz6xZXJQt9" target="_blank">
        Reserve Now
      </Button>
    </Box>
  );
}

export default Reservation;