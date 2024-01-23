import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';

import Video from "./Video";

const SurveyContainer = styled.section`
`;

const SurveyHeader = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 0;
 padding-bottom: 5px;
  & .survey-link {
    color: inherit;
    text-decoration: none;
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