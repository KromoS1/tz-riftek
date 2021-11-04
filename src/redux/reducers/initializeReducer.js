export const setInit = (initBool) => ({type: 'INITIALIZE-REDUCER/SET-INIT', initBool});

const initialState = {
    isInit: false
}

export const initializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE-REDUCER/SET-INIT':
            return {...state, isInit: action.initBool}
        default:
            return state;
    }
}
