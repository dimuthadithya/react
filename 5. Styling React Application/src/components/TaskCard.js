import React from 'react';
import style from './TaskCard.module.css';

export const TaskCard = ({ id, index, complete, name, handleDelete, info }) => {
  return (
    <li className={complete ? 'completed' : 'incompleted'}>
      <span className={style.title}>
        {id} - {name} - <h6>{info}</h6>
      </span>
      <button onClick={() => handleDelete(id)} className="delete">
        Delete
      </button>
    </li>
  );
};
