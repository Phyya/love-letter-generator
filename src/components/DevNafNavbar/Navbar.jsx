import React, { useState } from 'react';
import classes from '../../styles/style.module.css';
import logo from '../../assets/logos_vivaldi-icon.png';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../DevNafButton/Button';
import { FaBars } from 'react-icons/fa';
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

export const Navbar = () => {
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
        <Link to="/signin">
          <Button
            buttonText="Login"
            width="150px"
            height="40px"
            onClick={() => {}}
          />
        </Link>
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
