import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { addTodo, editTodo } from "./Store/TodoSlice";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditModal from "./components/EditModal";
import TodoItem from "./components/TodoItem";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [addTodoInputValue, setAddTodoInputValue] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState("");
  const [editedTodoId, setEditedTodoId] = useState(null);

  // create Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addTodoInputValue.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          text: addTodoInputValue,
          isCompleted: false,
        })
      );
      setAddTodoInputValue("");
    } else {
      toast.warning("Write a task!");
    }
  };

  // edited Todo
  const handleEditTodo = () => {
    if (editedTodoText.trim() !== "") {
      dispatch(editTodo({ id: editedTodoId, text: editedTodoText }));
      setEditModal(false);
    } else {
      toast.warning("Write a task!");
    }
  };

  return (
    <div className="container mx-auto max-w-lg my-8 px-4 sm:px-0">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
        Todo App
      </h1>
      <form className="flex items-center mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={addTodoInputValue}
          placeholder="Add a new todo..."
          className="flex-grow border-b-2 border-indigo-500 p-2 focus:outline-none"
          onChange={(e) => setAddTodoInputValue(e.target.value)}
        />
        <button className="ml-2 bg-indigo-500 text-white p-2 rounded">
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setEditedTodoId={setEditedTodoId}
            setEditedTodoText={setEditedTodoText}
            setEditModal={setEditModal}
          />
        ))}
      </ul>
      <EditModal
        isOpen={editModal}
        closeModal={() => setEditModal(false)}
        text={editedTodoText}
        setText={setEditedTodoText}
        saveTodo={handleEditTodo}
      />
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default App;
