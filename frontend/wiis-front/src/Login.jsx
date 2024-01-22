import React, {useEffect} from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

    & p {
        font-size: 1.3rem;
    }
`;

const Button = styled.div`
    
    font-size: 2rem;
    cursor: pointer;
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