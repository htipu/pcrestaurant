import React from 'react';

function Header({ navigateTo }) {
    return (
        <header style={styles.header}>
            <h1 style={styles.title} onClick={() => navigateTo('landing')}>Delicious Bites</h1>
            <nav>
                <a href="#menu">Menu</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#ff6347',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    },
    title: {
        cursor: 'pointer',
    }
};

export default Header;