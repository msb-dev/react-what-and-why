import React, { useState } from "react";

import TaskList from "./TaskList";
import Header from "./Header";
import Instructions from "./Instructions";
import TasksSummary from "./TasksSummary";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "some-random-uuid-1",
      title: "Start to prepare presentation for Sheffield",
      isComplete: true,
    },
    {
      id: "some-random-uuid-2",
      title: "Realise it's way too hard",
      isComplete: true,
    },
    { id: "some-random-uuid-3", title: "PANIC!!!!!", isComplete: true },
    { id: "some-random-uuid-4", title: "Give presentation", isComplete: false },
    {
      id: "some-random-uuid-5",
      title: "Get banned from Sheffield Uni for ever",
      isComplete: false,
    },
  ]);

  function getCompletedCount() {
    return tasks.filter((tasks) => tasks.isComplete).length;
  }

  function toggleComplete(taskId) {
    const index = tasks.findIndex((task) => task.id === taskId);

    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  function toggleComplete(taskId) {
    const index = tasks.findIndex((task) => task.id === taskId);

    setTasks([
      ...tasks.slice(0, index),
      { ...tasks[index], isComplete: !tasks[index].isComplete },
      ...tasks.slice(index + 1),
    ]);
  }

  return (
    <div>
      <Header />
      <Instructions />
      <article className="max-width-wrapper">
        <h2>Tasks</h2>
        <TasksSummary
          completedCount={getCompletedCount()}
          totalCount={tasks.length}
        />
        <TaskList tasks={tasks} toggleComplete={toggleComplete} />
        <AddTask />
      </article>
    </div>
  );
}

export default App;
