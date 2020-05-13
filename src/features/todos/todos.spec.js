import todos, { addTodo, toggleTodo } from "./todosSlice.js";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    expect(
      todos([], {
        type: addTodo.type,
        payload: {
          text: "Run the tests",
          id: 0,
        },
      })
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0,
      },
    ]);

    expect(
      todos(
        [
          {
            text: "Run the tests",
            id: 0,
            completed: false,
            message: "No todos",
          },
        ],
        {
          type: addTodo.type,
          payload: {
            text: "Use Redux",
            id: 1,
            message: "No todos",
          },
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        message: "No todos",
        id: 0,
      },
      {
        text: "Use Redux",
        completed: false,
        message: "No todos",
        id: 1,
      },
    ]);

    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 0,
            message: "No todos",
          },
          {
            text: "Use Redux",
            completed: false,
            message: "No todos",
            id: 1,
          },
        ],
        {
          type: addTodo.type,
          payload: {
            text: "Fix the tests",
            message: "No todos",
            id: 2,
          },
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        message: "No todos",
        completed: false,
        id: 0,
      },
      {
        text: "Use Redux",
        message: "No todos",
        completed: false,
        id: 1,
      },
      {
        text: "Fix the tests",
        message: "No todos",
        completed: false,
        id: 2,
      },
    ]);
  });

  it("should generate incrementing todo IDs", () => {
    const action1 = addTodo("a", "No todos");
    const action2 = addTodo("b", "No todos");

    expect(action1.payload).toEqual({ id: 0, text: "a", message: "No todos" });
    expect(action2.payload).toEqual({ id: 1, text: "b", message: "No todos" });
  });

  it("should handle TOGGLE_TODO", () => {
    expect(
      todos(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1,
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0,
          },
        ],
        {
          type: toggleTodo.type,
          payload: {
            id: 1,
          },
        }
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1,
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0,
      },
    ]);
  });
});
