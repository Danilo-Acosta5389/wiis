import React, {useEffect} from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 1;

    align-items: center;
    justify-content: center;

`;


export function Login() {

    return (
        <LoginContainer>
            <h1>Login Page</h1>
        </LoginContainer>
    );
}