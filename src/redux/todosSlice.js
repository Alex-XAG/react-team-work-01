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
  },
});

// Генераторы экшенов
export const { addTodo } = todosSlice.actions;
// Редюсер слайса
export const todosReducer = todosSlice.reducer;
