import React, { useState } from 'react';

function TaskList({tasks, toggleComplete}) {
  return (
    <ul id="list">
      {
        tasks.map( (task) => {
          return <Task id={task.id} title={task.title} isComplete={task.isComplete} toggleComplete={toggleComplete} />
        })
      }
    </ul>
  );
}

function Task({id, title, isComplete, toggleComplete}) {
  return (
   <li id={id}>
     <input type="checkbox" class="checkbox" checked={isComplete} onChange={() => toggleComplete(id)} />
     <span>{title}</span>
     <button class="delete">Delete</button>
   </li>
  )
}


export default TaskList;
