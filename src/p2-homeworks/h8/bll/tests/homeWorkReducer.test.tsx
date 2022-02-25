import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState:UserType[] = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
    expect(newState.length).toBe(6)
    expect(newState[1].age).toBe(16)
})
test('sort name down', () => {
    const newState: UserType[] = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState.length).toBe(6)
    expect(newState[0].age).toBe(66)

})
test('check age 18', () => {
    const newState: UserType[] = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(newState.length).toBe(4)
    // expect(newState[0].age).toBe(66)


})
