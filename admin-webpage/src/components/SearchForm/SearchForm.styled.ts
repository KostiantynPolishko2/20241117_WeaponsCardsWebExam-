import styled from 'styled-components';

interface ISearchForm {
    isLogin: boolean
}

export const SearchFormWrapper = styled.form<ISearchForm>`
    display: flex;
    flex-direction: row;
    width: 490px;
    height: 30px;
    margin-top: 10px;

    & > input{
        width: 90%;
        background-color: ${props => props.isLogin ? '#a5ada0' : '#daebf5'};
        font-size: 18px;
        border-radius: 6px 0 0 6px;
        text-align: center;
        cursor: ${props => props.isLogin ? 'not-allowed' : 'pointer'};
    }
    & > button {
        width: 30%;
        background-color: ${props => props.isLogin ? '#747a6f' : '#48606e'};
        color: white;
        cursor: ${props => props.isLogin ? 'not-allowed' : 'pointer'};
        border-radius: 0 6px 6px 0;
    }
    & i {
        font-size: 20px;
    }
`;