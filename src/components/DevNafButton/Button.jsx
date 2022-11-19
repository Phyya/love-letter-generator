import React from 'react';
import { ButtonWrapper } from './style';
import PropTypes from 'prop-types';

export const Button = ({ height, width, onClick, buttonText }) => {
  return (
    <ButtonWrapper
      height={height}
      width={width}
      onClick={onClick}
      data-testid="naf-btn-test"
    >
      {buttonText}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  buttonSize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
};
