import React from 'react';
import { Typography, Box, Button } from '@mui/material';

function Reservation() {
  return (
    <Box style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Online Reservation
      </Typography>
      <Typography variant="body1" paragraph>
        Reserve your table now! Please click the button below to fill out the reservation form.
      </Typography>
      <Button variant="contained" color="primary" href="https://forms.gle/your-google-form-link" target="_blank">
        Reserve Now
      </Button>
    </Box>
  );
}

export default Reservation;