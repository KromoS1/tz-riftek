import {memo} from "react";
import {useSelector} from "react-redux";
import style from './System.module.css';
import {ParamInfo} from "./ParamInfo";

export const System = memo(() => {

    const lifeTime = useSelector(state => state.paramsDevice.fact_general_lifeTime)
    const workTime = useSelector(state => state.paramsDevice.fact_general_workTime)
    const sysMon_fpgaTemp = useSelector(state => state.paramsDevice.user_sysMon_fpgaTemp)

    return (
        <div className={style.container}>
            <div className={style.boxForm}>
                <div className={style.title}>Device Information</div>
                <ParamInfo name={'Work'} value={workTime} type={'time'}/>
                <ParamInfo name={'Total'} value={lifeTime} type={'time'}/>
                <ParamInfo name={'CMOS-sensor temperature'} value={sysMon_fpgaTemp} type={'temp'}/>
            </div>
        </div>
    )
})
