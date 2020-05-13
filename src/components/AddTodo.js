import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const onChange = (e) => setTodoText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      return;
    }
    addTodo(todoText);
    setTodoText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
