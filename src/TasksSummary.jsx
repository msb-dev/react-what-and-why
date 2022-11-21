import React from 'react';

function TasksSummary({completedCount, totalCount}) {
  return (
    <p>
      Completed <span id="completed-count">{completedCount}</span> out of
      <span id="total-count">{" " + totalCount}</span>
    </p>
  );
}

export default TasksSummary;
