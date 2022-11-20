import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export const NewsLetterModal = ({ children, open }) => {
  if (!open) return null;

  return createPortal(
    <div className="modal fixed">{children}</div>,
    document.getElementById('newlettermodal'),
  );
};

NewsLetterModal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};
