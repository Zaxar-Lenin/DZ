import React, {ChangeEvent} from 'react'
import {RequestApi} from "../RequestApi/RequestApi";
import s from "./Request.module.css"

function Request() {
    let [isDone, setIsDone] = React.useState(false)
    let [isChange, setIsChange] = React.useState(false)
    let [error, setError] = React.useState("")
    let [response, setResponse] = React.useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDone(e.currentTarget.checked)
        setIsChange(false)
    }

    const onClickHandler = () => {
        RequestApi(isDone)
            .then((response) => {
                // console.log(response)
                setResponse(response.data.errorText)
                setIsChange(true)
            })
            .catch((error) => {
                // console.log({...error});
                // console.log(error.response ? error.response.data.errorText : error.message);
                setError(error.response ? error.response.data.errorText : error.message)
                setIsChange(true)
            })
    }
    return (
        <div className={s.block}>
            <input onChange={onChangeHandler} type={"checkbox"}/>
            <button onClick={onClickHandler}>apply</button>
            {isChange && (isDone ? <div>{response}</div> : <div>{error}</div>) }
        </div>
    );
}

export default Request