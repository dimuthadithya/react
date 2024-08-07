import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <TaskList title="random" subtitle="test" info="prop drilling" />
      </div>
      <Footer />
    </>
  );
}

export default App;
