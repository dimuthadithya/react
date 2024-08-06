import React from 'react';

export const TaskCard = ({ id, index, complete, name, handleDelete }) => {
  return (
    <li className={complete ? 'completed' : 'incompleted'}>
      <span>
        {id} - {name}
      </span>
      <button onClick={() => handleDelete(id)} className="delete">
        Delete
      </button>
    </li>
  );
};
