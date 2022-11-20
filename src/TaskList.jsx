import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([
    {id: "some-random-uuid-1", title: "Start to prepare presentation for Sheffield", isComplete: true},
    {id: "some-random-uuid-2", title: "Realise it's way too hard", isComplete: true},
    {id: "some-random-uuid-3", title: "PANIC!!!!!", isComplete: true},
    {id: "some-random-uuid-4", title: "Give presentation", isComplete: false},
    {id: "some-random-uuid-5", title: "Get banned from Sheffield Uni for ever", isComplete: false},
  ])

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
     <input type="checkbox" class="checkbox" checked={isComplete} />
     <span>{title}</span>
     <button class="delete">Delete</button>
   </li>
  )
}


export default TaskList;
