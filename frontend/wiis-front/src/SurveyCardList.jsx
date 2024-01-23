import React, {useState, useEffect} from "react";
import ProgressBar from './assets/ProgressBar.jsx';

import SurveyCard from "./SurveyCard";
import styled from "styled-components";


const Container = styled.div`
`;

const Button = styled.button`
    margin-top: 1rem;
    color: yellow;
    font-size: 2rem;
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;

     padding: 0;
     border: 0;
     background: none;
     box-shadow: none;

    &:hover {
      color: yellowgreen;
    }
`;

function SurveyCardList() {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.whatisspace.online/api/question', { method: 'GET' });
                const result = await response.json();
                console.log(result);
                setQuestion(result)
            } catch(error) {
                console.log('Errorrr: ', error)
            }
        };
        fetchData();
    }, []);

    const submit = (event) => {
        console.log("Submitted")
        event.preventDefault();
    }


    return(
        <Container>
            <form onSubmit={submit}>
            {question.length <= 1 ? 
            <p>Loading: <br/><ProgressBar ms={50} /><wbr/></p>  :
            question.map((q, index) =>
            index === 0 ? (
            <span>"survey": {"["}<SurveyCard title={q.title} text={q.text} decor=","/></span>
            ) : ( 
                index == question.length - 1 ? (
                <span><SurveyCard title={q.title} text={q.text}/>{"]"}</span>
                ) : (
                <span><SurveyCard title={q.title} text={q.text} decor=","/></span>
                ))
            
            )}
            <br/>
            <Button>[Submit]</Button>
            {/* <button type="submit">[Submit]</button> */}
            </form>
        </Container>
    );
}

export default SurveyCardList;

/*
margin-bottom: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-top: 0;

*/