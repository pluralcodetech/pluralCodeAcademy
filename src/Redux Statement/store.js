import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from 'redux-persist'
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
// import rootReducer from "./rootReducer";
// import rootReducer from "../Redux Statement"


const middleware = [thunk, logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
const persistor = persistStore(store);

export { store, persistor }
