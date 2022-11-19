import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import classes from '../../styles/style.module.css';
import logo from '../../assets/logos_vivaldi-icon.png';
import avatar from '../../assets/Rectangle371.jpg';
import { Button } from '../DevNafButton/Button';
import { Sidebar } from './Sidebar';

const navLinks = [
  {
    name: 'Generator',
    to: '/',
  },
  {
    name: 'Blog',
    to: '/blog',
  },
  {
    name: 'About Us',
    to: '/about',
  },
  {
    name: 'Contact Us',
    to: '/contactus',
  },
];

export const Navbar = ({ isLogged }) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className={classes.dev_naf_navbar}>
      <div className={classes.dev_naf_navbar_logo_container}>
        <img src={logo} alt="logo" />
        <p>LoveMe</p>
      </div>
      <div className={classes.dev_naf_navright}>
        <div className={classes.dev_naf_navlinks}>
          {navLinks.map((nav) => (
            <NavLink
              key={nav.name}
              to={nav.to}
              className={(nav) =>
                nav.isActive ? classes.naf_navlink_active : undefined
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        {!isLogged ? (
          <Link to="/signin">
            <Button
              buttonText="Login"
              width="150px"
              height="40px"
              onClick={() => {}}
            />
          </Link>
        ) : (
          <div>
            <MdOutlineKeyboardArrowDown />
            <img src={avatar} />
          </div>
        )}
      </div>
      <FaBars className={classes.dev_naf_bar} onClick={() => setDrawer(true)} />

      {drawer && (
        <Sidebar
          navbarLinks={navLinks}
          handleClose={() => setDrawer(false)}
          open={drawer}
        />
      )}
    </div>
  );
};

Navbar.propTypes = {
  isLogged: PropTypes.bool,
};
