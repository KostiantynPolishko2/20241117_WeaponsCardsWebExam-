import { buffer } from 'stream/consumers';
import styled from 'styled-components';

interface IBtnShowHide {
    isDisable: boolean
}

export const WeaponsItemsTabelWrapper = styled.div`
    width: 740px;
    position: absolute;
    top: 0;
    left: 550px;
    margin: 7px;
`;

export const BtnShowHide = styled.button.attrs<IBtnShowHide>(
    (props) => ({
        type: "button",
        name: "edit",
        autoFocus: true,
        disabled: props.isDisable
    })
)<IBtnShowHide>`
    cursor: ${(props) => (props.isDisable ? "not-allowed" : "pointer")};
    background-color: ${(props) => (props.isDisable ? "grey" : "none")};

    &:hover{
        background-color: ${(props) => (props.isDisable ? "black" : "none")};
        box-shadow: ${(props) => props.isDisable ? "0px 0px 2px 2px whitesmoke" : "none"};
    }
`;