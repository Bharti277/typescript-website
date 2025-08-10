
export type TodosProviderProps = {
    children: React.ReactNode;
  };
  
  export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
  };
  
  export type TodosContextProps = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
    toggleCompleted: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
  };
