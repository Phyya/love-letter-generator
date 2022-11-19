import React from 'react';
import { ButtonWrapper } from './style';
import PropTypes from 'prop-types';

const Button = ({ height, width, name }) => {
  return (
    <ButtonWrapper height={height} width={width}>
      {name}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  buttonSize: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
};

export default Button;
