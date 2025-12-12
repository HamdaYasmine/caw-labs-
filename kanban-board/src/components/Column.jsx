import TaskCard from './TaskCard';

function Column({ column, onMoveCard, onDeleteCard, onUpdateCard, onAddCardClick }) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{column.title}</h2>
        <span className="card-count">{column.cards.length}</span>
      </div>
      
      <div className="cards-list">
        {column.cards.map(card => (
          <TaskCard
            key={card.id}
            card={card}
            columnId={column.id}
            onMoveLeft={() => {
              const columns = ['todo', 'inprogress', 'done'];
              const currentIndex = columns.indexOf(column.id);
              const prevColumn = columns[currentIndex - 1] || columns[0];
              onMoveCard(card.id, column.id, prevColumn);
            }}
            onMoveRight={() => {
              const columns = ['todo', 'inprogress', 'done'];
              const currentIndex = columns.indexOf(column.id);
              const nextColumn = columns[currentIndex + 1] || columns[columns.length - 1];
              onMoveCard(card.id, column.id, nextColumn);
            }}
            onDeleteCard={() => onDeleteCard(card.id, column.id)}
            onUpdateCard={(updates) => onUpdateCard(card.id, column.id, updates)}
          />
        ))}
        
        {column.cards.length === 0 && (
          <div className="empty-column">
            <p>No cards</p>
          </div>
        )}
      </div>

      <button 
        className="add-card-btn"
        onClick={onAddCardClick}
      >
        + Add Card
      </button>
    </div>
  );
}

export default Column;