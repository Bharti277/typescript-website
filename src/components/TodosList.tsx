import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

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
    <div>
      <ul>
        {filterData.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
