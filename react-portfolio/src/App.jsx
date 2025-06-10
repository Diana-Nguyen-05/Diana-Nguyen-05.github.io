import React, { useState } from 'react';

// import files
import IntroScreen from './components/IntroScreen/IntroScreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainScreen from "./components/MainScreen/MainScreen";
import './App.css'

function App() {

  // useState to control intro screen
  const [showIntro, setShowIntro] = useState(true); // initially set to True
  // useState to control loading screen
  const [loading, setLoading] = useState(false);

  // setShowIntro function
  const handleStart = () => {
    setShowIntro(false);
    setLoading(true);

    // timer for loading screen
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  }
  
  return(
    <>
      {showIntro ? (
        <IntroScreen onStart={ handleStart } /> 
      ) : loading? ( // loading screen if not intro
        <LoadingScreen />
      ) : ( // main screen if neither
        <MainScreen />
      )}
    </>
  );
}

export default App