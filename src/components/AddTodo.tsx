import React, { useState } from "react";
import { useTodos } from "../store/todos";
import "./AddTodo.scss";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Please enter a todo");
      return;
    }
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form className="add-todo-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
