import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../Store/TodoSlice";

const TodoItem = ({
  todo,
  setEditedTodoId,
  setEditedTodoText,
  setEditModal,
}) => {
  const dispatch = useDispatch();

  // Delete Todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // openEditModal
  const openEditModal = (todo) => {
    setEditedTodoId(todo.id);
    setEditedTodoText(todo.text);
    setEditModal(true);
  };

  return (
    <li className="flex items-center justify-between gap-3 border p-2 mb-2 bg-white shadow-md rounded px-2 ">
      <div className="flex items-center gap-2 w-full h-full">
        <input
          type="checkbox"
          id={`checkbox${todo.id}`}
          className="cursor-pointer"
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <label
          htmlFor={`checkbox${todo.id}`}
          className={
            todo.isCompleted
              ? "text-gray-400 cursor-pointer w-full block h-full line-through"
              : "text-gray-600 cursor-pointer w-full block h-full"
          }
        >
          {todo.text}
        </label>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="bg-sky-500 rounded text-white px-2 py-1 hover:opacity-80 duration-100"
          onClick={() => openEditModal(todo)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 rounded text-white px-2 py-1 hover:opacity-80 duration-100"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
