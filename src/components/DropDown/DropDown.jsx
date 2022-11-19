import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from '../../styles/style.module.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const DropDown = ({ value, errors, selectText, selectData, handleChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={classes.select_component}>
      {showOptions && (
        <div
          className={classes.overlay}
          onClick={() => setShowOptions(false)}
        />
      )}
      <div
        className={`${classes.select_text_comp} ${
          errors && classes.naf_drop_error
        }`}
        onClick={() => setShowOptions(true)}
      >
        {!value ? selectText : value}
        <MdOutlineKeyboardArrowDown className={classes.naf_dropdown_svg} />
      </div>

      {showOptions && (
        <div className={classes.options_component}>
          {selectData.map((option) => (
            <div
              key={option}
              className={classes.options_option}
              onClick={() => {
                handleChange(option);
                setShowOptions(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  errors: PropTypes.bool,
  value: PropTypes.string,
  selectText: PropTypes.string,
  selectData: PropTypes.array,
  handleChange: PropTypes.func,
};
export default DropDown;
