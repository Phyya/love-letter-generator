import React from 'react';
import { ModalContainer } from './modalcontainer';
import PropTypes from 'prop-types';

export const ModalContent = ({ open, isOpen }) => {
  return (
    <div className="modalcontentbg absolute top-0 left-0 right-0 bottom-0 bg-[#FBF9F9] flex justify-center items-start md:items-center font-avenir">
      <ModalContainer open={open} isOpen={isOpen} />
    </div>
  );
};

ModalContent.propTypes = {
  isOpen: PropTypes.func,
  open: PropTypes.bool,
};
