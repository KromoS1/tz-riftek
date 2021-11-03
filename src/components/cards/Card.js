import style from './CardsContainer.module.css';

export const Card = ({value,name}) => {
    return (
        <div className={style.card}>
            <span className={style.value}>{value}</span>
            <span className={style.name}>{name} </span>
        </div>
    )
}

