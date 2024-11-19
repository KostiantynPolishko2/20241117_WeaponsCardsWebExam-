import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
    display: flex;
    flex-direction: row;
    width: 490px;
    height: 30px;
    margin-top: 10px;

    & > input{
        width: 90%;
        background-color: #daebf5;
        font-size: 18px;
        border-radius: 6px 0 0 6px;
        text-align: center;
    }
    & > button {
        width: 30%;
        background-color: #48606e;
        color: white;
        cursor: pointer;
        border-radius: 0 6px 6px 0;
    }
    & i {
        font-size: 20px;
    }
`;