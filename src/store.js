import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import userReducer from './slices/userSlice'
export const store = configureStore({
    reducer: {
        todos: todoReducer,
        users: userReducer

    }
})