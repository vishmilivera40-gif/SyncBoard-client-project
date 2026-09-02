import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Column from './Column';
import './Board.css';

const API_URL = 'http://localhost:5000/api';

const Board = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load tasks. Make sure the server is running on port 5000.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const columns = [
    { id: 'todo', title: 'To Do', tasks: tasks.filter(t => t.status === 'todo') },
    { id: 'doing', title: 'Doing', tasks: tasks.filter(t => t.status === 'doing') },
    { id: 'done', title: 'Done', tasks: tasks.filter(t => t.status === 'done') },
  ];

  if (loading) return (
    <div className="board-container">
      <div className="board-header"><h1>📋 <span>Sync</span>Board</h1><button onClick={onLogout}>Logout</button></div>
      <div style={{textAlign:'center', padding:'50px'}}><h2>Loading tasks from server...</h2></div>
    </div>
  );

  if (error) return (
    <div className="board-container">
      <div className="board-header"><h1>📋 <span>Sync</span>Board</h1><button onClick={onLogout}>Logout</button></div>
      <div style={{textAlign:'center', padding:'50px', color:'red'}}><h2>⚠️ {error}</h2></div>
    </div>
  );

  return (
    <div className="board-container">
      <div className="board-header">
        <h1>📋 <span>Sync</span>Board</h1>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="board-columns">
        {columns.map(col => <Column key={col.id} title={col.title} tasks={col.tasks} />)}
      </div>
    </div>
  );
};

export default Board;