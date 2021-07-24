const { default: LOGIN } = require("../constants/login");

const loginState = {
    login : [],
    loading : false,
    error : null,
};
const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case LOGIN.LOGIN_DATA:
            return {
                ...state,
                loading : true,
                error : null,
            };
        case LOGIN.LOGIN_SUCCESS:
            return {
                ...state,
                login : action.payload,
                loading : false,
                error : null,
            };
        case LOGIN.LOGIN_ERROR:
            return {
                ...state,
                loading : false,
                error : action.error,
                login: []
            };
        default:
            return state;
    }
};

export default loginReducer;