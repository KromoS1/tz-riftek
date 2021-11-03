export const setParamDevice = (params) => ({type: 'PARAMS-DEVICE/SET-PARAMS', params});

const initialState = {
    fact_general_lifeTime: 0,
    fact_general_workTime: 0,
    user_general_deviceName: "",
    user_laser_enabled: false,
    user_sensor_framerate: 0,
    user_streams_format: "",
    user_sysMon_fpgaTemp: 0,
    user_trigger_counter_value: 0,
}

export const paramsDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PARAMS-DEVICE/SET-PARAMS':
            return {...state, ...action.params}
        default:
            return state
    }
}
