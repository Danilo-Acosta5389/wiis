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
    justify-content: flex-start;

    & h1 {
        padding-top: 7rem;
    }

    & h4 {
        margin-bottom: 5px;
    }

    & form > button {
        height: 2rem;
        width: 3rem;
    }
/* 
    & form {
        display: flex;
        flex-direction: column;

        button {
            height: 2rem;
            width: 3rem;
        }
    } */



`;


export function Login() {

    return (
        <LoginContainer>
            <h1>Login</h1>
            <form>
                <h4>UserName</h4>
                <input type="text"/>
                <h4>Passwd</h4>
                <input type='password'/>
                <br></br><br></br>
                <button>Enter</button>
            </form>
        </LoginContainer>
    );
}