import styled from 'styled-components';

interface IBtnImg {
    isDisable: boolean
}

export const BtnImgWrapper = styled.button.attrs<IBtnImg>(
    (props) => ({
        type: "button",
        name: "edit",
        autoFocus: true,
        disabled: props.isDisable
    })
)<IBtnImg>`
    margin: 0;
    padding: 0;
    background: none;
    outline-style: none;
    border: 0;
    cursor: ${(props) => (props.isDisable ? "not-allowed" : "pointer")};

    &:hover{
        box-shadow: ${(props) => props.isDisable ? "none" : "0px 0px 2px 2px whitesmoke"}; 
    }
    &:active{
        box-shadow: ${(props) => props.isDisable ? "none" : "0px 0px 2px 2px greenyellow"};
    }
`;

export const BlockLoad = styled.div<IBtnImg>`
    display: ${props => props.isDisable ? "none" : "block"};
    background-color: burlywood;
    color: black;
    font-weight: 600;
    width: fit-content;
    padding: 5px;
    border: solid 1px black;
    position: absolute;
    transform: translate(10%, 100%);
    top: 57%;
`;