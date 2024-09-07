import React, { useRef, useState } from 'react';
import './AddTask.css';

export const AddTask = ({ tasks, setTasks }) => {
  // const [taskValue, setTaskValue] = useState('');
  const [progress, setProgress] = useState(false);
  const taskRef = useRef('');

  const handleReset = () => {
    taskRef.current.value = '';
    setProgress(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: progress
    };

    setTasks([...tasks, task]);

    handleReset();
  };

  return (
    <section className="addTask">
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={taskRef}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name .."
          autoCapitalize="off"
        />
        <select
          onChange={(event) => {
            setProgress(event.target.value === 'true');
          }}
          value={progress}
        >
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
