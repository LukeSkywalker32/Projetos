import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid #ffffff"};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)"
      : "transparent"};
  color: #ffffff;
  font-size: 16px;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 20px;

  &:hover {
    opacity: ${(props) => (props.theme === "primary" ? "0.6" : "0.8")};
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;

    background-color:${props => props.theme !== 'primary' ? "#ffffff"  :"linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%)"};
    color: ${props => props.theme !== 'primary' ? "#000000" : "#ffffff"};
  }

  &:active {
    opacity: 0.8;
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
    
  }
`;
