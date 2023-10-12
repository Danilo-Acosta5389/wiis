import React, {useEffect} from "react";
import styled, { keyframes } from 'styled-components';


const CardContainer = styled.div`
    /* border: 2px solid red; */
    background-color: gray;
    margin: 1rem;
    border-radius: 10px;
    text-shadow: 1px 1px 5px black;

    max-width: 300px;

    & h3 {
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



function SurveyCard(props) {
    return(
        <CardContainer>
            <h3>{props.title}</h3>
        </CardContainer>
    );
}

export default SurveyCard;