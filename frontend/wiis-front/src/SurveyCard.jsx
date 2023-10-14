import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';


const CardContainer = styled.div`
    /* border: 2px solid red; */
    background-color: gray;
    margin: 1rem;
    border-radius: 10px;
    text-shadow: 1px 1px 5px black;
    max-width: 300px;
    width: 100%;


    & h2 {
        text-align: center;
        padding: 8px;
    }

    & p {
        padding: 1rem;
        font-family: 'Courier New', Courier, monospace;
        
    }

    & p:not(.second) {
        border-bottom: 1px solid black;
        margin-top: 0;
    }

    & .second {
        font-size: 1.5em;
        font-weight: bolder;
        margin-bottom: 0;
        color: red;
    } 

    & .inputs {
        display: flex;
        flex-direction: column;
        align-items: start;


    }

    & input {
            width: 2rem;
            height: 1rem;
            margin-bottom: 10px;
        }
`;





function SurveyCard(props) {



    return(
        <>
            <CardContainer>
                <form>
                <h2>{props.title}</h2>
                <p className="second">*</p>
                <p>{props.text}</p>
                <div className="inputs">
                <input type={props.type}/>
                <input type={props.type}/>
                <input type={props.type}/>
                </div>
                </form>
            </CardContainer>
            
        </>
    );
}

export default SurveyCard;