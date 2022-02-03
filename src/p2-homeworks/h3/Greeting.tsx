import React, { ChangeEvent, KeyboardEvent }  from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string// need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser:() => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressUser: (e: KeyboardEvent<HTMLInputElement>) => void

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressUser} // деструктуризация пропсов
) => {

    const inputClass = (error === "No!!") ? s.error : s.input// need to fix with (?:)



    return (
        <div  className={s.block}>
            <div className={s.block1}>
                <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressUser} className={inputClass}/><br />
                <span className={s.spanOneClass}>{error}</span>
            </div>
            <div className={s.block2}>
                <button className={s.buttonClass} onClick={addUser} >add</button>
                <span className={s.spanTwoClass}>{totalUsers}</span>
            </div> 
        </div>
    )
}

export default Greeting
