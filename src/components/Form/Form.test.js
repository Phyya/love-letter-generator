import React from 'react';
import ReactDOM from 'react-dom/client';
import { isTsAnyKeyword } from '@babel/types';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Form } from './Form';
import { act } from 'react-dom/test-utils';
import InputField from '../InputField/InputField';
import { fireEvent } from '@storybook/testing-library';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<Form />);
});
// it('change on input changes values', async () => {
//   await act(async () => {
//     const setState = jest.fn();
//     jest
//       .spyOn(React, 'useState')
//       .mockImplementationOnce((initialState) => [initialState, setState]);
//     render(<Form />);
//     const { container } = render(
//       <InputField
//         type="text"
//         labelText="Partner's name"
//         handleChange={(e) => setState(e.target.value)}
//         name="partnerName"
//       />,
//     );

//     const input = container.getElementsByTagName(`input`);

//     const inputWord = 'Nafisat';

//     await fireEvent.change(input, { target: { value: inputWord } });
//     expect(setState).toHaveBeenCalledWith(inputWord);
//   });
// });
