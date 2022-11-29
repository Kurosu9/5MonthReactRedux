import { types } from "../types"

const initialState = {
    numbers: []
}


export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NUMBER:
            let lastIndex = state.numbers[state.numbers.length-1]
            return {...state, numbers: lastIndex !== undefined ? [...state.numbers, action.payload + lastIndex] : [...state.numbers, action.payload]}
        case types.CLEAR_ALL:
            return {...state, numbers: []}
        default: return state
    }
}