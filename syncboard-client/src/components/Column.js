import React from 'react';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <div className="column-header">
        <h3>{title}</h3>
        <span className="task-count">{tasks.length}</span>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;