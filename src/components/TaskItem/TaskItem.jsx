import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './taskitem.css';

export default function TaskItem({ id, title, taskState }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="taskitem">
        <input type="text" value={editableTitle} onChange={onTitleChange} onKeyPress={onKeyPress} />
      </div>
    );
  } else {
    return (
      <div className="taskitem" onClick={(e) => setIsEditing(true)}>
        {editableTitle}
      </div>
    );
  }
}

TaskItem.prototype = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  taskState: Proptypes.string.isRequired,
};
