import React, { useState } from 'react';

// import files
import './App.css'
import IntroScreen from './components/IntroScreen/IntroScreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainScreen from './components/MainScreen/MainScreen';

import Resume from './sections/Resume/Resume';
import SkillsOverlay from './sections/SkillsOverlay/SkillsOverlay';

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
    setShowResume(prev => !prev);
  }

  // Home button
  const handleGoHome = () => {
    setShowIntro(true);
    setShowResume(false);
  }

  // open and close Skills
  const handleToggleSkills = () => {
    if (showResume) { setShowResume(false) };
    setShowSkills(prev => !prev);
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
        />
      )}

      {/*Resume pop up*/}
      {showResume && (<Resume resumePDFPath="/ResumePlaceholder.pdf" />)}

      {/*Skills pop up*/}
      {showSkills && (<SkillsOverlay skills={ SkillsData } onClose={ handleToggleSkills } />)}
    </>
  );
}

export default App