import React, { useState } from 'react';

function TodoItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleToggle = () => {
    onUpdate(task._id, { completed: !task.completed });
  };

  const handleEdit = () => {
    onUpdate(task._id, { title: editTitle });
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />

      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>
          {task.title}
        </span>
      )}

      <div className="item-actions">
        <span className="tag">
          {task.completed ? 'Done' : 'Pending'}
        </span>

        <button
          className="btn-delete"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
