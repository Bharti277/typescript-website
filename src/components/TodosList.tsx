import { useTodos } from "../store/todosContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./TodosList.scss";

const TodosList = () => {
  const { todos, toggleCompleted, handleDeleteTodo, handleUpdateTodo } =
    useTodos();
  const [searchParams] = useSearchParams();
  const [editingTodo, setEditingTodo] = useState<{
    id: string;
    task: string;
  } | null>(null);
  const todosFilter = searchParams.get("todos");

  let filterData = todos;
  if (todosFilter === "active") {
    filterData = todos.filter((todo) => !todo.completed);
  }
  if (todosFilter === "completed") {
    filterData = todos.filter((todo) => todo.completed);
  }

  const handleEdit = (id: string, task: string) => {
    setEditingTodo({ id, task });
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTodo && editingTodo.task.trim() !== "") {
      handleUpdateTodo(editingTodo.id, editingTodo.task.trim());
      setEditingTodo(null);
    }
  };

  const handleCancel = () => {
    setEditingTodo(null);
  };

  return (
    <div className="todos-container">
      {editingTodo && (
        <div className="edit-popup-overlay" onClick={handleCancel}>
          <div className="edit-popup" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleUpdate}>
              <h3>Edit Todo</h3>
              <input
                type="text"
                value={editingTodo.task}
                onChange={(e) =>
                  setEditingTodo({ ...editingTodo, task: e.target.value })
                }
                autoFocus
              />
              <div className="popup-buttons">
                <button type="submit" disabled={editingTodo.task.trim() === ""}>
                  Save
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            <div className="todo-actions">
              <button
                type="button"
                className="edit-button"
                onClick={() => handleEdit(todo.id, todo.task)}
                aria-label="Edit todo"
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteTodo(todo.id)}
                aria-label="Delete todo"
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
