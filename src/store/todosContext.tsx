import React, { createContext, useContext, useState, useEffect } from "react";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface TodosContextType {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTodo: (id: string, newTask: string) => void;
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

// Key for localStorage
const TODOS_STORAGE_KEY = "todos-typescript-app";

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize state with data from localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
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
    <TodosContext.Provider
      value={{
        todos,
        handleAddTodo,
        toggleCompleted,
        handleDeleteTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
