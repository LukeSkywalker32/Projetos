import styled from 'styled-components'
import BackgroundLogo from '../../assets/SectionOne/background_logo.svg'
import BackgroundInput from '../../assets/SectionOne/background_input.svg'

import { Link as ReactLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const LeftContainer = styled.div`
  background: url("${BackgroundLogo}");
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;


`

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url("${BackgroundInput}");
  background-color: #252525;
  

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a {
      color: #fff;
      text-decoration: underline;
    }
  }
`
export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #9758A6;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  max-height: 700px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 5px;
    padding: 0 15px;
  }
  label {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
  p {
    color: #cf3057;
    font-size: 12px;
    height: 14px;

  }
`
export const Link = styled(ReactLink)`
text-decoration: none;
color: #fff;
`
