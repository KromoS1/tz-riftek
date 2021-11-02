import style from './Navigate.module.css';
import {compose} from "redux";
import {memo} from "react";
import {NavLink} from "react-router-dom";

function Navigate() {
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
}

export default compose(memo)(Navigate);
