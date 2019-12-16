import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    // AuthNavigator,
    MainNavigator,
  },
  {
    initialRouteName: 'MainNavigator',
  }
));
