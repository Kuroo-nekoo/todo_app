import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = { todos: [{ id: 1, value: "test", completed: false }] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { value } = action.payload;

      state.todos.push({
        id: nanoid(),
        value,
        completed: false,
      });
      console.log(current(state));
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;

      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    completeTodo: (state, action) => {
      const { id } = action.payload;

      state.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
      console.log(current(state));
    },

    editTodo: (state, action) => {
      const { id, value } = action.payload;

      state.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.value = value;
        }
      });
    },
  },
});

export const { addTodo, editTodo, completeTodo, removeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
