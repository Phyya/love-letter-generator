import styled from 'styled-components';

export const InputRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: ${(props) => (props.width ? props.width : '100%')};
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  p {
    color: #d2120f;
  }
  input {
    height: 40px;
  }
  .input {
    border: 1px solid #d0d5dd;
    border-radius: 5px;
    width: 100%;

    font-style: normal;
    padding-left: 10px;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    color: #667085;
    &.error {
      border: 1px solid #da3d3a;
      box-shadow: 0px 0px 0px 4px #fbe7e7;
      &:focus {
        border: 1px solid #da3d3a;
        box-shadow: 0px 0px 0px 4px #fbe7e7;
      }
    }
    &.success {
      border: 1px solid #21ac2f;
      &:focus {
        border: 1px solid #21ac2f;
      }
    }
    &:focus {
      outline: none;
      border-color: #475467;
    }
    &::placeholder {
      color: #667085;
    }
  }
  span {
    color: #667085;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .password__input {
    width: 100%;
    height: 100%;
    position: relative;
    span {
      position: absolute;
      right: 20px;
      top: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
`;
