import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
`;




const wisTitle = "{What is Space}";

function Title() {
    return(
    <TitleContainer>
      <h1>{wisTitle}</h1>
    </TitleContainer>
    );
}

export default Title;