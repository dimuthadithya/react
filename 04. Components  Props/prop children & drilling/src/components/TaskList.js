import React from 'react';
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lecture', complete: true },
    { id: 5281, name: 'Edit React Lecture', complete: false },
    { id: 5293, name: 'Watch Lecture', complete: false }
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    console.log(id);

    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <h1>
        Task List {props.title} {props.subtitle}
      </h1>
      <button onClick={handleShow} className="btn-show">
        Toggle
      </button>
      <ul>
        {show &&
          tasks.map(({ id, name, complete }, index) => (
            <TaskCard
              id={id}
              name={name}
              complete={complete}
              handleDelete={handleDelete}
              key={index}
              info={props.info}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title"> Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
          culpa?
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title"> Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          dolorem tempora quisquam ullam magni delectus amet voluptates
          praesentium ipsa veniam.
        </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title"> Lorem, ipsum.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ut.
          Quidem tempore cupiditate voluptatem praesentium.
        </p>
      </BoxCard>
    </div>
  );
};
