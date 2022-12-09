import { createSlice } from "@reduxjs/toolkit";



const calculatorSlice = createSlice({
    name: "calculatorSlice",
    initialState: {
        num: '',
        num2: '',
        ans: ''
    },
    reducers: {
        number: (state, action) => {
            state.num = action.payload
        },
        number2: (state, action) => {
            state.num2 =  action.payload
        },
        addNumber: (state) => {
            state.ans = state.num !=='' && state.num2 !== '' ? state.num + state.num2 : alert("Empty space in input! Please write it!")
            state.num = ""
            state.num2 = ""
        },
        subtructNumber: (state) => {
            state.ans =  state.num !=='' && state.num2 !== '' ? state.num - state.num2 : alert("Empty space in input! Please write it!")
            state.num = ""
            state.num2 = ""
        },
        multiplyNumber: (state) => {
            state.ans = state.num !=='' && state.num2 !== '' ? state.num * state.num2 : alert("Empty space in input! Please write it!")
            state.num = ""
            state.num2 = ""
        },
        divideNumber: (state) => {
            state.ans = state.num !=='' && state.num2 !== '' ? state.num / state.num2 : alert("Empty space in input! Please write it!")
            state.num = ""
            state.num2 = ""
        }
    }
})

export const { number, number2, addNumber, subtructNumber, multiplyNumber, divideNumber } = calculatorSlice.actions;
export default calculatorSlice.reducer;