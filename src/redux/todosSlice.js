import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',

  initialState: {
    items: [],
  },

  reducers: {
    addTodo(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteTodo(state, { payload } ) { state.items = state.items.filter(todo => todo.id !== payload)}
    },
});

// Генераторы экшенов
export const { addTodo, deleteTodo } = todosSlice.actions;
// Редюсер слайса
export const todosReducer = todosSlice.reducer;
