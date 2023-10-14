import React, {useState, useEffect} from "react";
import styled, { keyframes } from 'styled-components';

import SurveyCard from "./SurveyCard";

function SurveyCardList() {

    const [question, setQuestion] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://wiis.ddns.net/api/Question', { method: 'GET' });
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
        <>
            {question.map(q => <SurveyCard title={q.title} text={q.text} type="radio"/>)}
        </>
    );
}

export default SurveyCardList;