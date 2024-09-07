import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lecture', complete: true },
    { id: 5281, name: 'Edit React Lecture', complete: false },
    { id: 5293, name: 'Watch Lecture', complete: false }
  ]);

  return (
    <div>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
