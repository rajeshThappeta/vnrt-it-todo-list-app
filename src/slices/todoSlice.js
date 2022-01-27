import { createSlice } from '@reduxjs/toolkit'




export const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }

    }

})


//get action creator functions
export const { addTodo } = todoSlice.actions

//export reduer
export default todoSlice.reducer;