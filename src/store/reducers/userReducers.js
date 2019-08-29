import { actionTypes } from '../../utilities/constants';

const INITIAL_STATE = {
    users: [],
    loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionTypes.START_USERS_LOADING:
            return { ...state, loading: true };
        case actionTypes.STOP_USERS_LOADING:
            return { ...state, loading: false };
        case actionTypes.GET_USERS:
            return { ...state, loading: true };
        case actionTypes.GET_USERS_SUCCESS:
            return { ...state, users: payload.users, loading: false };
        default:
            return state;
    }
};
