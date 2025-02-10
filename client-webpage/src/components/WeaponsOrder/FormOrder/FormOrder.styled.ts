import styled from "styled-components";

export const FormOrderWraps = styled.form`
    background-color:rgb(205, 226, 126);
    color: black;
    margin: 5px;
    padding: 3px;
    width: 200px;

    & > input {
        background-color: #8c855f;
        width: 100px;
        margin: 3px 0;
        padding: 3px;
        position: relative;
        left: 17px; 
    }

    & > label, input, button {
        cursor: pointer;
    }
`