
import React from 'react';
import './AboutMe.css';

function AboutMe({ onClick }) {
    return(
        <button className='AboutMeButton' onClick={ onClick }>
            About Me
        </button>
    );
}

export default AboutMe;