
import React, { useState } from 'react';
import './ProjectsOverlay.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function ProjectsOverlay({ projects }) {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            (prevIndex + 1) % projects.length
        );
    }

    const handlePrevProject = () => {
        setCurrentProjectIndex((prevIndex) =>
        (prevIndex - 1 + projects.length) % projects.length
        );
    }

    const currentProject = projects[currentProjectIndex];

    return(
        <div className="ProjectsOverlay">
            <div className="ProjectsOverlayContent">
                <h2>My Projects</h2>
                
                <div className="ProjectCarouselContainer">
                    <button className="CarouselArrow Left" onClick={handlePrevProject}>Prev</button>
                    {currentProject && <ProjectCard project={ currentProject } />}
                    <button className="CarouselArrow Right" onClick={handleNextProject}>Next</button>
                </div>

            </div>
        </div>
    );
}

export default ProjectsOverlay