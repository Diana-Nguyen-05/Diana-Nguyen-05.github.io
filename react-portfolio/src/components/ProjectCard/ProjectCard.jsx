
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return(
        <div className="ProjectCard">
            <h3>{project.title}</h3>
            {project.image && (<img src={project.image} alt={project.title} className="ProjectImage" />)}
            <p className="ProjectDescription">{project.description}</p>

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