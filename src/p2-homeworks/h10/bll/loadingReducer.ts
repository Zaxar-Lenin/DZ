const initState = {
    loading: false
}

type InitStateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): ActionType => {
    return {
        type: "SET-LOADING",
        payload: {
            loading
        }
    }
}

export type ActionType = {
    type: "SET-LOADING",
    payload: {
        loading: boolean,
    },
}