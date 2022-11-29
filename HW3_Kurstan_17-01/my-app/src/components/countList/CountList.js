import { useSelector } from "react-redux";




function CountList() {

    const numbers = useSelector(state => state.countReducer.numbers)

    return (
        <ul>
            {numbers.map((number, key) => <li key={key}>{number}</li>)}
        </ul>
    )
}

export default CountList;