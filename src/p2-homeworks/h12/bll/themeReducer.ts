const initState = {
    theme: "blue"
};
export type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET-COLOR": {
            return {
                ...state,
                theme: action.color
            }
        }
        default:
            return state;
    }
};

export type ActionType = {
    type: "SET-COLOR"
    color: string
}

export const changeThemeC = (color: string): ActionType => {
    return {
        type: "SET-COLOR",
        color
    }
};