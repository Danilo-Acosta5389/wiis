import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const SurveyContainer = styled.section`
`;

const SurveyHeader = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 0;
  padding-bottom: 5px;
   & .survey-link {
     color: yellow;
     text-decoration: none;

   }
   :hover {
   color: yellowgreen;
   }
`;
function Survey() {
    return(
        <SurveyContainer>
          <span><SurveyHeader className="button"><Link className="survey-link" to='/Survey'>[Klick me]</Link></SurveyHeader>
          To take our survey</span>
        </SurveyContainer>
    );
}

export default Survey;