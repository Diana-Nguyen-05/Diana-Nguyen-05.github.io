// src/sections/Resume/Resume.jsx

import React from 'react';
import './Resume.css';

function Resume({ resumePDFPath }) {
    return(
        <div className="ResumeOverlay">
            <div className="ResumeContent">

                <iframe src={resumePDFPath} title="My Resume" className="ResumePDFViewer" frameborder="0">
                    <p>Your browser does not support PDFs. <a href={resumePDFPath} download>Download PDF</a></p>
                </iframe>

                <a href={resumePDFPath} download className="ResumeDownloadButton">Download Resume</a>

            </div>
        </div>
    );
}

export default Resume;