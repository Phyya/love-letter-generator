import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SignIn as SignInComponent } from './SignIn';
export default {
  title: 'pages/SignIn',
  component: SignInComponent,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export const SignIn = () => <SignInComponent />;
