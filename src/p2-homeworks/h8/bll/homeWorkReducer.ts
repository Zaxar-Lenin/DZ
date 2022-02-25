import {UserType} from "../HW8";


type ActionType = ReturnType<typeof sortDownAC>
    | ReturnType<typeof checkAC>
    | ReturnType<typeof sortUpAC>
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === "up"){
                return [...state].sort((a,b) => a.age - b.age)

            }else{
                return [...state].sort((a,b) => b.age - a.age)
            }
        }
        case 'check': {
            return state.filter(f => f.age > action.payload)
        }
        default: return state
    }
}


export const sortUpAC = () => {
    return  {
        type: 'sort',
        payload: 'up'
    }

}
export const sortDownAC = () => {
    return  {
        type: 'sort',
        payload: 'down'
    }

}
export const checkAC = () => {
    return  {
        type: 'check',
        payload: 18
    }

}