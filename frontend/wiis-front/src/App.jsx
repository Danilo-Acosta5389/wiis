import React from 'react'
import styled from 'styled-components';

import Title from './Title.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Nav from './Nav.jsx';

// const bodyContainer = styled.section`
//   display: flex;
//   flex-direction: column;

// `;

const HamburgerContainer = styled.div`
align-items: center;
z-index: 1;
margin: 5em;
`;

function App() {

  return (
    <>
      <Nav />
      <Title />
      <About />
      <Contact />
    </>
  )
}

export default App
