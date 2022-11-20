import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ name, width }) => {
  const style = {
    width: width,
  };

  return (
    <>
      <button
        style={style}
        className="p-[12px] hidden md:block align-center bg-main-1 outline-0 border-0 cursor-pointer text-white rounded-[8px]"
      >
        {name}
      </button>
      <button className="mobilebtn md:p-[12px] font-medium md:hidden text-[9px] w-[83px] align-center bg-main-1 outline-0 border-0 cursor-pointer text-white rounded-r-[8px] md:rounded-[8px] uppercase tracking-[0.1em]">
        {name}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
};
