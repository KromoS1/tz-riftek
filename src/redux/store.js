import {combineReducers, createStore} from "redux";
import {paramsDeviceReducer} from "./reducers/paramsDeviceReducer";


export const rootReducer = combineReducers({
    paramsDevice: paramsDeviceReducer
})

export const store = createStore(rootReducer)


