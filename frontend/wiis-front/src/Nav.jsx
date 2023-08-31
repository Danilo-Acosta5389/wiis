import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* border: 3px solid red; */
height: 5em;
width: 100%;
z-index: 2;
position: fixed;
`;

function Nav() {
    return(
        <NavContainer>
            <input className="checkbox" type="checkbox"/>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
        </NavContainer>
    )
}

export default Nav