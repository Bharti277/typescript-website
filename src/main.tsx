import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { TodosProvider } from "./store/todosContext";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  </StrictMode>
);
