import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";


function App() {
    const theme = useSelector<AppStoreType, string>(state => state.color.theme);
    return (
        <div className={s[theme]}>
            <div>react homeworks:</div>
            {/* <HW1/>
            <HW2/>* */}
            {/* <HW3/> */}
            {/*<HW4/>*/}
            <HW5/>
            {/*<HW6/>*/}
            {/*<HW8/>*/}
            {/*<HW11/>*/}
            {/*<HW12/>*/}
        </div>
    )
}

export default App
