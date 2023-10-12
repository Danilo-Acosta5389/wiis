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

    & h3 {
        margin-bottom: 5px;
        font-size: larger;
    }

    & input {
        width: 10rem;
        height: 1.4rem;
    }

    & form > button {
        height: 2.7rem;
        width: 4rem;
        font-size: large;
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


function Login() {

    return (
        <LoginContainer>
            <h1>Login</h1>
            <form>
                <h3>UserName</h3>
                <input type="text"/>
                <h3>Passwd</h3>
                <input type='password'/>
                <br></br><br></br>
                <button>Enter</button>
            </form>
        </LoginContainer>
    );
}


export default Login;