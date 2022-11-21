import React, { useState } from 'react';

function TaskList({tasks, toggleComplete, deleteTask}) {
  return (
    <ul id="list">
      {
        tasks.map( (task) => {
          return <Task id={task.id} title={task.title} isComplete={task.isComplete} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        })
      }
    </ul>
  );
}

function Task({id, title, isComplete, toggleComplete, deleteTask}) {
  return (
   <li id={id}>
     <input type="checkbox" className="checkbox" checked={isComplete} onChange={() => toggleComplete(id)} />
     <span>{title}</span>
     <button className="delete" onClick={() => deleteTask(id)}>Delete</button>
   </li>
  )
}


export default TaskList;
