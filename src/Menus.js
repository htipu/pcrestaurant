import React from 'react';
import Burger from "./images/burger.jpeg"
import { Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import BasicTabs from './Tabs';
const menuItems = [
  {
    name: "Secret Beast Burger",
    category: "Main Dishes",
    description: "Our Secret Beast Burger, featuring our Secret Beast Sauce, consists of fresh tomatoes, pasture-fed beef, crisp lettuce, American cheese, and tangy onions. Comes with a side of fries.",
    image: Burger,
    price: "$12.99"
  }
];

const Menu = () => {
  return (
    <div>
      <BasicTabs></BasicTabs>
      <div style={{ marginBottom: 20 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Main Dishes
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        {menuItems
          .filter(item => item.category === "Main Dishes")
          .map((item, index) => (
            <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }}>
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
            </Card>
          ))}
      </div>
    </div>
  );
}
export default Menu;
