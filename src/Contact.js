import React from 'react';
import Page from './Page';

function Contact({ navigateTo }) {
    return (
        <Page navigateTo={navigateTo}>
            <section id="contact" style={styles.contact}>
                <h2>The Creators!</h2>
                <h3>Matthew Brana, Hamid Tipu, LAnce Perdue, Tim Ford</h3>
                <p>Email: info@deliciousbites.com</p>
                <p>Address: 123 Tasty Ave, Flavor Town, USA</p>
            </section>
        </Page>
    );
}

const styles = {
    contact: {
        padding: '20px',
        textAlign: 'center',
    }
};

export default Contact;