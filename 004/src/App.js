import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <TaskList title="random" subtitle="test" />
      </div>
    </>
  );
}

export default App;
