import React from 'react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/Navbar',
  component: Navbar,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const LoggedIn = () => <Navbar isLoggedIn={true} />;
export const LoggedOut = () => <Navbar isLoggedIn={false} />;
