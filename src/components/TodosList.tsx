import { useTodos } from "../store/todosContext";
import { useSearchParams } from "react-router-dom";
import "./TodosList.scss";

const TodosList = () => {
  const { todos, toggleCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const todosFilter = searchParams.get("todos");

  let filterData = todos;
  if (todosFilter === "active") {
    filterData = todos.filter((todo) => !todo.completed);
  }
  if (todosFilter === "completed") {
    filterData = todos.filter((todo) => todo.completed);
  }

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {filterData.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <div className="todo-content">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  className="todo-checkbox"
                />
                <label htmlFor={`todo-${todo.id}`} className="todo-label">
                  {todo.task}
                </label>
              </div>
            </div>
            <button
              type="button"
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
              aria-label="Delete todo"
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
