import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from '../Navbar';
import { isTsAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
it('renders without crashing', () => {
  render(<MockNavbar />);
});
