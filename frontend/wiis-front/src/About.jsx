import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';


const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  & h1 {
    position: relative;
  }
`;


const AboutHeader = styled.h1`
  cursor: pointer;
  transition-duration: 1000ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  z-index: 1;
  
  &.transform {
    transform: translateY(-6em);

}
`;



const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur. Nam tristique arcu id pharetra posuere. Aenean sodales semper metus, ut ornare diam pharetra non.";


const AboutInfo = styled.p`
  display: flex;
  width: 80vw;
  height: fit-content;
  text-align: center;
  flex-wrap: wrap;
  position: absolute;
  z-index: 0;
  opacity: 0;
  transition-duration: 300ms;
  transition-property: opacity;
  transition-timing-function: linear;

  &.show {
    opacity: 1;
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
      <AboutHeader className="aboutHeader">About</AboutHeader>
      <AboutInfo className="aboutText">{aboutText}</AboutInfo>
    </AboutContainer>
    );
};





export default About;