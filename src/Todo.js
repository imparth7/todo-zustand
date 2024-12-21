import React from "react";

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => toggleComplete(todo.id)}
    >
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default Todo;
