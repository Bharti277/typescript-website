import React from "react";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <Navbar />
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default App;
