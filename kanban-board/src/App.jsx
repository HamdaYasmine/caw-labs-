import { useState } from 'react';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import './App.css';

const initialColumns = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { 
        id: 1, 
        title: "Caw Lab", 
        description: "Lab 7 the Kanban board", 
        labels: [
          { text: "task1 essential ", color: "#db3434ff" },
          
        ],
        dueDate: "2025-12-15",
        checklist: [
          { id: 1, text: "Task1 use css and animation", completed: true },
          { id: 2, text: "modify the taskform.jsx", completed: false }
        ]
      }
    ]
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    cards: [
      { 
        id: 2, 
        title: "Tp APM ", 
        
        labels: [
          { text: "easy", color: "#4ae73cff" },
        
        ],
        dueDate: "2025-12-17",
        checklist: []
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    cards: [
      { 
        id: 3, 
        title: "Write APR report", 
        description: "APR report of the UDP lab", 
        labels: [
          { text: "Report", color: "#9b59b6" }
        ],
        dueDate: "2025-12-05",
        checklist: [
          { id: 1, text: "provide the screenshots", completed: true },
          { id: 2, text: "answer the questions", completed: true }
        ]
      }
    ]
  }
];

function App() {
  const [columns, setColumns] = useState(initialColumns);
  const [showCardForm, setShowCardForm] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('todo');

  const addCard = (title, description, columnId = 'todo') => {
    const newCard = {
      id: Date.now(),
      title,
      description: description || '',
      labels: [],
      dueDate: '',
      checklist: []
    };

    setColumns(columns.map(column => 
      column.id === columnId 
        ? { ...column, cards: [...column.cards, newCard] }
        : column
    ));
    setShowCardForm(false);
  };

  const moveCard = (cardId, fromColumnId, toColumnId) => {
    setColumns(columns.map(column => {
      if (column.id === fromColumnId) {
        return {
          ...column,
          cards: column.cards.filter(card => card.id !== cardId)
        };
      }
      if (column.id === toColumnId) {
        const cardToMove = columns
          .find(col => col.id === fromColumnId)
          ?.cards.find(card => card.id === cardId);
        if (cardToMove) {
          return {
            ...column,
            cards: [...column.cards, cardToMove]
          };
        }
      }
      return column;
    }));
  };

  const deleteCard = (cardId, columnId) => {
    setColumns(columns.map(column =>
      column.id === columnId
        ? { ...column, cards: column.cards.filter(card => card.id !== cardId) }
        : column
    ));
  };

  const updateCard = (cardId, columnId, updates) => {
    setColumns(columns.map(column => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: column.cards.map(card => 
            card.id === cardId ? { ...card, ...updates } : card
          )
        };
      }
      return column;
    }));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📋 Kanban Board</h1>
        <div className="header-actions">
          <button 
            className="add-card-btn"
            onClick={() => {
              setSelectedColumn('todo');
              setShowCardForm(true);
            }}
          >
            + Add Card
          </button>
        </div>
      </header>

      {showCardForm && (
        <TaskForm 
          onAddTask={(title, description) => addCard(title, description, selectedColumn)}
          onCancel={() => setShowCardForm(false)}
        />
      )}

      <div className="board">
        {columns.map(column => (
          <Column
            key={column.id}
            column={column}
            onMoveCard={moveCard}
            onDeleteCard={deleteCard}
            onUpdateCard={updateCard}
            onAddCardClick={() => {
              setSelectedColumn(column.id);
              setShowCardForm(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;