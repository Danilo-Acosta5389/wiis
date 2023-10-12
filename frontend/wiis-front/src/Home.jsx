import React from 'react'
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

import Hello from './Hello';
import Title from './Title.jsx'
import Survey from './Survey.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx'
import Nav from './Nav.jsx';



// const bodyContainer = styled.section`
//   display: flex;
//   flex-direction: column;

// `;

// const HamburgerContainer = styled.div`
// align-items: center;
// z-index: 1;
// margin: 5em;
// `;

const VideoBg = styled.video`
  height: 100vh;
  z-index: 0;
  position: fixed;
`;
function Home() {

  return (
    <>
      {/* <VideoBg className="video" muted={true} loop={true} autoPlay>
        <source src="https://player.vimeo.com/external/314181352.hd.mp4?s=03e7a8ddba6566f8a62cd7f8a8da7d79461c3dbd&profile_id=172&oauth2_token_id=57447761" type="video/mp4"/>Your web-browser does not support video background
      </VideoBg> */}
      <Title />
      <Survey />
      <About />
      <Contact />
    </>
  )
}

export default Home;
