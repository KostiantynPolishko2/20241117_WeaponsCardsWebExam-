import styled from 'styled-components';

interface Photo {
    _path?: string,  
}

export const PhotoImg = styled.img<Photo>`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

interface DisplayContent {
    _direction?: string;
    _justify?: string;
    _align?: string;
}

export const Display = styled.div<DisplayContent>`
    display: flex;
    flex-direction: ${props => props._direction || 'row'};
    justify-content: ${props => props._justify || 'space-between' };
    align-items: ${props => props._align || 'center'};
`;

interface IButtonWrapper {
    color?: string
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
    background-color: ${props => props.color || 'grey'};
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    color: black;
    cursor: pointer;
`