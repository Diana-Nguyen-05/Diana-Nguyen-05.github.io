import React, { useState } from 'react';

// import files
import IntroScreen from './components/IntroScreen/IntroScreen';
import MainScreen from "./components/MainScreen/MainScreen";
import './App.css'

function App() {

  // useState to control intro screen and main page
  const [showIntro, setShowIntro] = useState(true); // initially set to True

  // setShowIntro function
  const handleStart = () => {
    setShowIntro(false);
  }

  return(
    <>
      {showIntro ? (
      <IntroScreen onStart={ handleStart } /> ):( // show intro screen
      <MainScreen />
      )}
    </>
  );
}

export default App