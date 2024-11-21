import styled from 'styled-components';

interface IBtnImg {
    isDisable: boolean
}

export const BtnImgWrapper = styled.button.attrs<IBtnImg>(
    (props) => ({
        type: "button",
        name: "edit",
        autoFocus: true,
        disabled: !props.isDisable
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
    top: 39%;
`;

export const WeaponsCardWraps = styled.div`
    margin: 10px 0;
`;

export const FielDescription = styled.div`
    margin-bottom: 10px;
    background-color: #daebf5;
    color: black;
    min-width: 450px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > p{
        margin: 0;
        padding: 2px 5px;
    }
`;

interface IBtnCardVisible {
    isVisible: boolean,
    isCursor: boolean
}

export const BtnCardIsVisible = styled.input.attrs<IBtnCardVisible>(
    (props) => ({
        type: 'checkbox',
        checked: props.isVisible,
    }))<IBtnCardVisible>`
    width: 20px;
    height: 20px;
    cursor: ${(props) => (props.isCursor ? "not-allowed" : "pointer")};
`;

export const CheckBox = styled.input.attrs({
    type: 'checkbox',
})`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

interface IBtnCRUD {
    isCursor: boolean,
}

export const BtnCRUD = styled.button<IBtnCRUD>`
    cursor: ${(props) => (props.isCursor ? "not-allowed" : "pointer")};
`;

export const CardInput = styled.input.attrs({
    type: 'text',
    required: true
})`
    width: 100px;
    text-align: center;
    font-size: 15px;
    margin: 2px 0;
    background-color: #f9ffc4;
`;

export const CardInputDescription = styled.input.attrs({
    type: 'text',
    required: true
})`
    width: 445px;
    height: 40px;
    text-align: center;
    margin-bottom: 10px;
    background-color: #f9ffc4;
    font-size: 15px;
`;

export const PostStatus = styled.p`
    position: absolute;
    bottom: 0;
`;