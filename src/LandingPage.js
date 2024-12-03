import React from 'react';
import Page from './Page';

function LandingPage({ navigateTo }) {
    return (
        <Page>
            <div style={styles.landing}>
                <h1>Welcome to Delicious Bites</h1>
                <p>Your favorite place for delicious and fresh meals.</p>
                <button style={styles.button} onClick={() => navigateTo('menu')}>View Menu</button>
                <button style={styles.button} onClick={() => navigateTo('contact')}>Contact Us</button>
            </div>
        </Page>
    );
}

const styles = {
    landing: {
        textAlign: 'center',
        padding: '50px',
        background: '#ff6347',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: '10px',
        padding: '15px 25px',
        fontSize: '16px',
        backgroundColor: 'white',
        color: '#ff6347',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    }
};

export default LandingPage;