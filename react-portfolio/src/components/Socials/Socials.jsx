// src/components/Socials/Socials.jsx

import React from 'react';
import './Socials.css';

function Socials({ onClick, isActive }) {
    return(
        <button className={`SocialsButton ${isActive ? 'ActiveButton' : ''}`} onClick={ onClick }>
            My Socials
        </button>
    );
}

export default Socials;