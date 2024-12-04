// src/index.js (or src/index.tsx for TypeScript)

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // React Router for routing
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Material UI theme provider
import App from './App'; // Your main App component

// Create a Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>  {/* Wrap everything with StrictMode */}
    <ThemeProvider theme={theme}>  {/* Apply the theme globally */}
      <Router>  {/* Handle routing */}
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')  // Make sure you have an element with the ID 'root' in index.html
);