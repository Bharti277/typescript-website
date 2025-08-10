import React, { createContext, useContext, useState, useEffect } from "react";
import type { TodosContext } from "./types";

export const todosContext = createContext<TodosContext | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(todosContext);
  if (!context) {
    throw new Error("useTodos must be used within TodosProvider");
  }
  return context;
};

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface TodosProviderProps {
  children: React.ReactNode;
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  // Initialize state with data from localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos-typescript-app");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos-typescript-app", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (task: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now().toString(), task, completed: false },
    ]);
  };

  const toggleCompleted = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: string, newTask: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  return (
    <todosContext.Provider
      value={{
        todos,
        handleAddTodo,
        toggleCompleted,
        handleDeleteTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};
