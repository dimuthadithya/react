import React, { useState } from 'react';
import './TaskList.css';
import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks, setTasks }) => {
  const [show, SetShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleShow() {
    SetShow(!show);
  }

  return (
    <section className="taskCard">
      <div className="heading">
        <h1>TaskList</h1>
        <button onClick={handleShow}>{show ? 'Hide Task' : 'Show Task'}</button>
      </div>
      <div className="task">
        <ul>
          {show &&
            tasks.map(({ id, name, complete }, index) => {
              return (
                <TaskCard
                  id={id}
                  name={name}
                  complete={complete}
                  handleDelete={handleDelete}
                  key={index}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
};
