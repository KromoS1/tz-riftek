import './App.css';
import React, {memo, useEffect, useState} from "react";
import Control from "./control";
import {compose} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {setParamDevice} from "./redux/reducers/paramsDeviceReducer";
import Header from "./components/header/Header";
import CardsContainer from "./components/cards/CardsContainer";
import Navigate from "./components/nav/Navigate";
import General from "./components/tabs/general/General";

function App() {

    const [init,setInit] = useState(false);

    const control = new Control('localhost');
    const dispatch = useDispatch();

    const initialize = () => {
        setTimeout(() => {
            setInit(true)
        },1000)
        control.init();
    }

    useEffect(() => {
        control.setCallback('paramsUpdate', (data) => {
            dispatch(setParamDevice(data))
            // console.log(data)
            console.log(data.user_sensor_framerate)
        });
        initialize()
    }, [])

    if (!init){
        return<div>
            <h1>Loading...</h1>
        </div>
    }

    return (
        <div className="App">
            <Header/>
            <CardsContainer/>
            <Navigate/>
            <General control={control} />
        </div>
    );
}

export default compose(memo)(App);
