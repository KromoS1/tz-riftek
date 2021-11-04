import {combineReducers, createStore} from "redux";
import {paramsDeviceReducer} from "./reducers/paramsDeviceReducer";
import {initializeReducer} from "./reducers/initializeReducer";

export const rootReducer = combineReducers({
    paramsDevice: paramsDeviceReducer,
    isInit:initializeReducer,
})

export const store = createStore(rootReducer)


