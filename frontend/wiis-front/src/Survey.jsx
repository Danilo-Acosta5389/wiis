import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';

import Video from "./Video";

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

const matrixVid = "https://player.vimeo.com/video/368789132?title=0&portrait=0&byline=0&autoplay=1&muted=true";
const testVid = "https://player.vimeo.com/external/314181352.hd.mp4?s=03e7a8ddba6566f8a62cd7f8a8da7d79461c3dbd&profile_id=172&oauth2_token_id=57447761";

function Survey() {
    return(
        <SurveyContainer>
          <Video video={testVid}/>
          <SurveyHeader><a href="https://docs.google.com/forms/d/e/1FAIpQLSdMp-nVHdB-_KylXQTQMuioF9A5Ch5sG-RnwAXZpIqgKJj8rg/viewform?usp=sf_link" target="_blank">Take the Survey</a></SurveyHeader>
        </SurveyContainer>
    );
}

export default Survey;