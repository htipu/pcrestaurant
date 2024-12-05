import React from 'react';
import { Card, CardContent, CardMedia, Typography, Divider, CardActionArea } from '@mui/material';
import menuItems from './MenuItems'; // Adjust the path as needed
import BasicTabs from './Tabs';

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
        <Typography variant="h4" sx={{ marginBottom: 2}}>
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
                  <Typography variant="h6"> {item.name} </Typography>
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
    <div>
        <BasicTabs>
        </BasicTabs>
      {renderCategory("Main Dishes")}
      {renderCategory("Sides")}
      {renderCategory("Drinks")}
      {renderCategory("Desserts")}
    </div>
  );
};

export default Menu;