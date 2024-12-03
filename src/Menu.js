import React from 'react';
import Page from './Page';
import MenuItem from './MenuItem';

function Menu({ navigateTo }) {
    const menuItems = [
        { name: 'Pasta Primavera', description: 'A delightful mix of fresh vegetables and al dente pasta, tossed in a light garlic and olive oil sauce. Served with a side of garlic bread.', price: 12 },
        { name: 'Margherita Pizza', description: 'Classic Neapolitan pizza topped with fresh mozzarella, basil, and a rich tomato sauce, baked to perfection in our wood-fired oven.', price: 10 },
        { name: 'Caesar Salad', description: 'Crisp romaine lettuce, creamy Caesar dressing, parmesan cheese, and homemade croutons. Add grilled chicken or shrimp for an additional charge.', price: 8 },
        { name: 'Grilled Salmon', description: 'Succulent grilled salmon fillet served with a lemon-dill sauce, roasted potatoes, and seasonal vegetables.', price: 15 },
        { name: 'Beast Burger', description: 'Juicy, double-stacked beef patties topped with cheddar cheese, crispy bacon, lettuce, tomato, pickles, and our secret beast sauce, all sandwiched between a toasted brioche bun.', price: 14 },
        { name: 'Dragon Fire Wings', description: 'Spicy chicken wings tossed in our signature dragon fire sauce. Served with blue cheese dressing and celery sticks.', price: 11 },
        { name: 'Chocolate Lava Cake', description: 'A rich, warm chocolate cake with a molten chocolate center, served with vanilla ice cream and fresh berries.', price: 7 },
    ];

    return (
        <Page navigateTo={navigateTo}>
            <section id="menu" style={styles.menu}>
                <h2>Our Menu</h2>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </section>
        </Page>
    );
}

const styles = {
    menu: {
        textAlign: 'center',
    }
};

export default Menu;