// import files
import React, { useState } from 'react';

  // my different 'pages'
import './App.css'
import IntroScreen from './components/IntroScreen/IntroScreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainScreen from './components/MainScreen/MainScreen';

  // overlays
import Resume from './sections/Resume/Resume';
import SkillsOverlay from './sections/SkillsOverlay/SkillsOverlay';
import AboutMeOverlay from './sections/AboutMeOverlay/AboutMeOverlay';
import SocialsOverlay from './sections/SocialsOverlay/SocialsOverlay';
import ProjectsOverlay from './sections/ProjectsOverlay/ProjectsOverlay';

  // data
import SkillsData from './data/Skills';
import ProjectsData from './data/Projects';




function App() {

  // useStates to control...
  const [showIntro, setShowIntro] = useState(true); // intro screen
  const [loading, setLoading] = useState(false); // loading screen
  const [showResume, setShowResume] = useState(false); // resume pop up
  const [showSkills, setShowSkills] = useState(false); // skills pop up
  const [showAboutMe, setShowAboutMe] = useState(false); // about me pop up
  const [showSocials, setShowSocials] = useState(false); // socials pop up
  const [showProjects, setShowProjects] = useState(false); // projects pop up

  // setShowIntro function
  const handleStart = () => {
    setShowIntro(false);
    setLoading(true);

    // timer for loading screen
    setTimeout(() => {
      setLoading(false);
    }, 2500) // 2.5s
  };

  const handleToggleSocials = () => {
    setShowSocials(prev => !prev);
  };

  // Home button
  const handleGoHome = () => {
    // close other pop ups
    setShowResume(false);
    setShowSkills(false);
    setShowAboutMe(false);
    setShowSocials(false);
    setShowProjects(false);

    setShowIntro(true);
  };

  // open and close Resume
  const handleToggleResume = () => {
    // close other pop ups
    if (showSkills) { setShowSkills(false); }
    if (showAboutMe) { setShowAboutMe(false); }
    if (showProjects) { setShowProjects(false); }

    setShowResume(prev => !prev);
  };

  // open and close Skills
  const handleToggleSkills = () => {
    // close other pop ups
    if (showResume) { setShowResume(false); }
    if (showAboutMe) { setShowAboutMe(false); }
    if (showProjects) { setShowProjects(false); }

    setShowSkills(prev => !prev);
  };

  // open and close About Me
  const handleToggleAboutMe = () => {
    // close other pop ups
    if (showResume) { setShowResume(false); }
    if (showSkills) { setShowSkills(false); }
    if (showProjects) { setShowProjects(false); }

    setShowAboutMe(prev => !prev);
  };

  const handleToggleProjects = () => {
    // close other pop ups
    if (showResume) { setShowResume(false); }
    if (showSkills) { setShowSkills(false); }
    if (showAboutMe) { setShowAboutMe(false); }

    setShowProjects(prev => !prev);
  }
  
//////////////////////////////////////////////////////////////////////////

  return(
    <>
      {showIntro ? (
        <IntroScreen onStart={ handleStart } /> 
      ) : loading ? ( // loading screen if not intro
        <LoadingScreen />
      ) : ( // main screen if neither
        <MainScreen 
          onGoHome={ handleGoHome }

          onToggleResume={ handleToggleResume } 
          isResumeActive={ showResume }

          onToggleSkills={ handleToggleSkills }
          isSkillsActive={ showSkills } 

          onToggleAboutMe={ handleToggleAboutMe }
          isAboutMeActive={ showAboutMe }

          onToggleSocials={ handleToggleSocials }
          isSocialsActive={ showSocials }

          onToggleProjects={ handleToggleProjects }
          isProjectsActive={ showProjects }
        />
      )}
      
      {/*Good to keep onClose (even though not currently used) in case I plan on adding for example: 'press esc to close'*/}

      {/*Resume pop up*/}
      {showResume && (<Resume resumePDFPath="/ResumePlaceholder.pdf" />)}

      {/*Skills pop up*/}
      {showSkills && (<SkillsOverlay skills={ SkillsData } onClose={ handleToggleSkills } />)}

      {/*About Me pop up*/}
      {showAboutMe && (<AboutMeOverlay onClose={ handleToggleAboutMe } />)}

      {/*My Socials pop up*/}
      {showSocials && (<SocialsOverlay onClose={handleToggleSocials} />)}

      {/*My Projects pop up*/}
      {showProjects && (<ProjectsOverlay projects={ProjectsData} onClose={handleToggleProjects} />)}
    </>
  );
}

export default App