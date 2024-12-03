import React from 'react';

function MenuItem({ name, description, price }) {
    return (
        <div style={styles.menuItem}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p style={styles.price}>${price}</p>
        </div>
    );
}

const styles = {
    menuItem: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '20px auto',
        padding: '10px',
        maxWidth: '600px',
        textAlign: 'left',
    },
    price: {
        fontWeight: 'bold',
        color: '#ff6347',
    }
};

export default MenuItem;