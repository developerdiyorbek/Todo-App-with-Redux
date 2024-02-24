const EditTodoModal = ({ isOpen, text, setText, closeModal, saveTodo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-lg font-bold mb-4">Edit Todo</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={saveTodo}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
