import React, { useState } from 'react';

import TaskList from './TaskList';
import Header from './Header';
import Instructions from './Instructions';
import TasksSummary from './TasksSummary';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {id: "some-random-uuid-1", title: "Start to prepare presentation for Sheffield", isComplete: true},
    {id: "some-random-uuid-2", title: "Realise it's way too hard", isComplete: false},
    {id: "some-random-uuid-3", title: "PANIC!!!!!", isComplete: true},
    {id: "some-random-uuid-4", title: "Give presentation", isComplete: false},
    {id: "some-random-uuid-5", title: "Get banned from Sheffield Uni for ever", isComplete: false},
  ])

  function getCompletedCount() {
    return tasks.filter(tasks => tasks.isComplete).length
  }

  return (
    <div>
      <Header />
      <Instructions />
      <article class="max-width-wrapper">
        <h2>Tasks</h2>
        <TasksSummary completedCount={getCompletedCount()} totalCount={tasks.length} />
        <TaskList tasks={tasks} />
        <AddTask />
      </article>
    </div>
  );
}

export default App;
