import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import sa from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const minDistance = 10;
    const valueMax = value2 + minDistance
    const onChangeRange = (n: [number, number]) => {
        setValue1(n[0])
        setValue2(n[1])
    }
    const onChangeRange2 = ( n: number | number[]) => {
        if(!Array.isArray(n)){
            setValue1(n)
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={sa.rangeinput}>
                <div className={sa.value}>{value1}</div>
                <div><SuperRange
                    valueMax={valueMax}
                    value={value1}
                    onChangeRange={onChangeRange2}
                    // сделать так чтоб value1 изменялось
                /></div>
            </div>

            <div className={sa.rangeinput}>
                <div className={sa.value}>{value1}</div>
                <div><SuperDoubleRange
                    minDistance={minDistance}
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                /></div>
                <div className={sa.value}>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
