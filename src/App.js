import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Menu from './Menu';
import Contact from './Contact';

function App() {
    const [page, setPage] = useState('landing');

    const navigateTo = (page) => {
        setPage(page);
    };

    return (
        <div>
            {page === 'landing' && <LandingPage navigateTo={navigateTo} />}
            {page === 'menu' && <Menu navigateTo={navigateTo} />}
            {page === 'contact' && <Contact navigateTo={navigateTo} />}
        </div>
    );
}

export default App;
