import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import classes from '../../styles/style.module.css';
import logo from '../../assets/logos_vivaldi-icon.png';
import avatar from '../../assets/Rectangle371.jpg';
import { Button } from '../DevNafButton/Button';
import { Sidebar } from './Sidebar';
import { AuthContext } from '../../context/AuthContext';

const navLinks = [
  {
    name: 'Generator',
    to: '/survey',
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
  const { user } = useContext(AuthContext);
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
        {!user ? (
          <Link to="/signin">
            <Button
              buttonText="Login"
              width="150px"
              height="40px"
              onClick={() => {}}
            />
          </Link>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdOutlineKeyboardArrowDown />
            <img
              src={avatar}
              style={{ width: '30px', height: '30px', borderRadius: '50%' }}
            />
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
