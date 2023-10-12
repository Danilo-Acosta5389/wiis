import React, {useEffect} from 'react';
import styled from 'styled-components';


const HelloContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 1;

    align-items: center;
    justify-content: center;

`;

console.log("Hello friend. Join us.");

function Hello() {
    
    return(
        <HelloContainer>
        <h1>Hello Friend</h1>
        </HelloContainer>
    );
}

export default Hello;