import React from 'react';
import styled from 'styled-components';



const TitleContainer = styled.section`
font-size: 2rem;
margin-bottom: 0;
padding-bottom: 0;
`;

const wisTitle = "[What is Space]";

function Title() {
    return(
    <TitleContainer>
      <p>{wisTitle}</p>
    </TitleContainer>
    );
}

export default Title;

