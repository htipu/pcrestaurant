import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import LandingPage from './LandingPage';
import Menus from './Menus';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Reservation from './Reservation';



function App() {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Container>
  );
}

export default App;