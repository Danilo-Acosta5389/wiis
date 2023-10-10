import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';

const SurveyContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  text-shadow: 1px 1px 5px black;

  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
  & h1 {
    position: relative;
  }
`;

const SurveyHeader = styled.h1`
  cursor: pointer;
  font-size: 2.3rem;
  z-index: 1;
`;

function Survey() {
    return(
        <SurveyContainer>
          <SurveyHeader>Take the Survey</SurveyHeader>
        </SurveyContainer>
    );
}

export default Survey;