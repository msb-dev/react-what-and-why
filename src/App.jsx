import React from "react";

import TaskList from "./TaskList";

function App() {
  return (
    <div>
      <header>
        <div className="max-width-wrapper header">
          <img src="https://www.cambridgeconsultants.com/wp-content/uploads/2024/10/CC-marque-homepage-blue-2024.png" />
          <h1>Hello, Manchester!</h1>
        </div>
      </header>
      <aside className="max-width-wrapper">
        <div className="instructions">
          <p>
            Feel free to play around with all the code here: this is your own
            personal "fork" of our project.
          </p>
          <p>
            Don't worry - you can always get back to a working example by
            selecting a different "branch" from the dropdown at the top of the
            sidebar on the left.
          </p>
        </div>
      </aside>
      <article className="max-width-wrapper">
        <h2>Tasks</h2>
        <p>
          Completed <span id="completed-count">3</span> out of
          <span id="total-count"> 5</span>
        </p>
        <TaskList />
        <form id="add-todo">
          <input id="add-textbox" />
          <button id="add-button">Add</button>
        </form>
      </article>
    </div>
  );
}

export default App;
