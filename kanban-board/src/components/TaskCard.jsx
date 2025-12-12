import { useState } from 'react';

function TaskCard({ card, columnId, onMoveLeft, onMoveRight, onDeleteCard, onUpdateCard }) {
  const [showDetails, setShowDetails] = useState(false);
  const [newChecklistItem, setNewChecklistItem] = useState('');
  const [newLabelText, setNewLabelText] = useState('');
  const [newLabelColor, setNewLabelColor] = useState('#db34c5ff');
  const [showLabelForm, setShowLabelForm] = useState(false);
  const [tempDate, setTempDate] = useState(card.dueDate || '');

  const presetColors = [
    '#e74c3c', '#e67e22','#2ecc71',
    '#9b59b6',   '#34495e'
  ];

  const completedCount = card.checklist.filter(item => item.completed).length;
  const totalCount = card.checklist.length;

  const handleAddChecklist = (e) => {
    e.preventDefault();
    if (newChecklistItem.trim()) {
      const newItem = {
        id: Date.now(),
        text: newChecklistItem,
        completed: false
      };
      onUpdateCard({
        checklist: [...card.checklist, newItem]
      });
      setNewChecklistItem('');
    }
  };

  const handleToggleChecklist = (itemId) => {
    onUpdateCard({
      checklist: card.checklist.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    });
  };

  const handleDeleteAllChecklist = () => {
    onUpdateCard({
      checklist: []
    });
  };

  const handleAddLabel = (e) => {
    e.preventDefault();
    if (newLabelText.trim()) {
      const newLabel = {
        text: newLabelText,
        color: newLabelColor
      };
      onUpdateCard({
        labels: [...card.labels, newLabel]
      });
      setNewLabelText('');
      setShowLabelForm(false);
    }
  };

  const handleRemoveLabel = (index) => {
    onUpdateCard({
      labels: card.labels.filter((_, i) => i !== index)
    });
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setTempDate(value);
    
    if (value.length === 10) {
      onUpdateCard({ dueDate: value });
    }
  };

  const handleDateBlur = () => {
    if (tempDate) {
      onUpdateCard({ dueDate: tempDate });
    }
  };

  const getDaysRemaining = () => {
    if (!card.dueDate) return null;
    const today = new Date();
    const dueDate = new Date(card.dueDate);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining();

  return (
    <div className="task-card">
      {/* Card Header */}
      <div className="card-header" onClick={() => setShowDetails(!showDetails)}>
        <div>
          <h3>{card.title}</h3>
          {card.description && (
            <p className="card-description">{card.description}</p>
          )}
        </div>
        <button 
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteCard();
          }}
          title="Delete card"
        >
          X
        </button>
      </div>

      {/* Labels */}
      {card.labels.length > 0 && (
        <div className="labels-container">
          {card.labels.map((label, index) => (
            <span 
              key={index}
              className="label"
              style={{ backgroundColor: label.color }}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveLabel(index);
              }}
              title="Click to remove"
            >
              {label.text}
            </span>
          ))}
        </div>
      )}

      {/* Due Date */}
      {card.dueDate && (
        <div className="due-date">
          <span className="date-icon">📅</span>
          <span className="date-text">
            {card.dueDate}
            {daysRemaining !== null && (
              <span className={`days-remaining ${daysRemaining < 0 ? 'overdue' : daysRemaining <= 3 ? 'urgent' : ''}`}>
                {daysRemaining < 0 ? ` (Overdue)` : 
                 daysRemaining === 0 ? ' (Today)' : 
                 ` (${daysRemaining}d)`}
              </span>
            )}
          </span>
        </div>
      )}

      {/* Checklist Progress */}
      {totalCount > 0 && (
        <div className="checklist-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {completedCount}/{totalCount}
          </span>
        </div>
      )}

      {/* Card Actions */}
      <div className="task-actions">
        <button 
          className="move-btn left"
          onClick={onMoveLeft}
          disabled={columnId === 'todo'}
          title="Move left"
        >
          ←
        </button>
        
        <div className="action-buttons">
          <button 
            className="action-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
            title="Show details"
          >
            ⋮
          </button>
        </div>
        
        <button 
          className="move-btn right"
          onClick={onMoveRight}
          disabled={columnId === 'done'}
          title="Move right"
        >
          →
        </button>
      </div>

      {/* Card Details (Expanded) */}
      {showDetails && (
        <div className="card-details" onClick={(e) => e.stopPropagation()}>
          <h4>Add to card</h4>
          
          {/* Labels Section */}
          <div className="detail-section">
            <button 
              className="detail-btn"
              onClick={() => setShowLabelForm(!showLabelForm)}
            >
              🏷️ Label
            </button>
            
            {showLabelForm && (
              <div className="label-form">
                <input
                  type="text"
                  placeholder="Name of label"
                  value={newLabelText}
                  onChange={(e) => setNewLabelText(e.target.value)}
                />
                <div className="color-picker">
                  <p>Select color:</p>
                  <div className="color-options">
                    {presetColors.map((color, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`color-option ${newLabelColor === color ? 'selected' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setNewLabelColor(color)}
                      />
                    ))}
                  </div>
                  <div className="custom-color">
                    <label>Custom color:</label>
                    <input
                      type="color"
                      value={newLabelColor}
                      onChange={(e) => setNewLabelColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button onClick={handleAddLabel}>Create</button>
                  <button onClick={() => setShowLabelForm(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>

          {/* Date Section */}
          <div className="detail-section">
            <div className="date-input">
              <label>📅 Date:</label>
              <input
                type="date"
                value={tempDate}
                onChange={handleDateChange}
                onBlur={handleDateBlur}
                min="2000-01-01"
                max="2100-12-31"
              />
            </div>
          </div>

          {/* Checklist Section */}
          <div className="detail-section">
            <form onSubmit={handleAddChecklist} className="checklist-form">
              <input
                type="text"
                placeholder="Add checklist item..."
                value={newChecklistItem}
                onChange={(e) => setNewChecklistItem(e.target.value)}
              />
              <button type="submit">+ Add Task</button>
            </form>
            
            {card.checklist.length > 0 && (
              <div className="checklist-items">
                {card.checklist.map(item => (
                  <div key={item.id} className="checklist-item">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleToggleChecklist(item.id)}
                    />
                    <span className={item.completed ? 'completed' : ''}>
                      {item.text}
                    </span>
                  </div>
                ))}
                <button 
                  className="delete-all-btn"
                  onClick={handleDeleteAllChecklist}
                >
                  Delete all tasks
                </button>
              </div>
            )}
          </div>

          {/* Delete Card */}
          <div className="detail-section">
            <button 
              className="delete-card-btn"
              onClick={onDeleteCard}
            >
              🗑️ Delete Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCard;