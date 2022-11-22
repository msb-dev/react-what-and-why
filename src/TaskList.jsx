import React from "react";

function TaskList() {
  return (
    <ul id="list">
      <li id="some-random-uuid-1">
        <input type="checkbox" className="checkbox" checked />
        <span>Start to prepare presentation for Sheffield</span>
        <button className="delete">Delete</button>
      </li>
      <li id="some-random-uuid-2">
        <input type="checkbox" className="checkbox" checked />
        <span>Realise it's way too hard</span>
        <button className="delete">Delete</button>
      </li>
      <li id="some-random-uuid-3">
        <input type="checkbox" className="checkbox" checked />
        <span>PANIC!!!!!</span>
        <button className="delete">Delete</button>
      </li>
      <li id="some-random-uuid-4">
        <input type="checkbox" className="checkbox" />
        <span>Give presentation</span>
        <button className="delete">Delete</button>
      </li>
      <li id="some-random-uuid-5">
        <input type="checkbox" className="checkbox" />
        <span>Get banned from Sheffield Uni for ever</span>
        <button className="delete">Delete</button>
      </li>
    </ul>
  );
}

export default TaskList;
