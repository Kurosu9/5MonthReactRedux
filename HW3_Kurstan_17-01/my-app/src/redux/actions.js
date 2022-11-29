import { types } from "./types";




export const addNumberAction = (num) => {
    return {
        type: types.ADD_NUMBER,
        payload: num
    }
}

export const clearAllAction = () => {
    return {
        type: types.CLEAR_ALL
    }
}