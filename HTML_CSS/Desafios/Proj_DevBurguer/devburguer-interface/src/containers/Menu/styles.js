import styled from 'styled-components'
import BannerHamburguer from '../../assets/SectionMenu/banner-hamburguer.svg'
import Background from '../../assets/SectionOne/background_input.svg'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;  
    /* background-color: #f0f0f0; */

    background: url('${Background}');
    background-color: rgba(255, 255, 255, 0.4);
    background-blend-mode: lighten;

`
export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 415px;
    width: 100%;
    position: relative;


    background: url('${BannerHamburguer}') no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #1f1f1f;

    h1 {
          font-family: "Road Rage", sans-serif;
          color: #ffffff;
          font-size: 5em;
          line-height: 0.8em;
          position: absolute;

          right: 20%;
          top: 10%;

          span {
            display: block;
            color: #ffffff;
            font-size: 20px;
            
          }
    }


`
export const CategoryMenu = styled.div`

    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 30px auto;


`

export const CategoryBotton = styled(Link)`

    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '4px solid #9758a6'};

    
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;


`
