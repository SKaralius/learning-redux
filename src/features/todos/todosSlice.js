import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const { id, text, message } = action.payload;
        // State can be mutated, because functions are wrapped in Immer library's
        // produce()
        state.push({ id, text, message, completed: false });
      },
      prepare: (text, message) => {
        return { payload: { text, message, id: nextTodoId++ } };
      },
    },
    toggleTodo: (state, action) => {
      console.log(action);
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Redux community code convention called the "ducks"
// it suggests that you should put all your
// action creators and reducers in one file,
// do named exports of the action creators,
// and a default export of the reducer function.

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer; // Returns a combined reduced.
