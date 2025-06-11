
import React from 'react';
import './Home.css';

function Home({ onClick }) {
    return(
        <button className="HomeButton" onClick={onClick}>
            Home
        </button>
    );
}

export default Home;