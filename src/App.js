import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "./App.css";
import useStore from "./store";

function App() {
  const { todo, addTodo, removeTodo, toggleComplete } = useStore();

  const _addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    addTodo(newTodo);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <AddTodo addTodo={_addTodo} />
      <TodoList
        todos={todo}
        toggleComplete={toggleComplete}
        deleteTodo={removeTodo}
      />
    </div>
  );
}

export default App;
