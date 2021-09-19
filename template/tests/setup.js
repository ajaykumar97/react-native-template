require('react-native-gesture-handler/jestSetup');

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform',
  );
  Platform.OS = 'android';
  return Platform;
});

global.fetch = require('jest-fetch-mock');
