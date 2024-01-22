import React from 'react'
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

import Title from './Title.jsx'
import Survey1 from './Survey1.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx'


const MainContainer = styled.div`


`;

function Home() {

  return (
    <MainContainer>
      <Title/>
      <About />
      <Survey1 />
      <Contact />
    </MainContainer>
  )
}

export default Home;
