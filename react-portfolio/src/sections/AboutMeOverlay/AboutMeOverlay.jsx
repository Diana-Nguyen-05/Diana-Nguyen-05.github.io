// src/sections/AboutMeOverlay/AboutMeOverlay.jsx

import React from 'react';
import './AboutMeOverlay.css';

function AboutMeOverlay() {
    return(
        <div className="AboutMeOverlay">
            <div className="AboutMeOverlayContent">
                <h2>About Me</h2>

                <img src="/images/AboutMeImg.png" alt="Diana's Avatar" className="AboutMeImg" />

                <div className="AboutMeTxt">
                    <p>
                        Hello! My name's Diana, and <span className="highlight">I am a second year student at SFU, and an aspiring game developer.</span> I am currently working towards building new projects and learning about various topics to build upon my experience. Right now, I am interested in computer graphics and vision and am looking forwards to learning more about this field!
                    </p>

                    <p>
                        Outside of coding, you'll most likely find me playing videogames, drawing, or playing volleyball! Recently, I've also been getting into short hikes. One day, I hope that I will have the chance to travel the word!
                    </p>

                    <h3>Some of my relevant courses include:</h3>
                    <ul>
                        <li>cmpt 225: Data Structures and Programming</li>
                        <li>cmpt 310: Introduction to Artificial Intelligence</li>
                        <li>cmpt 361: Introduction to Visual Computing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMeOverlay;