
import React from 'react';
import './SocialsOverlay.css';

function SocialsOverlay() {
    return(
        <div className="SocialsOverlay">
            <div className="SocialsOverlayContent">
                <p>Connect with me!</p>
                <div className="SocialsLinks">
                    <a href="https://www.linkedin.com/in/diana-nguyen-8966b8368/">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="SocialIcon" />
                        <span>Linkedin</span>
                    </a>

                    <a href="https://github.com/Diana-Nguyen-05">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="SocialIcon" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialsOverlay;