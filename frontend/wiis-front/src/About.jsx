import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import Image from './Image';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 700px;
  
`;

const AboutHeader = styled.p`
 font-size: 1.5rem;
 margin-bottom: 0;
 padding-bottom: 5px;
`;


//const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur. Nam tristique arcu id pharetra posuere. Aenean sodales semper metus, ut ornare diam pharetra non.";
const aboutText = `Welcome to [What is Space], where art, technology, and the power of collective sound converge.
Join us in this immersive journey where technology amplifies human connection, and the collective debate is not just a discussion but an art form. Be part of [What is Space] – where art, technology, and human expression converge in a symphony of innovation. `;

function AboutText() {
  return(
    <span>Welcome to [What is Space], where art, technology, and the power of collective sound converge.

Join us in this immersive journey where technology amplifies human connection, and the collective debate is not just a discussion but an art form. Be part of [What is Space] – where art, technology, and human expression converge in a symphony of innovation.</span>
  )
}


function About() {
    return(
    <AboutContainer>
      <AboutHeader>[About]</AboutHeader>
      <AboutText />
    </AboutContainer>
    );
};





export default About;