import React, { useState } from 'react';
import TodoList684 from './Components/TodoList684';
import './App.css';

function App() {
  // Hook to store the value of list of todo
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
// Function to add a new todo item to a list
  const addTodo = () => {
    // Trim function to remove whotespace
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
      setNewTodo('');
    }
  };

// Function to update a new todo item to a list
  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

// Function to delete a new todo item to a list
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Bishal's To-Do List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList684 todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
