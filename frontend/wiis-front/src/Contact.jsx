import React, {useEffect} from 'react';
import styled from 'styled-components';
import Video from './Video';
import Image from './Image';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px 5px black;
  height: 100vh;
  width: 100vw;
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
  & h1 {
    position: relative;
  }
`;

const ContactHeader = styled.h1`
  cursor: pointer;
  transition-duration: 800ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  z-index: 1;
  
  &.transform {
    transform: translateY(-4em);

}
`;

const ContactInfo = styled.p`
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
    border-radius: 6px;
    padding: 8px;
    background-color: #000000a9;
    transition-delay: 500ms;
    transition-duration: 500ms;

  }

`;

const contactText = `Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. 

Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. 

Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur.`;

const creepyDude = "https://images.unsplash.com/photo-1559581958-df379578606a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=702&q=80";
const imageOfLonelyRoad = "https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg";



function Contact() {
  useEffect(() => {
    const contactSelect = document.querySelector('.contactHeader');
    const contactTextShow = document.querySelector('.contactText');
    
    let clicked = false;
    const handleClick = () => {
      if (clicked) {
        contactSelect.classList.remove('transform');
        contactTextShow.classList.remove('show');
      } else {
        console.log('clicked');
        contactSelect.classList.add('transform');
        contactTextShow.classList.add('show');
      }
      clicked = !clicked;
    };

      contactSelect.addEventListener('click', handleClick);
      // clicked = true;
      return () => {
        contactSelect.removeEventListener('click', handleClick);
      };
  }, []);

  return(
      <ContactContainer>
        <Image source={creepyDude}></Image>
      <ContactHeader className='contactHeader'>Contact</ContactHeader>
      <ContactInfo className='contactText'>{contactText}</ContactInfo>
      </ContactContainer>
  );
};

export default Contact