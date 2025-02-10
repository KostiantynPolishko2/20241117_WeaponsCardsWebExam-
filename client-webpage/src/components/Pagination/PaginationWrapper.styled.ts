import styled from "styled-components";

export const PaginationWrapper = styled.div`
    background-color:rgb(182, 209, 108);
    margin: 5px;
    padding: 5px;
    color: black;
`

export const BtnSquare = styled.div`
    background-color: #63583a;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-weight: 600;
    color: whitesmoke;
    font-size: 30px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > p{
        line-height: 30px;
    }

    &:hover{
        box-shadow: 0px 0px 10px white;
    }

    &:active{
        background-color: #e8e535;
        color: black;
        border: 1px solid #969406;
    }
`