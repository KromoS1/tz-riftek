import {memo, useCallback} from "react";
import style from "./General.module.css";
import {useSelector} from "react-redux";

export const LaserEnabled = memo(({ws}) => {

    const laser = useSelector(state => state.paramsDevice.user_laser_enabled);

    const clickLaser = useCallback((event) => {
        ws.setParameter('user_laser_enabled', event.currentTarget.checked);
    }, [])

    return (
        <div className={style.laser}>
            <span className={style.titleLaser}>Laser</span>
            <input type="checkbox" checked={laser}
                   onChange={(event) => clickLaser(event)}/>
        </div>
    )
})
