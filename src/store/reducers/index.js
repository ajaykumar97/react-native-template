import { combineReducers } from 'redux';
import user from './userReducers';
import net from './netReducers';

export default combineReducers({ user, net });
