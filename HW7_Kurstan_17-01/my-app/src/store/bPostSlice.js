import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getBPost = createAsyncThunk(
    'getBPost',
    async function(data, {rejectWithValue,dispatch}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+data)
            const post = await response.json()
            dispatch(getInfoPost(post))
        }
        catch (e) {
           console.log(e);
        }
    }
)


const bPostsSlice = createSlice({
    name: 'bPostsSlice',
    initialState: {
        post:{}
    },
    reducers: {
        getInfoPost:(state,action)=>{
            state.post = action.payload
        }
    }
})


export const {getInfoPost} = bPostsSlice.actions

export default bPostsSlice.reducer;