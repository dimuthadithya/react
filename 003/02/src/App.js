import { useState } from 'react';
import './App.css';

function App() {
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
    <>
      <div className="App">
        <h1>Task List</h1>
        <button onClick={handleShow} className="btn-show">
          Toggle
        </button>
        <ul>
          {show &&
            tasks.map(({ id, name, complete }, index) => (
              <li key={id} className={complete ? 'completed' : 'incompleted'}>
                <span>
                  {id} - {name}
                </span>
                <button onClick={() => handleDelete(id)} className="delete">
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
