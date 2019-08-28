import { createStackNavigator } from 'react-navigation';
import UsersScreen from '../screens/UsersScreen';

export default createStackNavigator(
    {
        UsersScreen
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);
