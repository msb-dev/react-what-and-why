import React from 'react';

import TaskList from './TaskList';
import Header from './Header';
import Instructions from './Instructions';
import TasksSummary from './TasksSummary';
import AddTask from './AddTask';

function App() {
  return (
    <div>
      <Header />
      <Instructions />
      <article className="max-width-wrapper">
        <h2>Tasks</h2>
        <TasksSummary />
        <TaskList />
        <AddTask />
      </article>
    </div>
  );
}

export default App;
