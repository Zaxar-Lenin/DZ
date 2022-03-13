import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {ActionType, loadingAC} from "./bll/loadingReducer";
import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import preloader from "./Preloader/Spinner-1s-200px.svg"
import s from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch<Dispatch<ActionType>>()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <div className={s.HW10}>
                homeworks 10

                {/*should work (должно работать)*/}
                {loading
                    ? (
                        <div>
                            <img style={{width: "50px"}} src={preloader} alt=""/>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
