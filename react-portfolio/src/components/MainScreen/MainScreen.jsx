// src/components/MainScreen/Mainscreen.jsx

import React from 'react';
import './MainScreen.css';

function MainScreen() {

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

            <div className="TopSpacer"></div>

            <div className="MainTextContainer">
                <h1 className="MainText">Hello, my name is Diana!</h1>
                <p className="Quote">Making play a profession.</p>
            </div>

            <div className="InventoryBarContainer">
                {inventorySlots.map((slot, index) => (
                    <div key={index} className={`InventorySlot ${slot.type == 'resume' ? 'resumeSlot' : ''}`}>
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