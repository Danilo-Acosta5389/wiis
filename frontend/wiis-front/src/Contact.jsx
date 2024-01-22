import React, {useEffect} from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
`;

const ContactHeader = styled.p`
  margin-bottom: 0;
  padding-bottom: 5px;
  font-size: 1.5rem;
`;

const ContactInfo = styled.p`
  max-width: 100%;
  width: 80vw;
  margin-top: 0;
  padding-top: 0;
`;

const contactText = `Maecenas vitae consequat sapien. Integer tempor urna eu commodo consequat. 

Maecenas aliquet vestibulum ex, in tristique arcu accumsan ut. Sed eleifend scelerisque ullamcorper. 

Quisque lobortis metus turpis. Praesent vulputate nibh ut est varius consectetur.`;



function Contact() {

  return(
      <ContactContainer>
      <ContactHeader className='contactHeader'>[Contact]</ContactHeader>
      <ContactInfo className='contactText'>
        Email us: digitalMdnezz<wbr/>@wis.online
        <br></br>
        Find us: Maecenas aliquet 89, 112 91, Barcelona.
        <br></br>
      </ContactInfo>
      </ContactContainer>
  );
};

export default Contact