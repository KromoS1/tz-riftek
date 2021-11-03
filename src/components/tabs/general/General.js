import style from './General.module.css';
import {compose} from "redux";
import {memo, useCallback, useEffect, useMemo, useRef, useState} from "react";
import Control from "../../../control";
import {useSelector} from "react-redux";

function General(props) {

    const user_sensor_framerate = useSelector(state => state.paramsDevice.user_sensor_framerate);
    const user_laser_enabled = useSelector(state => state.paramsDevice.user_laser_enabled);

    const [range, setRange] = useState(user_sensor_framerate);
    const [laser, setLaser] = useState(user_laser_enabled);

    const update = useCallback((event) => {
        setRange(event.currentTarget.value)
        // setTimeout(() => {
            props.control.setParameter('user_sensor_framerate', event.currentTarget.value);
        // },100)
    }, [])

    const up = useCallback(() => {
        setTimeout(() => {
            props.control.setParameter('user_sensor_framerate', range)
        },200)
    }, [props.control,range])

    const clickLaser = () => {
        props.control.setParameter('user_laser_enabled', !laser);
    }
    return (
        <div className={style.container}>
            <div className={style.controls}>
                <div className={style.rangeBox}>
                    <input type="range" min={1} max={490} defaultValue={user_sensor_framerate} onInput={value => update(value)}
                           onMouseUp={up}/>
                    {range}
                </div>
                <div className={style.laser}>
                    <input type="checkbox" value={laser}
                           onClick={clickLaser}/>
                </div>
                {/*</div>*/}
                {/*<div className={style.image}>*/}

            </div>
        </div>
    )
}

export default compose(memo)(General)
