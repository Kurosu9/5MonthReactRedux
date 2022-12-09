import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, divideNumber, multiplyNumber, number, number2, subtructNumber } from "../../store/calculatorSlice";



function CalculatorPage() {

    const dispatch = useDispatch();
    const { num, num2, ans } = useSelector(state => state.calculatorReducer)

    const changeNumber = (event) => {
        dispatch(number(Number(event.target.value)))
    }

    const changeNumber2 = (event) => {
        dispatch(number2(Number(event.target.value)))
    }

    const addition = () => {
        dispatch(addNumber())
    }

    const subtruction = () => {
        dispatch(subtructNumber())
    }

    const multiplication = () => {
        dispatch(multiplyNumber())
    }

    const division = () => {
        dispatch(divideNumber())
    }

    return (
        <div>
            <input type='number' placeholder='Enter the number' onChange={changeNumber} value={num}/>
            <input type='number' placeholder='Enter the number' onChange={changeNumber2} value={num2}/>
            <button onClick={addition}>+</button>
            <button onClick={subtruction}>-</button>
            <button onClick={multiplication}>*</button>
            <button onClick={division}>/</button>
            <h1>{ans}</h1>
        </div>
    )
}

export default CalculatorPage;