import React from 'react';

export const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const id = Math.floor(Math.random() * 100000);
    const task = {
      id: id,
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleTimeString()}`
    };

    e.target.task.value = '';

    setTaskList([...taskList, task]);
  };

  return (
    <section>
      <form action="" className="addTask" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoCapitalize="off"
          placeholder=" task...."
          maxLength={25}
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};
