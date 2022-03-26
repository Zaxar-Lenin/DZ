import React from "react";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ActionType, changeThemeC, InitStateType} from "./bll/themeReducer";
import {Dispatch} from "redux";

const themes = ['dark', 'red', 'some','blue','coral','yellow-dark'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.color.theme);
    const dispatch = useDispatch<Dispatch<ActionType>>()

    // ,
    const onChangeCallback = (color: string) => {
        dispatch(changeThemeC(color))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect onChangeOption={onChangeCallback} options={themes}/>
            <hr/>
        </div>
    );
}

export default HW12;
