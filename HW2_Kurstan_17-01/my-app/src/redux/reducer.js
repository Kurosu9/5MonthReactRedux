import { types } from "./types"

const initialState = {
    num: '',
    num2: '',
    ans: ''
}



export function reducer(state = initialState,  action) {
    switch(action.type) {
        case types.CHANGE_NUMBER:
            return {...state, num: action.payload}
        case types.CHANGE_NUMBER2:
            return {...state, num2: action.payload}
        case types.ADD_NUMBER:
            return {...state, ans: state.num !=='' && state.num2 !== '' ? state.num + state.num2 : alert("Empty space in input! Please write it!"), num: '', num2: ''}
        case types.SUBTRUCT_NUMBER:
            return {...state, ans: state.num !=='' && state.num2 !== '' ? state.num - state.num2 : alert("Empty space in input! Please write it!"), num: '', num2: ''}
        case types.MULTIPLY_NUMBER:
            return {...state, ans: state.num !=='' && state.num2 !== '' ? state.num * state.num2 : alert("Empty space in input! Please write it!"), num: '', num2: ''}
        case types.DIVIDE_NUMBER:
            return {...state, ans: state.num !=='' && state.num2 !== '' ? state.num / state.num2 : alert("Empty space in input! Please write it!"), num: '', num2: ''}
        default: return state
    }
}