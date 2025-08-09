import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import Navbar from "./components/Navbar";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <Navbar />
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default App;
