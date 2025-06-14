
import React from 'react';
import './Projects.css';

function Projects({ onClick }) {
    return(
        <button className='ProjectsButton' onClick={ onClick }>
            Projects
        </button>
    );
}

export default Projects;