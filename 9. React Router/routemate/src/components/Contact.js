import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('-------------');

    navigate('/');
  };

  return (
    <div>
      <h1>contact</h1>
      <button onClick={handleSubmit}>Submit Form</button>
    </div>
  );
};
