// src/components/MainScreen/Mainscreen.jsx

import React from 'react';
import './MainScreen.css';

import HomeButton from '../Home/Home';
import SocialsButton from '../Socials/Socials';

function MainScreen({ onToggleResume, isResumeActive, onGoHome }) {

    const inventorySlots = [
        {type: 'resume', content: 'Resume'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'},
        {type: 'empty'}
    ]

    return (
        <div className="MainScreenContainer">

            <div className="HomeButtonContainer">
                <HomeButton onClick={onGoHome} />
            </div>

            <div className="SocialsButtonContainer">
                <SocialsButton onClick={() => console.log('Socials clicked')} />
            </div>

            <div className="TopSpacer"></div>

            <div className="MainTextContainer">
                <h1 className="MainText">Hello, my name is <span className="Name">Diana</span>!</h1>
                <p className="Quote">Making play a profession.</p>
            </div>

            <div className="InventoryBarContainer">
                {inventorySlots.map((slot, index) => (
                    <div
                        key={index} 
                        className={`InventorySlot ${slot.type == 'resume' ? 'resumeSlot' : ''} ${slot.type == 'resume' && isResumeActive ? 'ActiveSlot' : ''}`}
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