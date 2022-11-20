import React from 'react';

function TaskList() {
  return (
    <ul id="list">
      <Task id="some-random-uuid-1" title="Start to prepare presentation for Sheffield" isComplete={true} />
      <Task id="some-random-uuid-2" title="Realise it's way too hard" isComplete={true} />
      <Task id="some-random-uuid-3" title="PANIC!!!!!" isComplete={true} />
      <Task id="some-random-uuid-4" title="Give presentation" isComplete={false} />
      <Task id="some-random-uuid-5" title="Get banned from Sheffield Uni for ever" isComplete={false} />
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
