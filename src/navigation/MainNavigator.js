import { createStackNavigator } from 'react-navigation-stack';

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
