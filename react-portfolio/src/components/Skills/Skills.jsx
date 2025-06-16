
import React from 'react';
import './Skills.css';

function Skills({ onClick, isActive }) {
    return(
        <button className={`SkillsButton ${isActive ? 'ActiveButton' : ''}`} onClick={ onClick }>
            My Skills
        </button>
    );
}

export default Skills;