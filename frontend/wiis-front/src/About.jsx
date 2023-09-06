import React, {useEffect} from "react";
import styled from 'styled-components';


const AboutContainer = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
`;


const AboutHeader = styled.h1`
cursor: pointer;
&.transform {
  color: blue;
}
`;

const aboutInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur. Nam tristique arcu id pharetra posuere. Aenean sodales semper metus, ut ornare diam pharetra non.";




function About() {
  useEffect(() => {
    const aboutSelect = document.querySelector('.aboutHeader');
    
    let clicked = false;
    const handleClick = () => {
      if (clicked) {
        aboutSelect.classList.remove('transform');
      } else {
        console.log('clicked');
        aboutSelect.classList.add('transform');
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
      {/* <p>{aboutInfo}</p> */}
    </AboutContainer>
    );
};





export default About;