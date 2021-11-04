import React, {memo, useEffect} from "react";
import {setInit} from "../../redux/reducers/initializeReducer";
import {useDispatch, useSelector} from "react-redux";
import style from './Preloader.module.css';

export const Preloader = memo(() => {

    const isInit = useSelector(state => state.isInit.isInit);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(setInit(true));
        },1000)
    },[dispatch])

    if (!isInit){
        return <div className={style.preloader}><h1>...loading</h1></div>
    }
    return <></>
})
