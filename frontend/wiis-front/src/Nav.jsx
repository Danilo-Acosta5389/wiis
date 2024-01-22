import React from 'react'
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

const NavContainer = styled.div`
font-size: 1.5rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
color: #01a901;
text-decoration: none;

 & .home-link {
  text-decoration: none;
  color: #01a901;
  
 }
 & :hover {
    color: yellowgreen;
  }
`;

function Nav() {
    return(
        <>
        <NavContainer>
          <span><Link className='home-link' to='/'>root@whatisspace:~</Link><wbr />/<Link className="link" to='/'>Menu</Link>/<Link className="link" to='/login'>Login</Link>/<Link className="link" to='/Survey'>Survey</Link></span> 
        </NavContainer>
        </>
    )
}

export default Nav