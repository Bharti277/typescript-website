import { useState } from "react";
import type { Todo, TodosProviderProps } from "./types";
import { todosContext } from "./todosContext"; // Fixed import

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const storedTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(storedTodos) as Todo[];
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
  };

  const toggleCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggleCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};
