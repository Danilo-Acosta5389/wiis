import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
/* border: 3px solid red; */
height: fit-content;
width: 100%;
z-index: 2;
position: fixed;


//Hamburger meny goes here
`;
const Button = styled.p`
border: 2px solid gray;
border-radius: 4px;
padding: 10px;
font-size: 2em;
color: gray;
margin-top: 1rem;
margin-right: 1rem;
`;

function Nav() {
    return(
        <NavContainer>
            <Button>X</Button>
        </NavContainer>
    )
}

export default Nav