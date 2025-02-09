import styled from 'styled-components';

export const WeaponsCardWraps = styled.div`
    margin: 5px;
    padding: 5px;
    background-color:rgb(189, 230, 44);
    border: 1px solid black;
    width: 400px;
`;

export const FielDescription = styled.div`
    margin-bottom: 10px;
    background-color: #daebf5;
    color: black;
    min-width: 350px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > p{
        margin: 0;
        padding: 2px 5px;
    }
`;

interface IBtnCRUD {
    isCursor: boolean,
}

export const BtnCRUD = styled.button<IBtnCRUD>`
    cursor: ${(props) => (props.isCursor ? "not-allowed" : "pointer")};
    margin: 5px 0;
    width: 75px;
`;