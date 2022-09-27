import { configureStore} from '@reduxjs/toolkit'
import timersReducer from '../features/timers/timersSlice'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
    reducer: {
        timers: timersReducer,
        todos: todosReducer,
    }
})