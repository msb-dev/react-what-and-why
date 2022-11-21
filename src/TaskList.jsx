import React, { useState } from 'react';

function TaskList({tasks}) {
  return (
    <ul id="list">
      {
        tasks.map( (task) => {
          return <Task id={task.id} title={task.title} isComplete={task.isComplete} />
        })
      }
    </ul>
  );
}

function Task({id, title, isComplete}) {
  return (
   <li id={id}>
     <input type="checkbox" className="checkbox" checked={isComplete} />
     <span>{title}</span>
     <button className="delete">Delete</button>
   </li>
  )
}


export default TaskList;
