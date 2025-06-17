import React, { useState } from 'react';

// import files
import './App.css'
import IntroScreen from './components/IntroScreen/IntroScreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainScreen from './components/MainScreen/MainScreen';

import Resume from './sections/Resume/Resume';
import SkillsOverlay from './sections/SkillsOverlay/SkillsOverlay';
import AboutMeOverlay from './sections/AboutMeOverlay/AboutMeOverlay';

import SkillsData from './data/Skills';

function App() {

  // useState to control intro screen
  const [showIntro, setShowIntro] = useState(true); // initially set to True
  // useState to control loading screen
  const [loading, setLoading] = useState(false);
  // useState to control Resume pop up
  const [showResume, setShowResume] = useState(false);
  // useState to control Skills pop up
  const [showSkills, setShowSkills] = useState(false);
  // useState to control About Me pop up
  const [showAboutMe, setShowAboutMe] = useState(false);

  // setShowIntro function
  const handleStart = () => {
    setShowIntro(false);
    setLoading(true);

    // timer for loading screen
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  }

  // open and close Resume
  const handleToggleResume = () => {
    // close other pop ups
    if (showAboutMe) { setShowAboutMe(false); }

    setShowResume(prev => !prev);
  }

  // Home button
  const handleGoHome = () => {
    setShowIntro(true);
    setShowResume(false);
    setShowSkills(false);
    setShowAboutMe(false);
  }

  // open and close Skills
  const handleToggleSkills = () => {
    // close other pop ups
    if (showResume) { setShowResume(false); }
    if (showAboutMe) { setShowAboutMe(false); }

    setShowSkills(prev => !prev);
  }

  // open and close About Me
  const handleToggleAboutMe = () => {
    // close other pop ups
    if (showResume) { setShowResume(false); }
    if (showSkills) { setShowSkills(false); }

    setShowAboutMe(prev => !prev);
  }
  
  return(
    <>
      {showIntro ? (
        <IntroScreen onStart={ handleStart } /> 
      ) : loading ? ( // loading screen if not intro
        <LoadingScreen />
      ) : ( // main screen if neither
        <MainScreen 
          onToggleResume={ handleToggleResume } 
          isResumeActive={ showResume }
          onGoHome={ handleGoHome }
          onToggleSkills={ handleToggleSkills }
          isSkillsActive={ showSkills }          
          onToggleAboutMe={ handleToggleAboutMe }
          isAboutMeActive={ showAboutMe }
        />
      )}

      {/*Resume pop up*/}
      {showResume && (<Resume resumePDFPath="/ResumePlaceholder.pdf" />)}

      {/*Skills pop up*/}
      {showSkills && (<SkillsOverlay skills={ SkillsData } onClose={ handleToggleSkills } />)}

      {/*About Me pop up*/}
      {showAboutMe && (<AboutMeOverlay onClose={ handleToggleAboutMe } />)}
    </>
  );
}

export default App