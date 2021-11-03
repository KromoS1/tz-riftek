import './App.css';
import React, {memo, useEffect, useState} from "react";
import Control from "./control";
import {useDispatch} from "react-redux";
import {setParamDevice} from "./redux/reducers/paramsDeviceReducer";
import {Header} from "./components/header/Header";
import {CardsContainer} from "./components/cards/CardsContainer";
import {Navigate} from "./components/nav/Navigate";
import {General} from "./components/tabs/general/General";
import {System} from "./components/tabs/system/System";
import {Route} from "react-router-dom";

export const App = memo(() => {

    const [init,setInit] = useState(false);

    const ws = new Control('localhost');
    const dispatch = useDispatch();

    const initialize = () => {
        setTimeout(() => {
            setInit(true)
        },1000)
        ws.init();
    }

    useEffect(() => {
        ws.setCallback('paramsUpdate', (data) => {
            dispatch(setParamDevice(data))
            // console.log(data)
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
            <div className={'contentBox'}>
                <Navigate/>
                <div className={'content'}>
                    <Route path={'/general'} render={() => <General ws={ws}/>}/>
                    <Route path={'/system'} render={() => <System/>}/>
                </div>
            </div>
        </div>
    );
})


