import styled from 'styled-components';

export const WeaponsCardWraps = styled.div`
    margin: 5px;
    padding: 5px;
    background-color:rgb(82, 146, 22);
    border: 1px solid black;
    width: 350px;
    height: 210px;
`;

export const FielDescription = styled.div`
    /* margin-bottom: 10px; */
    background-color:rgb(196, 131, 56);
    color: black;
    width: 340px;
    min-height: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > p{
        margin: 0;
        padding: 2px 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
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