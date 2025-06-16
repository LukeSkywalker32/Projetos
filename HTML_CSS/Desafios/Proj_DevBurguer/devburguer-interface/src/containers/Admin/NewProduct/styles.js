import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components/Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  border-radius: 20px;
  background-color: #363636;
  padding: 32px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed #fff;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  color: #fff;
  margin: 20px 0;

  > svg {
    margin-right: 10px;
    color: #fff;
    width: 20px;
    height: 20px;
  }
  input {
    display: none;
  }
`;

export const Select = styled(ReactSelect)``;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const ErrorMessage = styled.span`
  color: #9e1c00;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  margin-top: 5px;
`;
export const ContainerCheckBox = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  margin-top: 10px;

  input {
    cursor: pointer;
  }
`;

