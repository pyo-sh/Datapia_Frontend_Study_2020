import React, { useState } from "../../node_modules/react";

import '../Style/ToDoItem.css';

function ToDoItem({ id, content, isComplete, isUpdating, pressEnterKey }) {
  return (
    <li className="ToDo-Item">
      <button 
        className={isComplete ? "ToDo-Item-Done" : "ToDo-Item-Left"}
        id={"ToDo-Complete-" + String(id)}
        >
        {isComplete ? "✓" : "-"}
      </button>
      {isUpdating
      ? <input
      className="ToDo-Item-Update"
      id={"ToDo-Updating-" + String(id)}
      onKeyPress={pressEnterKey}
      defaultValue={content}
      />
      : <p
      className="ToDo-Item-Content"
      id={"ToDo-Update-" + String(id)}
      >
        {content}
      </p>
      }
      <button className="ToDo-Item-Delete-Button" id={"ToDo-Delete-" + String(id)}>
        x
      </button>
    </li>
  );
}

export default ToDoItem;
