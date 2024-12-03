import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Page({ children, navigateTo }) {
    return (
        <div>
            <Header navigateTo={navigateTo} />
            <main style={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

const styles = {
    main: {
        padding: '20px',
    }
};

export default Page;