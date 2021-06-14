import leftSideMenu from "../constants/leftSideMenu";

const leftSideMenuAction = (payload) => ({
    type: leftSideMenu.OPEN,
    payload: payload
})

export default leftSideMenuAction 