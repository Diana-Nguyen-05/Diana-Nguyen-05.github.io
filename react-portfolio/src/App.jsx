import React, { useState } from 'react';

// import files
import IntroScreen from './components/IntroScreen/IntroScreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainScreen from "./components/MainScreen/MainScreen";
import Resume from "./components/Resume/Resume";
import './App.css'

function App() {

  // useState to control intro screen
  const [showIntro, setShowIntro] = useState(true); // initially set to True
  // useState to control loading screen
  const [loading, setLoading] = useState(false);
  // useState to control Resume pop up
  const [showResume, setShowResume] = useState(false);

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
        />
      )}

      {/*Resume pop up*/}
      {showResume && (<Resume resumePDFPath="/ResumePlaceholder.pdf" />)}
    </>
  );
}

export default App