// src/components/IntroScreen/IntroScreen.jsx

import React from 'react';
import './IntroScreen.css';

function IntroScreen({ onStart }) {
    return(
        <div className="IntroScreenContainer" onClick={ onStart }>
            <p className="IntroScreenText">Press anywhere to start . . .</p>
        </div>
    );
}

export default IntroScreen;