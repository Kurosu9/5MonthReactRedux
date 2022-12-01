import { types } from "../types"

const initialState = {
    title: "Old Title"
}



export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: "New Title"}
        default: return state
    }
}