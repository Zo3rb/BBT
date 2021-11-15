import { createSlice } from '@reduxjs/toolkit';

const initialState = [
];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return state = [...state, action.payload];
        },
        removeTodo: (state, action) => {
            return state = state.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
