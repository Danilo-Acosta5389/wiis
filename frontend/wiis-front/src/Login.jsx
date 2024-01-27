import React, {useEffect} from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    font-size: large;
    display: flex;
    flex-direction: column;

    & p {
        font-size: 1.5rem;
        margin-bottom: 2px;
    }
`;

const Button = styled.div`
    
    font-size: 2rem;
    cursor: pointer;
    color: yellow;
    &:hover {
    color: yellowgreen;
}
`;



function Login() {

    return (
        <LoginContainer>
            <p>[Login]</p>
            <form>
                <p>UserName</p>
                <input type="text"/>
                <p>Passwd</p>
                <input type='password'/>
                <br></br><br></br>
                <Button className='button'>[Enter]</Button>
            </form>
        </LoginContainer>
    );
}


export default Login;