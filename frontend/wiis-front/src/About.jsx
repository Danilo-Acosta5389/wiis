import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import Image from './Image';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  text-shadow: 1px 1px 5px black;

  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
  & h1 {
    position: relative;
  }
`;


const AboutHeader = styled.h1`
  cursor: pointer;
  transition-duration: 1000ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  z-index: 2;
  
  &.transform {
    transform: translateY(-5em);

}
`;



//const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur. Nam tristique arcu id pharetra posuere. Aenean sodales semper metus, ut ornare diam pharetra non.";
const aboutText = `Welcome to [What is Space], where art, technology, and the power of collective sound converge.

Join us in this immersive journey where technology amplifies human connection, and the collective debate is not just a discussion but an art form. Be part of [What is Space] – where art, technology, and human expression converge in a symphony of innovation. `;


const imageOfWomanLookingInMirror = "https://images.pexels.com/photos/8108591/pexels-photo-8108591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const AboutInfo = styled.p`
  display: flex;
  width: 80vw;
  height: fit-content;
  text-align: center;
  flex-wrap: wrap;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition-duration: 300ms;
  transition-property: opacity;
  transition-timing-function: linear;

  &.show {
    opacity: 1;
    border-radius: 6px;
    padding: 8px;
    background-color: #000000a9;
    transition-delay: 600ms;
    transition-duration: 500ms;
    

  }

`;



function About() {
  useEffect(() => {
    const aboutSelect = document.querySelector('.aboutHeader');
    const aboutTextShow = document.querySelector('.aboutText');
    
    let clicked = false;
    const handleClick = () => {
      if (clicked) {
        aboutSelect.classList.remove('transform');
        aboutTextShow.classList.remove('show');
      } else {
        console.log('clicked');
        aboutSelect.classList.add('transform');
        aboutTextShow.classList.add('show');
      }
      clicked = !clicked;
    };

    aboutSelect.addEventListener('click', handleClick);
    // clicked = true;
    return () => {
      aboutSelect.removeEventListener('click', handleClick);
    };
  }, []);

    return(
    <AboutContainer>
      <Image source={imageOfWomanLookingInMirror}/>
      <AboutHeader className="aboutHeader">About</AboutHeader>
      <AboutInfo className="aboutText">{aboutText}</AboutInfo>
    </AboutContainer>
    );
};





export default About;