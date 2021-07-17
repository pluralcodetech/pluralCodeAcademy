const { default: USER_MANAGER } = require("../constants/UserManagement");

const userManagementState = {
    userManagement : [],
    loading : false,
    error : null,
};

const userManagementReducer = (state = userManagementState, action) => {
    switch (action.type) {
        case USER_MANAGER.USER_MANAGER_DATA:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case USER_MANAGER.USER_MANAGER_SUCCESS:
            return {
                ...state,
                loading: false,
                userManagement: action.payload
            };
        case USER_MANAGER.USER_MANAGER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                userManagement: []
            };
        default:
            return state;
    }
};

export default userManagementReducer;