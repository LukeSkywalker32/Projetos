import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;

  background: #9758a6;
  border-radius: 5px;
  border: none;

  font-family: "Road Rage", sans-serif;
  font-size: 30px;
  letter-spacing: 0%;
  color: #ffffff;

  &:hover {
    background: #6f357c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='4' stroke-dasharray='13' stroke-dashoffset='65' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
