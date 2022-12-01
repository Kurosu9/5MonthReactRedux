import { types } from "./types"



export const changeTitleAction = () => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch({
                type: types.CHANGE_TITLE
            })
        }, 3000)
    }
}