import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';


const CardContainer = styled.div`
    margin-left: 1rem;
    max-width: 500px;
    width: 100%;

    @media (max-width: 400px) {
        max-width: 300px;
    }

    & p {
        margin-bottom: 2px;
        margin-top: 2px;
        padding-bottom: 2px;
        padding-top: 2px;
    }
    & .second {
        font-size: 1.5em;
        font-weight: bolder;
        
        color: red;
    } 
`;





function SurveyCard(props) {



    return(
        <>
            <CardContainer>
                <label>{"{"}<br/>"{props.title}" : <span><br/>" <span className="second">* </span><wbr/>{props.text}"</span><br/>{"}"}{props.decor}</label>
            </CardContainer>
            
        </>
    );
}

export default SurveyCard;