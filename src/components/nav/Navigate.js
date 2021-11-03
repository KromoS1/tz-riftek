import style from './Navigate.module.css';
import {memo} from "react";
import {NavLink} from "react-router-dom";

export const Navigate = memo(() => {
    return (
        <div className={style.container}>
            <div>
                <NavLink to={'/general'}>General</NavLink>
            </div>
            <div>
                <NavLink to={'/system'}>System</NavLink>
            </div>
        </div>
    )
})


