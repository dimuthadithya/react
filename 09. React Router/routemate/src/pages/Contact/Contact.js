import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('-------------');

    navigate('/');
  };

  return (
    <div className="components">
      <h1>contact</h1>
      <button onClick={handleSubmit}>Submit Form</button>
      <Outlet />
    </div>
  );
};
