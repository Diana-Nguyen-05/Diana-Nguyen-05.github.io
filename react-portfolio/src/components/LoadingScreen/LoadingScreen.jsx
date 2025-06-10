// src/components/LoadingScreen/LoadingScreen.jsx

import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    return(
        <div className="LoadingScreenContainer">
            <p className="LoadingScreenText">Loading...</p>
            <div className="LoadingBarContainer">
                <div className="LoadingBarFill"></div>
            </div>
        </div>
    );
}

export default LoadingScreen;