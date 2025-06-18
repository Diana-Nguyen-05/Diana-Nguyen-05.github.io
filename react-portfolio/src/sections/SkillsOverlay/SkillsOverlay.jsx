// src/sections/SkillsOverlay/SkillsOverlay.jsx

import React from 'react';
import './SkillsOverlay.css';

function SkillsOverlay({ skills }) {
    return(
        <div className="SkillsOverlay"> 
            <div className="SkillsOverlayContent">
                {/*Title*/}
                <h2>My Skills</h2>

                <div className="SkillsGrid">

                    {/*Languages*/}
                    <div className="SkillsCategory">
                        <h3>Languages</h3>
                        <ul>
                            {skills.languages.map((skill, index) => (
                                <li key={index}>
                                    {skill.icon && <img src={skill.icon} alt={skill.name} className="SkillIcon" />}
                                    <span className="SkillName">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*Libraries*/}
                    <div className="SkillsCategory">
                        <h3>Libraries</h3>
                        <ul>
                            {skills.libraries.map((skill, index) => (
                                <li key={index}>
                                    {skill.icon && <img src={skill.icon} alt={skill.name} className="SkillIcon" />}
                                    <span className="SkillName">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*Frameworks*/}
                    <div className="SkillsCategory">
                        <h3>Frameworks</h3>
                        <ul>
                            {skills.frameworks.map((skill, index) => (
                                <li key={index}>
                                    {skill.icon && <img src={skill.icon} alt={skill.name} className="SkillIcon" />}
                                    <span className="SkillName">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SkillsOverlay;