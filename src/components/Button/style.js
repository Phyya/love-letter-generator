import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: #d2120f;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  border: none;
  &:hover {
    background: none;
    border: 1px solid #d2120f;
    color: #d2120f;
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
