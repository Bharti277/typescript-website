import { createContext, useContext } from "react";
import type { TodosContextProps } from "./types";

export const todosContext = createContext<TodosContextProps | null>(null);

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if (!todosConsumer) {
      throw new Error("useTodos must be used within a TodosProvider");
    }
    return todosConsumer;
  };
