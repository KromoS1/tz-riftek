import React, {memo} from 'react'
import {useSelector} from "react-redux";
import {Card} from "./Card";
import style from './CardsContainer.module.css';
import {Preloader} from "../preloader/Preloader";

export const CardsContainer = memo(() => {

    const triggerCounterValue = useSelector(state => state.paramsDevice.user_trigger_counter_value);
    const streamsFormat = useSelector(state => state.paramsDevice.user_streams_format);
    const isInit = useSelector(state => state.isInit.isInit);

    return (
        <div className={style.cardsContainer}>
            {
                !isInit
                    ? <Preloader/>
                    : <>
                        <Card name={'Trigger counter value:'} value={triggerCounterValue}/>
                        <Card name={'Streams format:'} value={streamsFormat}/>
                    </>
            }
        </div>
    )
})
