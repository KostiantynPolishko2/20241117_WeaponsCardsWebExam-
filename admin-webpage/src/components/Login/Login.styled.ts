import styled from 'styled-components';

interface ILoginModel {
    isLogin: boolean
}

export const LoginWrapper = styled.div`
    margin: 0;
    padding: 5px;
    background-color: #B1DDF0;
    width: fit-content;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const LoginMessage = styled.p<ILoginModel>`
    margin: 0;
    padding: 0px;
    color: ${props => props.isLogin? "green" : "red"};
    font-weight: 600;
`;