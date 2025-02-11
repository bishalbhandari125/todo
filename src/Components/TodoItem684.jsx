import React from 'react';
import "./TodoItem684.css"
// Receives value/function as props
function TodoItem684({ todo, onUpdate, onDelete }) {
  return (
    <div className="todo-item">
    {/* Field to display adn edit to todo item */}
      <input
        type="text"
        value={todo.text}
        onChange={(e) => onUpdate({ ...todo, text: e.target.value })}
      />
      <div className="todo-actions">
        {/* While clicking the button it deletes the item according to the item */}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem684;
