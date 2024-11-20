import styled from 'styled-components';

interface ILoginModel {
    isLogin: boolean
}

export const LoginWrapper = styled.div`
    margin: 0;
    padding: 5px;
    background-color: #74acc4;
    width: 480px;
    color: white;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    & label {
        margin: 5px;
        font-size: 18px;
        font-weight: 600;
        color: whitesmoke;
    }

    & input {
        background-color: #daebf5;
        width: 300px;
        font-weight: 600;
        font-size: inherit;
    }

    & button {
        margin: 5px 5px;
        padding: 5px;
        background-color: #688ca1;
        width: 75px;
        color: wheat;
        font-weight: 600;
        font-size: 16px;
    }
`;

export const LoginMessage = styled.p<ILoginModel>`
    margin: 0;
    padding: 5px;
    background-color: ${props => props.isLogin? "#29970d" : "red"};
    font-weight: 600;
    font-size: 18px;
    position: relative;
    left: -5px;
`;