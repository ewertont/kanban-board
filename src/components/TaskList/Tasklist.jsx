import React from 'react';
import './tasklist.css';

export default function TaskList({ title, content }) {
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
    </div>
  );
}
