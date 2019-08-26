import { actionTypes } from '../utilities/constants';

const INITIAL_STATE = {
    user_logged_in: false,
    loading: true
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
    case actionTypes.LOGIN_SUCCESS:
        return { ...state, user_logged_in: payload.user_logged_in, loading: false };
    default:
        return state;
    }
};
