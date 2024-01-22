import React, {useState, useEffect} from "react";

import SurveyCard from "./SurveyCard";

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
        <>
            {question.map((q, index) =>
            index === 0 ? (
            <span>"survey": {"["}<SurveyCard title={q.title} text={q.text} type="radio"/>,</span>
            ) : ( 
                index == question.length - 1 ? (
                <span><SurveyCard title={q.title} text={q.text} type="radio"/>{"]"}</span>
                ) : (
                <span><SurveyCard title={q.title} text={q.text} type="radio"/>,</span>
                ))
            
            )}
        </>
    );
}

export default SurveyCardList;