import React from 'react';
import ReactDOM from 'react-dom/client';
import { isTsAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LetterForm } from './LetterForm';
import { act } from 'react-dom/test-utils';
import InputField from '../InputField/InputField';
import { fireEvent } from '@storybook/testing-library';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<LetterForm />);
});
