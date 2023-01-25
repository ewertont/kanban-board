import React from 'react';
import PropTypes from 'prop-types';
import './tasklist.css';

import TaskItem from '../TaskItem/TaskItem';

function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    onAddTask('New Task', 'Backlog');
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return <TaskItem key={task.id} id={task.id} title={task.title} taskState={task.state} />;
        })}
      </div>
      <div className="btn-increment">
        <button onClick={addTask}>New Task</button>
      </div>
    </div>
  );
}

TaskList.protoTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
