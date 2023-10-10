import React, {useEffect} from 'react';
import styled from 'styled-components';

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
    transition-delay: 500ms;
    transition-duration: 500ms;

  }

`;

const contactText = `Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. 

Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. 

Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur.`;


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
      <ContactHeader className='contactHeader'>Contact</ContactHeader>
      <ContactInfo className='contactText'>{contactText}</ContactInfo>
      </ContactContainer>
  );
};

export default Contact