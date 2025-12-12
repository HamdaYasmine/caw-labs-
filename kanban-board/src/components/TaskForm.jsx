import { useState } from 'react';

function TaskForm({ onAddTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="task-form-overlay">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Card title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />
        
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
        
        <div className="form-actions">
          <button type="submit" className="submit-btn">Add Card</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;