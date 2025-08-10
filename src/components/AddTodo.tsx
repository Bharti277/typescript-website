import React, { useState } from "react";
import { useTodos } from "../store/todosContext";
import "./AddTodo.scss";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") {
      setNotification({
        message: "Please enter a todo",
        type: "error",
      });
      setTimeout(() => setNotification(null), 3000);
      return;
    }
    handleAddTodo(todo);
    setNotification({
      message: "Todo added successfully!",
      type: "success",
    });
    setTimeout(() => setNotification(null), 3000);
    setTodo("");
  };

  return (
    <div className="add-todo-container">
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <form className="add-todo-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
