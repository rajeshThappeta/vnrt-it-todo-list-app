import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})


//export action creator functions
export const { addUser } = userSlice.actions;
//export ruducer
export default userSlice.reducer