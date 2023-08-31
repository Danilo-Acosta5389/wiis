import React from "react";
import styled from 'styled-components';


const AboutContainer = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
`;


const aboutHeader = "About";
const aboutInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur. Nam tristique arcu id pharetra posuere. Aenean sodales semper metus, ut ornare diam pharetra non.";


function About() {

    return(
    <AboutContainer>
      <h1>{aboutHeader}</h1>
      <p>{aboutInfo}</p>
    </AboutContainer>
    );
}

export default About;