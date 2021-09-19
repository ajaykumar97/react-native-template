import {LOGIN_REQUESTED} from './types';

export const login = params => ({
  type: LOGIN_REQUESTED,
  params,
});
