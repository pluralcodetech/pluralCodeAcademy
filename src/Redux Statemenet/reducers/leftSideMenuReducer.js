import leftSideMenu from "../constants/leftSideMenu"

const LEFT_SIDE_MENU = {
    open: false
}


const leftSideMenuReducer = (state = LEFT_SIDE_MENU, action) => {
    switch(action.type) {
        case leftSideMenu.OPEN :
            return {
                ...state,
                open: action.payload
            }
        default :
            return state
    }
}

export default leftSideMenuReducer