import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Divider, CardActionArea } from '@mui/material';
import menuItems from './MenuItems';
import BasicTabs from './Tabs';
import Footer from './Footer';

const Menu = () => {
  
  const renderCategory = (category) => {
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginBottom: 20,
    };

    const itemStyle = {
      flex: '1 1 30%',
      margin: '10px',
      maxWidth: '345px',
    };

    return (     
      <div style={{ marginBottom: 20 }}>
        <Typography variant="h4" sx={{ marginBottom: 2, color: "white" }}>
          {category}
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <div style={containerStyle}>
          {menuItems
            .filter(item => item.category === category)
            .map((item, index) => (
              <Card key={index} style={itemStyle}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </div>
      </div>
    );
  };

  return (
    <Box sx={{ backgroundColor: "#11191b", minHeight: "100vh", width: "100%", margin: 0, padding: 0}}>
      <BasicTabs />
      {renderCategory("Main Dishes")}
      {renderCategory("Sides")}
      {renderCategory("Drinks")}
      {renderCategory("Desserts")}
      <Footer></Footer>
    </Box>
  );
};

export default Menu;
