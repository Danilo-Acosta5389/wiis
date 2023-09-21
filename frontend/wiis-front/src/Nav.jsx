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
z-index: 3;
position: fixed;
`;

const ItemsContainer = styled.div`
    /* width: 100vw;
    height: 100vh;
    opacity: 50%; */
    background-color: red;
`;

const jsonStart = "{";
const jsonEnd = "}";

function Nav() {
    return(
        <>
        <NavContainer>
            <input className="checkbox" type="checkbox"/>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <p>
              {jsonStart}<br/>
                &nbsp;   <a href=''>Login,</a><br/>
                &nbsp;   <a href=''>Menu,</a><br/>
                &nbsp;   <a href=''>About,</a><br/>
                &nbsp;   <a href=''>Contact</a><br/>
              {jsonEnd}
              </p>
          </ul>
        </NavContainer>
        </>
    )
}

export default Nav