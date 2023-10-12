import React from 'react'
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

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
min-width: 100vw;
background-color: #00000088;

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
        <NavContainer className="navbar">
            <input className="checkbox" type="checkbox"/>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <p>
              {jsonStart}<br/>
                &nbsp;   <Link to='/login'>Login,</Link><br/>
                &nbsp;   <Link to='/'>Menu,</Link><br/>
                &nbsp;   <Link to='/hello'>Hello,</Link><br/>
                &nbsp;   <Link to='/Survey'>Survey</Link><br/>
              {jsonEnd}
              </p>
          </ul>
        </NavContainer>
        </>
    )
}

export default Nav