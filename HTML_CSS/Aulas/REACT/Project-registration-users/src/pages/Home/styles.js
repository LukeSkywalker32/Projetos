import styled from "styled-components";

export const Container = styled.div`
  background: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;
export const TopBackgound = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  max-width: 800px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;
export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #d2dae2;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;
export const InputLabel = styled.label`
  color: #fff;
  font-size: 16px;
  font-weight: 600;

  span {
    color: #ef4f45;
    font-weight: 700;
  }
`;
export const Button = styled.button`
  border: none;
  background: linear-gradient(180deg, #fe7e5d 0%, #7f3841 100%);
  color: #fff;
  font-size: 16px;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
