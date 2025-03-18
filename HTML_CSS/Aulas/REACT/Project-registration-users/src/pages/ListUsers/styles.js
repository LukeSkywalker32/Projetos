import styled from "styled-components";

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 400px;

  h4 {
    color: #fff;
    font-weight: 500;
    font-size: 24px;
  }

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const AvatarUser = styled.img`
  height: 80px;
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 40px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
