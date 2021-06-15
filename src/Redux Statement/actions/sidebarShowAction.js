import sidebarShow from "../constants/sidebarShow";

const sidebarShowAction = (payload) => ({
    type: sidebarShow.SET,
    payload: payload
});

export default sidebarShowAction;