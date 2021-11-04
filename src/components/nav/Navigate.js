import style from './Navigate.module.css';
import {memo} from "react";
import {NavLink, useLocation} from "react-router-dom";

export const Navigate = memo(() => {

    const location = useLocation();

    const styleForPath = (path) => location.pathname.includes(path) ? style.navLinkActive : style.navLinkDontActive;

    return (
        <div className={style.container}>
            <NavLink to={'/general'} className={styleForPath('/general')}>
                <span>General</span>
            </NavLink>
            <NavLink to={'/system'} className={styleForPath('/system')}>
                <span>System</span>
            </NavLink>
        </div>
    )
})


