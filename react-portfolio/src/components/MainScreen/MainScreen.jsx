// src/components/MainScreen/Mainscreen.jsx

import React from 'react';
import './MainScreen.css';

import HomeButton from '../Home/Home';
import SocialsButton from '../Socials/Socials';
import AboutMeButton from '../AboutMe/AboutMe';
import SkillsButton from '../Skills/Skills';
import ProjectsButton from '../Projects/Projects';

function MainScreen({ onToggleResume, isResumeActive, onGoHome, onToggleSkills, isSkillsActive, onToggleAboutMe, isAboutMeActive, onToggleSocials, isSocialsActive, onToggleProjects, isProjectsActive }) {

    // Inventory slots
    const inventorySlots = [
        {type: 'resume', content: 'Resume'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty', class: 'hideP'},
        {type: 'empty', class: 'hideT'},
        {type: 'empty', class: 'hideT'},
        {type: 'empty', class: 'hideT'},
        {type: 'empty', class: 'hideT'},
        {type: 'empty',  class: 'hideT'}
    ]

    return (
        <div className="MainScreenContainer">

            {/* All buttons */}
            <div className="HomeButtonContainer">
                <HomeButton onClick={onGoHome} />
            </div>

            <div className="SocialsButtonContainer">
                <SocialsButton onClick={ onToggleSocials } isActive={ isSocialsActive } />
            </div>

            <div className="AboutMeButtonContainer">
                <AboutMeButton onClick={ onToggleAboutMe } isActive={ isAboutMeActive } />
            </div>

            <div className="SkillsButtonContainer">
                <SkillsButton onClick={ onToggleSkills } isActive={ isSkillsActive } />
            </div>

            <div className="ProjectsButtonContainer">
                <ProjectsButton onClick={ onToggleProjects } isActive={ isProjectsActive } />
            </div>

            <div className="TopSpacer"></div>

            {/*Main Text*/}
            <div className="MainTextContainer">
                <h1 className="MainText">Hello, my name is <span className="Name">Diana</span>!</h1>
                <p className="Quote">Making play a profession.</p>
            </div>

            {/*Help text*/}
            <div className="Help">
                <p className="HelpText">Click the buttons to learn more about me! Click button again to close.</p>
            </div>

            {/*Copy right*/}
            <div className="Footer">
                <p className="CopyRight">&copy; 2025 Diana Nguyen</p>
            </div>

            {/*Inventory bar*/}
            <div className="InventoryBarContainer">
                {inventorySlots.map((slot, index) => (
                    <div
                        key={index} 
                        className={`InventorySlot 
                            ${slot.type == 'resume' ? 'resumeSlot' : ''} 
                            ${slot.type == 'resume' && isResumeActive ? 'ActiveSlot' : ''}
                            ${slot.class || ''} `}
                        onClick={slot.type=='resume' ? onToggleResume : null}
                    >
                        {slot.content && (
                            <span className="slotContent">
                                {slot.content}
                            </span>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default MainScreen;