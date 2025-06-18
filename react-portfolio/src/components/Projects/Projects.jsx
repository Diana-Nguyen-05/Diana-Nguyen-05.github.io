// src/components/Projects/Projects.jsx

import React from 'react';
import './Projects.css';

function Projects({ onClick, isActive }) {
    return(
        <button className={`ProjectsButton ${ isActive ? 'ActiveButton' : ''}`} onClick={ onClick }>
            Projects
        </button>
    );
}

export default Projects;