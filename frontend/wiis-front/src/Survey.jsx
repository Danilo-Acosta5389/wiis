import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';

import SurveyCardList from "./SurveyCardList";

const SurveyContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    font-family: Anton;
    margin-top: 5rem;
`;

const HeaderCard = styled.div`
    border: 2px solid red;
    
    background-color: gray;
    margin: 1rem;
    border-radius: 10px;
    text-shadow: 1px 1px 5px black;

    max-width: 300px;

    & h1 {
        text-align: center;
    }

    & p {
        padding: 1rem;
        font-family: 'Courier New', Courier, monospace;
        
    }

    & p:not(.second) {
        border-bottom: 1px solid black;
    }

    & .second {
        font-size: large;
        font-weight: bolder;
        
        color: red;
    } 
`;


function Survey() {
    return(
        <SurveyContainer>
            <HeaderCard>
                <h1>We will turn your answers into art</h1>
                <p>All your answers will be totally anonymous. Our project merges art with research and technology so your answers might be used. </p>
                <p className="second">* is mandatory </p>
            </HeaderCard>
            <SurveyCardList />

        </SurveyContainer>
    )
}

export default Survey;