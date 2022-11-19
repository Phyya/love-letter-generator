import React from 'react';
import { Button } from './Button';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/DevNafButton',
  component: Button,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

export const LoggedIn = () => (
  <Button buttonText="Login" width="200px" height="40px" />
);
