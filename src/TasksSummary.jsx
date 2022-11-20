import React from 'react';

function TasksSummary() {
  return (
    <p>
      Completed <span id="completed-count">3</span> out of
      <span id="total-count"> 5</span>
    </p>
  );
}

export default TasksSummary;
