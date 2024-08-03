/**
 * @format
 */
import {it} from '@jest/globals';
import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import 'react-native';

import App from '../src/App';

jest.useFakeTimers();

it('renders correctly', async () => {
  await waitFor(() => render(<App />));
});
