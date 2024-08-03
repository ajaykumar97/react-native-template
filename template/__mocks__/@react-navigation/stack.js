import React from 'react';

const mockNavigator = {
  Navigator: ({children}) => <>{children}</>,
  Screen: ({children}) => <>{children}</>,
};
const mockCardStyleInterpolators = {
  forHorizontalIOS: jest.fn(),
};
module.exports = {
  createStackNavigator: () => mockNavigator,
  CardStyleInterpolators: mockCardStyleInterpolators,
};
