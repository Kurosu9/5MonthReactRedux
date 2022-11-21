import {useDispatch, useSelector} from "react-redux";



function MainPage() {

    const dispatch = useDispatch();

    const count = useSelector(state => state.count);

    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }

    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    return (
        <>
            <h1>Count - {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default MainPage;