
import React from 'react';
import './Skills.css';

function Skills({ onClick }) {
    return(
        <button className='SkillsButton' onClick={ onClick }>
            My Skills
        </button>
    );
}

export default Skills;