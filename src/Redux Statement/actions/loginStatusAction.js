const { default: LOGIN_STATUS } = require("../constants/loginStatus");

const loginStatusAction = (payload) => ({
    type: LOGIN_STATUS.LOGIN_STATUS_READ,
    payload
});

export default loginStatusAction;