import React, {useEffect} from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
height: 100vh;
width: 100vw;
`;

const ContactHeader = styled.h1`
cursor: pointer;
&.transform {
  color: blue;
}
`;


function Contact() {
  useEffect(() => {
    const contactSelect = document.querySelector('.contactHeader');
    
    let clicked = false;
    const handleClick = () => {
      if (clicked) {
        contactSelect.classList.remove('transform');
      } else {
        console.log('clicked');
        contactSelect.classList.add('transform');
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
      </ContactContainer>
  );
};

export default Contact