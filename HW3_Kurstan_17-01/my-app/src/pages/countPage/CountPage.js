import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountList from "../../components/countList/CountList";
import { addNumberAction, clearAllAction } from "../../redux/actions";





function CountPage() {

    const dispatch = useDispatch();
    const [num, setNum] = useState("");

    const changeInput = (event) => {
        setNum(Number(event.target.value))
    }

    const addNumber = () => {
        if(num !== "") {
            dispatch(addNumberAction(num))
            setNum(num="")
        }
    }

    const clearAll = () => {
        dispatch(clearAllAction())
    }

    return (
        <div>
            <input type="number" placeholder="Enter the number" onChange={changeInput} value={num}/>
            <button onClick={addNumber}>add</button>
            <button onClick={clearAll}>clear</button>
            <CountList/>
        </div>
    )
}

export default CountPage;