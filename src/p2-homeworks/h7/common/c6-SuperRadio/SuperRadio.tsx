import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e.currentTarget.checked)
    //         onChangeCallback(e)
    //
    // }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type="radio"
                name={name}
                // name, checked, value, onChange
                checked={value === o}
                onChange={(e) => {
                    if (e.currentTarget.checked) {
                        if (onChangeOption) {
                            onChangeOption(o)
                        }
                    }
                }}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
