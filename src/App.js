import './App.css';
import React, {memo, useEffect} from "react";
import Control from "./control";
import {compose} from "redux";
import {useDispatch} from "react-redux";
import {setParamDevice} from "./redux/reducers/paramsDeviceReducer";
import Header from "./redux/components/header/Header";
import CardsContainer from "./redux/components/cards/Cards";

function App() {

    const control = new Control('localhost');
    const dispatch = useDispatch();

    useEffect(() => {
        control.setCallback('paramsUpdate', (data) => {
            console.log(data)
            dispatch(setParamDevice(data));
        });
        control.init();
    }, [])


    return (
        <div className="App">
            <Header/>
            <CardsContainer/>
        </div>
    );
}

export default compose(memo)(App);
