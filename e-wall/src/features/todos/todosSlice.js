import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    
]

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content){
                title = title.toUpperCase()
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        done: false
                    }
                }
            }
        },
        todoDoneUpdated: {
            reducer(state, action){
                console.log(action.payload)
                let todo = state.find(element => element.id === action.payload.todoId)
                todo.done = action.payload.checked
            },
            prepare(todoId, checked){
                return {
                    payload: {
                        todoId,
                        checked
                    }
                }
            }

        }
    }
})

export const selectAllTodos = (state) => state.todos;

export const {todoAdded, todoDoneUpdated} = todosSlice.actions;

export default todosSlice.reducer;