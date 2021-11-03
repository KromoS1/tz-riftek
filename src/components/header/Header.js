import React, {memo} from "react";
import {useSelector} from "react-redux";
import style from './Header.module.css';

export const Header = memo(() => {
    const logo = 'https://riftek.com/local/templates/.default/img/logo-mob.svg';
    const deviceName = useSelector(state => state.paramsDevice.user_general_deviceName);

    return(
        <header className={style.header}>
            <div className={style.container}>
                <img src={logo} alt="#" className={style.logo}/>
                <span className={style.name}>{deviceName}</span>
            </div>
        </header>
    )
})
