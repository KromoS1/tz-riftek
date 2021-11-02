import {compose} from "redux";
import {memo} from "react";
import style from './CardsContainer.module.css';

function Card(props) {

    return (
        <div className={style.card}>
            <span className={style.value}>{props.value}</span>
            <span className={style.name}>{props.name} </span>
        </div>
    )
}

export default compose(memo)(Card);
