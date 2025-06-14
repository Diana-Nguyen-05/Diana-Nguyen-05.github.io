
import React from 'react';
import './Socials.css';

function Socials({ onClick }) {
    return(
        <button className="SocialsButton" onClick={ onClick }>
            My Socials
        </button>
    );
}

export default Socials;