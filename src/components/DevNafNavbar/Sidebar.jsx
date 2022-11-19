import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from '../../styles/style.module.css';

export const Sidebar = ({ open, handleClose, navbarLinks }) => {
  return (
    <div className={`${open ? classes.drawer_in_view : classes.drawer_close}`}>
      <div
        className={classes.naf_sidebar_overlay}
        onClick={() => handleClose()}
      ></div>
      <div className={classes.sidebar_links}>
        {navbarLinks.map((link) => (
          <NavLink to={link.to} onClick={handleClose} key={link.name}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  open: PropTypes.bool,
  navbarLinks: PropTypes.array,
  handleClose: PropTypes.func,
};
