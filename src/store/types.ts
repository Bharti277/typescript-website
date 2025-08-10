export interface Todo {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodosContext {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export interface TodosProviderProps {
  children: React.ReactNode;
}
