import React, { useState } from "react";
import { useTodos } from "../store/todos";

const AddTodo = () => {
  const [todo, setTodo] = useState<string>();
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
