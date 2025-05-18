import styled from 'styled-components'

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;       
    }
    overflow-x: hidden; 


    .react-multi-carousel-list {
        overflow: visible; //oculta o scroll horizontal
    }

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


    padding-left: 40px;
    padding-bottom: 10%;
`

export const Title = styled.h2`
    font-size: 30px;
    color: #61A120;
    font-weight: 700;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 60px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        

        width: 56px;
        height: 4px;
        background-color: #61A120;        
        left: 50%;
        transform: translateX(-50%)

    }

`
