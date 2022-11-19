import React from 'react';
import { Navbar } from './Navbar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/DevNafNavbar',
  component: Navbar,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const LoggedIn = () => <Navbar isLoggedin={true} />;
export const LoggedOut = () => <Navbar />;
