import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import Login from '../../src/screens/AuthScreens/Login';
import store from '../../src/store';

describe('Login screen', () => {
  const props = {
    navigation: {
      setOptions: jest.fn(),
    },
  };
  it('renders Login correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login {...props} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
