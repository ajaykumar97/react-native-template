import { actionTypes } from '../../utilities/constants';

const updateNetInfo = (info) => {
    return {
        type: actionTypes.UPDATE_NET_INFO,
        payload: info,
    };
};

export {
    updateNetInfo,
};
