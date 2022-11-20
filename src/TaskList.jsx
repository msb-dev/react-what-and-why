import React from 'react';

function TaskList() {
  return (
    <ul id="list">
      <li id="some-random-uuid-1">
        <input type="checkbox" class="checkbox" checked />
        <span>Start to prepare presentation for Sheffield</span>
        <button class="delete">Delete</button>
      </li>
      <li id="some-random-uuid-1">
        <input type="checkbox" class="checkbox" checked />
        <span>Realise it's way too hard</span>
        <button class="delete">Delete</button>
      </li>
      <li id="some-random-uuid-1">
        <input type="checkbox" class="checkbox" checked />
        <span>PANIC!!!!!</span>
        <button class="delete">Delete</button>
      </li>
      <li id="some-random-uuid-1">
        <input type="checkbox" class="checkbox" />
        <span>Give presentation</span>
        <button class="delete">Delete</button>
      </li>
      <li id="some-random-uuid-1">
        <input type="checkbox" class="checkbox" />
        <span>Get banned from Sheffield Uni for ever</span>
        <button class="delete">Delete</button>
      </li>
    </ul>
  );
}

export default TaskList;
