import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import BasicTabs from './Tabs';

function Contact() {
  return (
    <Box style={{ padding: '20px' }}>
      <BasicTabs></BasicTabs>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <TextField fullWidth label="Your Name" margin="normal" />
        <TextField fullWidth label="Your Email" margin="normal" />
        <TextField fullWidth label="Your Message" multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default Contact;