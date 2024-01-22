import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';

import SurveyCardList from "./SurveyCardList";

const SurveyContainer = styled.div`
`;

const HeaderCard = styled.div`
    font-size: large;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 700px;
 & .second {
    color: red;
 }
`;

const Header = styled.p`
    font-size: 1.5rem;
`;


function Survey() {
    return(
        <SurveyContainer>
            <Header>We will turn your <wbr/>answers into art</Header>
            <HeaderCard>
                <p>All your answers will be totally anonymous. Our project merges art with research and technology so your answers might be used. </p>
                <p className="second">* is mandatory </p>
            </HeaderCard>
            <SurveyCardList />

        </SurveyContainer>
    )
}

export default Survey;