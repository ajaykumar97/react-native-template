import {SIGNUP_REQUESTED} from './types';

export const signup = params => ({
  type: SIGNUP_REQUESTED,
  params,
});
