import { actionTypes } from '../../utilities/constants';

const getAllUsers = () => {
    return {
        type: actionTypes.GET_USERS
    };
};

export {
    getAllUsers
};
