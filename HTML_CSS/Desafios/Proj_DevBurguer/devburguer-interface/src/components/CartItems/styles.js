import styled from 'styled-components';


export const ProductImage = styled.img`
    width: 100px;
    height: 80px;
    border-radius: 16px;



`;
export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: #9758a6;
        border: none;
        transition: all 0.3s ease;

        &:hover {
            background-color: #6f357c;
            
        }
    }

`;
export const EmptyCart = styled.p`
    font-size: 16px;
    font-weight: bold;
`;


export const TotalPrice = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: bold;

`
export const TrashImage = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;


`