import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void,
    value: [number, number],
    minDistance: number,

    //step, disable, ...
}


export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
                                                                          value,
                                                                          onChangeRange,
                                                                          minDistance,
                                                                      }) => {


    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeRange && onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange && onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };


    return (
        <Box sx={{width: 300,margin: "0 20px 0 10px"}}>
            <Slider
                value={value}
                onChange={handleChange1}
                disableSwap
            />
        </Box>
    );
}