import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LaunchScreen from '../screens/LaunchScreen';

export default createAppContainer(createSwitchNavigator(
  {
    LaunchScreen
  }
));
