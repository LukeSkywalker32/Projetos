import styled from 'styled-components'

import BannerHome from '../../assets/SectionTwo/banner-home.svg'
import Background from '../../assets/SectionOne/background_input.svg'

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 420px;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 50px;
    color: #f4f4f4;
    position: absolute;
    right: 10%;
    top: 15%;
  }
`

export const Container = styled.section`
    background: url('${Background}') lightgray 50% / cover no-repeat;
    height: 100%;

`

export const Content = styled.div`

  /* padding-bottom: 50px; */

`
