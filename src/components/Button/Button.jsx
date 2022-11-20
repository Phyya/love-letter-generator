import React from 'react';
import { ButtonWrapper } from './style';
import PropTypes from 'prop-types';

const Button = ({ height, width, name, onClick }) => {
  return (
    <ButtonWrapper height={height} width={width} onClick={onClick}>
      {name}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  buttonSize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
