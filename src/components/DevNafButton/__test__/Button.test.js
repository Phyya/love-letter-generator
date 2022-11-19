import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../Button';
import { isTsAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it('renders without crashing', () => {
  render(<Button />);
});

it('renders button correctly', () => {
  const { getByRole } = render(<Button buttonText="Login"></Button>);
  const btn = getByRole('button');
  expect(btn).toHaveTextContent('Login');
});
