const { default: LOGIN_STATUS } = require("../constants/loginStatus");


const loginStatusState = {
    loginStatus : [],
};

const loginStatusReducer = (state = loginStatusState, action) => {
    switch (action.type) {
        case LOGIN_STATUS.LOGIN_STATUS_READ:
            return {
                ...state,
                loginStatus : action.payload,
            };
        default:
            return state;
    }
};

export default loginStatusReducer