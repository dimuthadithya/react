import React from 'react';

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    if (task.id) {
      const updateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleTimeString()}`
            }
          : todo
      );

      setTaskList(updateTask);
      setTask({});
    } else {
      const id = Math.floor(Math.random() * 100000);
      const task = {
        id: id,
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleTimeString()}`
      };
      setTask({});
      setTaskList([...taskList, task]);
    }
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
          value={task.name || ''}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? 'Update' : 'Add'} Task</button>
      </form>
    </section>
  );
};
