import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // --------?????????????????-------
    addUserCallback: (name: string) => void //---------------
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // ---------------
    const [error, setError] = useState<string>('') // ---------------

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError('')// --------------------------------------
    }


    const onKeyPressUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            if (name === "") {
                setError('No!!')
            } else {
                addUserCallback(name)
                alert(`Hi ${name}`)
            }
            setName("")
        }

    }


    const addUser = () => {
        if (name === "") {
            setError('No!!')
        } else {
            addUserCallback(name)
            alert(`Hi ${name}`)
        }
        setName("")
    }

    const totalUsers = users.length  // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressUser={onKeyPressUser}
        />
    )
}

export default GreetingContainer
