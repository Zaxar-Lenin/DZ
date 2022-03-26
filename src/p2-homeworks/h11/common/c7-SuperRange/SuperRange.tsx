import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (n: number | number[]) => void
    value: number,
    valueMax: number,
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,
        valueMax,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (
        event: Event,
        newValue: number | number[],
    ) => {
        if (!Array.isArray(newValue)) {
            onChangeRange && onChangeRange(newValue);
        }

    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box sx={{width: 300,margin: "0 0 0 10px"}}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    className = {finalRangeClassName}
                    disableSwap = {value === valueMax}
                />
                {/*<Slider onChange = {onChangeCallback} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />*/}
            </Box>
            {/*<input*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
}

export default SuperRange
