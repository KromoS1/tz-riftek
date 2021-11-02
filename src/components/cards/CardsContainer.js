import React, {memo} from 'react'
import {compose} from "redux";
import {useSelector} from "react-redux";
import Card from "./Card";
import style from './CardsContainer.module.css';

function CardsContainer() {

    const triggerCounterValue = useSelector(state => state.paramsDevice.user_trigger_counter_value);
    const streamsFormat = useSelector(state => state.paramsDevice.user_streams_format);

    return(
        <div className={style.cardsContainer}>
            <Card name={'Trigger counter value:'} value={triggerCounterValue}/>
            <Card name={'Streams format:'} value={streamsFormat}/>
        </div>
    )
}

export default compose(memo)(CardsContainer);
