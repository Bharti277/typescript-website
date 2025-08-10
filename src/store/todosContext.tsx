import React, { createContext, useContext, useState } from "react";

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

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos([...todos, { id: Date.now().toString(), task, completed: false }]);
  };

  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (id: string, newTask: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
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
