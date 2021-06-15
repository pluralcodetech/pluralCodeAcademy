import sidebarShow from "../constants/sidebarShow"

const initialState = {
    sidebarShow: 'responsive'
}
  
//  const sidebarShowReducer = (state = initialState, { type, ...rest }) => {
//     switch (type) {
//         case 'set':
//         return {...state, ...rest }
//         default:
//         return state
//     }
// };

const sidebarShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case sidebarShow.SET:
            return {
                ...state,
                sidebarShow : action.payload
            }
        default:
            return state
    }
}

export default sidebarShowReducer


// const store = createStore(changeState)
// export default store