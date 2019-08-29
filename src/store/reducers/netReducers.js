import { actionTypes } from '../../utilities/constants';

const INITIAL_STATE = {
    type: '',
    isConnected: false,
    isInternetReachable: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionTypes.UPDATE_NET_INFO:
            return {
                ...state,
                type: payload.type,
                isConnected: payload.isConnected,
                isInternetReachable: payload.isInternetReachable,
            };
        default:
            return state;
    }
};
