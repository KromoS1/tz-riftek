import {initializeReducer, setInit} from "./reducers/initializeReducer";

test('correct set init value', () => {
    let initialState = false;
    const endState = initializeReducer(initialState,setInit(true));
    expect(endState.isInit).toBe(true);
})
