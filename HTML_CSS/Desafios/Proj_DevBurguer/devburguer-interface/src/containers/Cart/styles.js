import styled from 'styled-components'
import Texture from '../../assets/SectionCart/background_Cart.svg'
import Background from '../../assets/SectionCart/background.svg'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("${Background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: lightgray;
`

export const Banner = styled.div`
    background: url("${Texture}");
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;

`

export const Title = styled.div`
color: #61A120;
text-align: center;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: normal;
padding-bottom: 12px;
position: relative;

&::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: "";
    height: 4px;
    width: 56px;
    background-color: #61A120;
    
}

`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px;

`
