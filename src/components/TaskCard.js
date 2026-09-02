import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <span className="assignee">👤 {task.assignee}</span>
        <span className="priority" style={{ background: task.priority === 'High' ? '#ff4757' : task.priority === 'Medium' ? '#ffa502' : '#2ed573' }}>
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;