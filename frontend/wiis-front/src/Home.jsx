import React, { useState } from 'react'
import styled from 'styled-components';


import Title from './Title.jsx'
import Survey1 from './Survey.jsx';
import About from './About.jsx'
import Contact from './Contact.jsx'


const MainContainer = styled.div`


`;

const inputCont = styled.div`
  display: flex;
  flex-direction: row-reverse;

`;


function Home() {
  const [number, setNumber] = useState(1);

  function handleSubmit() {
    setNumber(rangeId)
    console.log(number);
  }

  return (
    <MainContainer>
      <Title/>
      <About />
      <Survey1 />
      <Contact />
      <form onSubmit={() => handleSubmit()}>
        <inputCont>
       <input id='rangeId'className='customRange' type="range" min={1} max={5}/>
       <p>value: <output id="rangeId"></output></p>
      </inputCont>
      <button type="submit">Go</button>
      </form>
      
    </MainContainer>
  )
}

export default Home;
