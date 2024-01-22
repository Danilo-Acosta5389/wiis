import React, {useState, useEffect} from "react";

import SurveyCard from "./SurveyCard";
import styled from "styled-components";


const Container = styled.div`
    

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


    return(
        <Container>
            {question.map((q, index) =>
            index === 0 ? (
            <span>"survey": {"["}<SurveyCard title={q.title} text={q.text} decor="," type="radio"/></span>
            ) : ( 
                index == question.length - 1 ? (
                <span><SurveyCard title={q.title} text={q.text} type="radio"/>{"]"}</span>
                ) : (
                <span><SurveyCard title={q.title} text={q.text} decor="," type="radio"/></span>
                ))
            
            )}
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