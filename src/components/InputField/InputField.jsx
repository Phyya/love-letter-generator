import React from 'react';
import { InputRowStyled } from './style';
import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputField = ({
  name,
  labelText,
  type,
  placeholder,
  onBlur,
  value,
  handleChange,
  errors,
  touched,
  width,
  minimumCharacters,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <InputRowStyled width={width}>
      <label htmlFor={name}>{labelText}</label>
      {type !== 'password' && type !== 'textarea' && (
        <input
          className={`input ${errors && touched ? 'error' : ''}`}
          type={type}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          value={value}
          onChange={handleChange}
        />
      )}
      {type === 'password' && (
        <div className={'password__input'}>
          <input
            className={`input ${errors && touched ? 'error' : ''}`}
            type={showPassword ? 'text' : 'password'}
            name={name}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChange={handleChange}
          />
          <span onClick={handleTogglePasswordVisibility}>
            {showPassword ? (
              <AiOutlineEye size={21} />
            ) : (
              <AiOutlineEyeInvisible size={21} />
            )}
          </span>
        </div>
      )}
      {type === 'textarea' && (
        <>
          <textarea
            name={name}
            placeholder={placeholder}
            rows="8"
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            cols="50"
            className={`input ${errors && touched ? 'error' : ''}`}
          />
          <span>{minimumCharacters}</span>
        </>
      )}

      {errors && touched && <p>{errors}</p>}
    </InputRowStyled>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  width: PropTypes.string,
  minimumCharacters: PropTypes.string,
};

export default InputField;
