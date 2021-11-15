import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todos';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    // A non-serializable Data Solution from StackOverFlow to solve Console Error when storing Dates in Redux Store.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});