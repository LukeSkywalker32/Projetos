import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;        

    }
    padding-left: 40px;
    margin-bottom: 40px;


    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
        opacity: 50%;
    }
    .react-multiple-carousel__arrow--right {
        /* left: 15px; */
        top: 10px;
        opacity: 50%;

    }



`

export const Title = styled.h2`
    font-size: 30px;
    color: #9758a6;
    font-weight: 700;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 30px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;        
        left: 50%;
        transform: translateX(-50%)

    }

`

export const ContainerItems = styled.div`
    background-image: url(${(props) => props.$imageUrl});
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;

    
`

export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 30px;
    border-radius: 20px;
    font-size: 20.5px;
    font-weight: 500;
    margin-top: 140px;
    text-decoration: none;

    &:hover {
        background-color: #9758ad;
        /* opacity: 0.8; */
        transition: 0.3s;
    }

`
