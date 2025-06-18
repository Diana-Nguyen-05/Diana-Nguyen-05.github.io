// src/components/AboutMe/AboutMe.jsx

import React from 'react';
import './AboutMe.css';

function AboutMe({ onClick, isActive }) {
    return(
        <button className={`AboutMeButton ${ isActive ? 'ActiveButton' : ''}`} onClick={ onClick }>
            About Me
        </button>
    );
}

export default AboutMe;