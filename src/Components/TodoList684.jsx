import React from 'react';
import TodoItem684 from './TodoItem684';

function TodoList684({ todos, onUpdate, onDelete }) {
  return (
    <div className="todo-list">
    {/* Using map function to map over todos array to render TodoItem component */}
      {todos.map((todo) => (
        <TodoItem684
        // Passing the values/ functions as prop
          key={todo.id} 
          todo={todo}
          Pass 
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList684;
