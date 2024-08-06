import React from 'react';

export const TaskCard = ({ id, index, complete, name, handleDelete, info }) => {
  return (
    <li className={complete ? 'completed' : 'incompleted'}>
      <span>
        {id} - {name} - <h6>{info}</h6>
      </span>
      <button onClick={() => handleDelete(id)} className="delete">
        Delete
      </button>
    </li>
  );
};
