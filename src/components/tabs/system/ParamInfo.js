import {memo} from "react";
import style from './System.module.css';

export const ParamInfo = memo(({name, value, type}) => {

    const secondsToHms = (time) => {
        time = Number(time);
        let h = Math.floor(time / 3600);
        let m = Math.floor(time % 3600 / 60);
        let s = Math.floor(time % 3600 % 60);

        return `${h}h ${m}m ${s}s`
    }

    const tempRound = (temp,decimals) => {
        return +temp.toFixed(1);
        // return Number(Math.round(temp+'e+'+decimals)+'e-'+decimals)
    }

    switch (type){
        case 'time':
            return (
                <div className={style.paramInfo}>
                    <span>{name}</span>
                    <span>{secondsToHms(value)}</span>
                </div>
            )
        case 'temp':
            return (
                <div className={style.paramInfo}>
                    <span>{name}</span>
                    <span>{tempRound(value,1)} ℃</span>
                </div>
            )
        default:
            return <>Not Found</>
    }
})
