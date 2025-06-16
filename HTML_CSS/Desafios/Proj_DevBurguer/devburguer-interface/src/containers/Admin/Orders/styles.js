import styled from "styled-components";
import Select from "react-select";

export const SelectStatus = styled(Select)`
  width: 250px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;

export const FilterOptions = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-weight: 600;
  color: ${(props) => (props.$isActiveStatus ? "#9758a6" : "#625d5e")};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? "2px solid #9758a6" : "none"};
  line-height: 20px;
  padding-bottom: 10px;
`;
