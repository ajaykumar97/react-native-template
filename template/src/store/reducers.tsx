import {combineReducers} from '@reduxjs/toolkit';

import {userReducer} from '../screens/MainAppScreens/Users/slice';

export const rootReducer = combineReducers({
  users: userReducer,
});
