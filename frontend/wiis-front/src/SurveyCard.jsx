import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';


const CardContainer = styled.div`
    margin: 1rem;
    max-width: 300px;
    width: 100%;
    

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
                    
                <p>{"{"}<br/>"{props.title}" : <span><br/>" <span className="second">* </span><wbr/>{props.text}"</span></p>
                <div className="inputs">
                <input type={props.type}/>
                <input type={props.type}/>
                <input type={props.type}/>
                {"}"}
                </div>
                </form>
            </CardContainer>
            
        </>
    );
}

export default SurveyCard;