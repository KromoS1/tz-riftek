import style from './General.module.css';
import React, {memo} from "react";
import {SensorFramerate} from "./SensorFramerate";
import {LaserEnabled} from "./LaserEnabled";
import {ImagePage} from "./ImagePage";
import {useSelector} from "react-redux";

export const General = memo(({ws}) => {
    const isInit = useSelector(state => state.isInit.isInit);

    return (
        <>
            {!isInit
                ? <></>
                : <>
                    <div className={style.controls}>
                        <SensorFramerate ws={ws}/>
                        <LaserEnabled ws={ws}/>
                    </div>
                    <ImagePage ws={ws}/>
                </>}
        </>
    )
})
