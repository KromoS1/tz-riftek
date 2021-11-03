import style from './General.module.css';
import {memo} from "react";
import {SensorFramerate} from "./SensorFramerate";
import {LaserEnabled} from "./LaserEnabled";
import {ImagePage} from "./ImagePage";

export const General = memo(({ws}) => {
    return (
        <>
            <div className={style.controls}>
                <SensorFramerate ws={ws}/>
                <LaserEnabled ws={ws}/>
            </div>
            <ImagePage ws={ws}/>
        </>
    )
})
