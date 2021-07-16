const { CUSTOM_STATUS } = require("src/Redux Statement/constants/CRUD/customStatus");

export const customStatusAction = (payload) => ({
    type: CUSTOM_STATUS.CUSTOM_STATUS_READ,
    payload
});