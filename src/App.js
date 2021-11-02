import './App.css';
import React, {memo, useEffect} from "react";
import Control from "./control";
import {compose} from "redux";
import {useDispatch} from "react-redux";
import {setParamDevice} from "./redux/reducers/paramsDeviceReducer";
import Header from "./components/header/Header";
import CardsContainer from "./components/cards/CardsContainer";
import Navigate from "./components/nav/Navigate";

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
            <Navigate/>
        </div>
    );
}

export default compose(memo)(App);
