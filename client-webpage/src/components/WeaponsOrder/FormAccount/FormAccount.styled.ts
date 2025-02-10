import styled from "styled-components";
import { ButtonWrapper } from "../../styles/styles.styled";

interface IFormAccount {
    isDisable: boolean,
}

export const FormAccountWrapper = styled.form<IFormAccount>`
    background-color:rgb(204, 192, 27);
    color: black;
    margin: 5px;
    padding: 5px;
    height: 100px;
    /* width: 711px; */
    min-height: 80px;

    & input {
        background-color: ${props => props.isDisable? '#9fa888' : 'whitesmoke'};
        padding: 2px;
        margin: 2px 5px;
        width: 450px;
        min-width: fit-content;
        height: 25px;
        position: relative;
        /* right: 100px; */
        font-size: 16px;
    }

    & input, button {
        cursor: pointer;
    }

    & label {
        cursor: context-menu;
    }

    & > button {
        position: relative;
        /* left: 300px; */
        font-size: 14px;
        padding: 3px 10px;
        font-weight: 600;
    }
`

export const ButtonAuth = styled(ButtonWrapper).attrs({
    name: 'auth',
    type: 'button',
    autoFocus: false,
})<IFormAccount>`
    background-color: ${props => !props.isDisable? "rgb(19, 204, 28)" : "rgb(57, 114, 59)"};
`