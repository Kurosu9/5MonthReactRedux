import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import bPostReducer from "./bPostSlice"


export default configureStore({
    reducer: {
        postsReducer,
        bPostReducer
    }
})