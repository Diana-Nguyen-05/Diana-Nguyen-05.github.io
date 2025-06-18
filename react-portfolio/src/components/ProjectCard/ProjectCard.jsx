// src/components/ProjectCard/ProjectCard.jsx

import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return(
        <div className="ProjectCard">
            {/* Project Title*/}
            <h3>{project.title}</h3>

            {/*Project Image and description*/}
            {project.image && (<img src={project.image} alt={project.title} className="ProjectImage" />)}
            <p className="ProjectDescription">{project.description}</p>

            {/*Technologies used in project*/}
            {project.technologies && project.technologies.length > 0 && (
                <div className="ProjectTechnologies">
                    <h4>Technologies:</h4>
                    <ul>
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/*Project Links*/}
            <div className="ProjectLinks">
                {project.githubLink && (
                    <a href={project.githubLink} className="ProjectLink GithubLink">GitHub</a>
                )}
                {project.LiveDemoLink && (
                    <a href={project.LiveDemoLink} className="ProjectLink LiveDemoLink">Live Demo</a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;