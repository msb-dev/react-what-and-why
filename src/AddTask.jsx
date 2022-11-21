import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTask({addTask}) {
  const [userInput, setUserInput] = useState('')

  function handleChange(event) {
    setUserInput(event.currentTarget.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: userInput,
      isComplete: false
    }

    addTask(newTask)
    setUserInput('')
  }

  return (
    <form id="add-todo" onSubmit={handleSubmit}>
      <input id="add-textbox" value={userInput} onChange={handleChange} />
      <button id="add-button">Add</button>
    </form>
  );
}

export default AddTask;
