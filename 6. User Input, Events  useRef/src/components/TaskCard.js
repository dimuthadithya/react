import React from 'react';
import style from './TaskCard.css';

export const TaskCard = ({ id, index, complete, name, handleDelete }) => {
  return (
    <li className={complete ? 'completed' : 'incompleted'}>
      <span className={style.title}>
        {id} - {name}
      </span>
      <button onClick={() => handleDelete(id)} className="delete">
        Delete
      </button>
    </li>
  );
};
