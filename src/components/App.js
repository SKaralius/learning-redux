import React from "react";
import Footer from "./Footer";
import ContainerAddTodo from "../containers/ContainerAddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => {
  return (
    <div>
      <ContainerAddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
