import {memo, useCallback, useState} from "react";
import {useSelector} from "react-redux";
import style from "./General.module.css";

export const SensorFramerate = memo(({ws}) => {
    const user_sensor_framerate = useSelector(state => state.paramsDevice.user_sensor_framerate);
    const [range, setRange] = useState(user_sensor_framerate);

    const update = useCallback((event) => {
        setRange(event.currentTarget.value)
        ws.setParameter('user_sensor_framerate', event.currentTarget.value);
    }, [ws])

    return (
        <div className={style.rangeBox}>
            <span className={style.titleRate}>Frames per second</span>
            <div className={style.range}>
                <input type="range" min={1} max={490} defaultValue={user_sensor_framerate}
                       onInput={value => update(value)}/>
                {range}
            </div>
        </div>
    )
})
