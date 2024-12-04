import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

function Menus() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Our Menus
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Breakfast Menu</Typography>
              <Typography variant="body1">Pancakes, Eggs, Bacon, and more...</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Lunch Menu</Typography>
              <Typography variant="body1">Salads, Sandwiches, Burgers, and more...</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Dinner Menu</Typography>
              <Typography variant="body1">Pasta, Steaks, Fish, and more...</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Menus;