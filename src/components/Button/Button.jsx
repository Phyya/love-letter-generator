import React from 'react';
import { ButtonWrapper } from './style';
import PropTypes from 'prop-types';

const Button = ({ height, width }) => {
  return (
    <ButtonWrapper height={height} width={width}>
      Button
    </ButtonWrapper>
  );
};

Button.propTypes = {
  buttonSize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
