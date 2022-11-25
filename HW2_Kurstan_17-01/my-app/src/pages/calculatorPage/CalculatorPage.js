import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../redux/types";



function CalculatorPage() {

    const dispatch = useDispatch();
    const num = useSelector(state => state.num)
    const num2 = useSelector(state => state.num2)
    const ans = useSelector(state => state.ans)

    const changeNumber = (event) => {
        dispatch(({
            type: types.CHANGE_NUMBER,
            payload: Number(event.target.value)
        }))
    }

    const changeNumber2 = (event) => {
        dispatch(({
            type: types.CHANGE_NUMBER2,
            payload: Number(event.target.value)
        }))
    }

    const addition = () => {
        dispatch({
            type: types.ADD_NUMBER
        })
    }

    const subtruction = () => {
        dispatch({
            type: types.SUBTRUCT_NUMBER
        })
    }

    const multiplication = () => {
        dispatch({
            type: types.MULTIPLY_NUMBER
        })
    }

    const division = () => {
        dispatch({
            type: types.DIVIDE_NUMBER
        })
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